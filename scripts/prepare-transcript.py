#!/usr/bin/env python3
"""Prépare le transcript d'un épisode à partir de l'export CSV de Zencastr.

L'export de la Recording Room couvre tout l'enregistrement, y compris ce qui a
été coupé au montage. Le script :
  1. ignore tout ce qui précède la phrase d'ouverture (--start, ex. « Bonjour à tous »),
  2. recale les horodatages sur la vidéo publiée,
  3. supprime les hallucinations connues de la transcription automatique,
  4. corrige les noms propres et termes techniques mal transcrits (glossaires),
  5. fusionne les répliques consécutives d'un même intervenant.

Usage :
  python3 scripts/prepare-transcript.py export.csv --start "Bonjour à tous" \
      --glossary src/content/episodes/<slug>/glossary.json \
      > src/content/episodes/<slug>/transcript.txt
"""
import argparse, csv, json, re, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
GLOBAL_GLOSSARY = HERE / 'transcript-glossary.json'

# Lignes inventées par le modèle de transcription sur des silences.
NOISE = re.compile(
    r"^(–\s*)?sous-titrage.*$"
    r"|^(merci|ok|oui|ouais|hum|euh|rires|au revoir|see ya|c'est ça|ah, ok|tout à fait)\s*[.!?…]*$",
    re.I,
)


def parse_ts(value: str) -> float:
    # Zencastr écrit « mm:ss.cc » ou « h:mm:ss.cc », parfois « 03:08.100 ».
    parts = value.strip().split(':')
    seconds = float(parts[-1].split('.')[0]) + float('0.' + parts[-1].split('.')[1]) if '.' in parts[-1] else float(parts[-1])
    minutes = int(parts[-2]) if len(parts) > 1 else 0
    hours = int(parts[-3]) if len(parts) > 2 else 0
    return hours * 3600 + minutes * 60 + seconds


def fmt_ts(seconds: float) -> str:
    seconds = max(0, int(seconds))
    h, rem = divmod(seconds, 3600)
    m, s = divmod(rem, 60)
    return f'{h}:{m:02d}:{s:02d}' if h else f'{m:02d}:{s:02d}'


def load_glossary(paths):
    rules = {}
    for path in paths:
        if path and Path(path).exists():
            rules.update(json.loads(Path(path).read_text(encoding='utf-8')))
    return rules


def apply_glossary(text: str, rules: dict) -> str:
    for wrong, right in rules.items():
        text = re.sub(r'(?<!\w)' + re.escape(wrong) + r'(?!\w)', right, text)
    return text


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('csv')
    ap.add_argument('--start', help="Début de la première phrase de la vidéo publiée")
    ap.add_argument('--offset', type=float, help='Ou : secondes coupées au début')
    ap.add_argument('--glossary', help="Glossaire propre à l'épisode (JSON)")
    ap.add_argument('--keep-noise', action='store_true')
    args = ap.parse_args()

    with open(args.csv, encoding='utf-8-sig', newline='') as f:
        rows = [r for r in csv.DictReader(f, delimiter='\t') if r.get('Transcript')]

    offset = args.offset or 0.0
    if args.start:
        needle = args.start.lower()
        hit = next((r for r in rows if needle in r['Transcript'].lower()), None)
        if not hit:
            sys.exit(f'Phrase de départ introuvable : {args.start!r}')
        offset = parse_ts(hit['Timestamp'])
    rows = [r for r in rows if parse_ts(r['Timestamp']) >= offset - 0.01]
    rows.sort(key=lambda r: parse_ts(r['Timestamp']))

    rules = load_glossary([GLOBAL_GLOSSARY, args.glossary])
    blocks = []  # [timestamp, speaker, [phrases]]
    for r in rows:
        text = r['Transcript'].strip()
        if not args.keep_noise and NOISE.match(text):
            continue
        text = apply_glossary(text, rules)
        speaker = r['Speaker'].strip()
        if blocks and blocks[-1][1] == speaker:
            blocks[-1][2].append(text)
        else:
            blocks.append([parse_ts(r['Timestamp']) - offset, speaker, [text]])

    out = []
    for ts, speaker, phrases in blocks:
        out.append(f'[{fmt_ts(ts)}] {speaker}\n' + ' '.join(phrases))
    sys.stdout.write('\n\n'.join(out) + '\n')
    print(f'{len(blocks)} répliques, décalage {offset:.2f} s', file=sys.stderr)


if __name__ == '__main__':
    main()

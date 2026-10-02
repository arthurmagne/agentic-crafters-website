# Agentic Crafters website

## Run locally

Use a Node.js version supported by the locked Astro dependency: Node.js 18.20.8, 20.3 or later in the 20.x line, or 22 and later. Then install the locked dependencies and start the development server:

```sh
npm ci
npm run dev -- --host 0.0.0.0
```

Open the site at:

- English: <http://localhost:4321/>
- French: <http://localhost:4321/fr/>

Astro refreshes the local preview as you change project files. The `--host 0.0.0.0` option sets the server's listening address to all network interfaces; the URLs above access it from the same machine. The `/fr/` route is the French page defined by the project.

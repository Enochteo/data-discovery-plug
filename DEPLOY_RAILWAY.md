Railway deployment guide — Enoch's Data Discovery Platform

This document shows the steps to deploy the app to Railway using the Railway CLI. It assumes you have a Railway account and the Railway CLI installed.

Quick summary:

- The project uses a single Node process (`server/insight.js`) to run an Express API and serve the Vite-built frontend `dist` directory in production.
- `npm run build` creates the `dist` folder; `npm start` runs `node server/insight.js` which serves the static files and the `/insight` AI endpoint.

Prerequisites

- Node.js (recommended >= 18)
- npm
- Railway CLI: https://railway.app/
- Railway account and an active project

Local production test (before deploying)

1. Build the app locally:

```bash
cd /path/to/data-discovery-plug
npm install
npm run build
```

2. Start the server to serve the built frontend and API:

```bash
# optionally set NODE_ENV=production to enable static serving
NODE_ENV=production PORT=4000 npm start
# open http://localhost:4000
```

Railway CLI deployment steps

1. Install Railway CLI (if not already):

```bash
# macOS (Homebrew)
brew install railway
# or via npm
npm install -g railway
```

2. Login and initialize/link a project

```bash
railway login
cd /path/to/data-discovery-plug
railway init # follow prompts to create/link a project
```

3. Add environment variables

Set any required secrets. Common ones for this repo:

- `OPENAI_API_KEY` or `OPENAI_KEY` (if you plan to use the AI endpoint with a real provider)
- Any other keys your integrations require

You can set env vars via the Railway dashboard or with the CLI:

```bash
railway variables set OPENAI_API_KEY=your_key_here
```

4. Configure the service to build and start

Railway automatically runs `npm install` and `npm run build` if present. Ensure the following are set in the Railway service settings (if you need to customize):

- Build command: `npm run build`
- Start command: `npm start`
- Port: Railway will provide a port via the `PORT` env var — `server/insight.js` reads `process.env.PORT` by default.

5. Deploy

```bash
railway up
```

Railway will run the build and then start the service. The `server/insight.js` process will serve the frontend from `dist` and expose `/insight`.

Notes & tips

- If you prefer to run frontend and API as separate services, you can create two Railway services: one static for the frontend (use `npm run build` + static hosting) and one Node service for the API. The single-service approach used here is simpler for demos.

- If you plan to use third-party AI services (OpenAI), ensure you add the API key to Railway and do not commit it to git.

- If you hit memory/time limits for large dataset parsing, consider moving heavy parsing to a background worker or Web Worker.

- To connect a custom domain, use the Railway dashboard's domain settings.

Rollback & logs

- To view logs:

```bash
railway logs
```

- To redeploy after changes:

```bash
git add .
git commit -m "Deploy tweaks"
git push
railway up
```

If you want, I can:

- Create a `Procfile` or `railway` config to preconfigure the service, or
- Run local smoke tests (build then start) here to confirm the `start` script and static serving work.

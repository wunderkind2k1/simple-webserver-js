# preview-demo-js

Minimal **Next.js** app that shows [Beforeprod](https://beforeprod.com) preview deployments on every pull request.

Open a PR → GitHub Actions builds the app → Beforeprod spins up an isolated preview → the **HTTPS preview URL is written into the PR description**. Close the PR → the preview is cleaned up.

Sibling demo (Go): [`preview-demo-go`](https://github.com/beforeprod-com/preview-demo-go)  
Action used under the hood: [`preview-deployment-action`](https://github.com/beforeprod-com/preview-deployment-action)

## Run locally

Requires Node **20.9+**.

```bash
npm install
npm run dev
```

Production-style start (port **4522**, Beforeprod’s expected port):

```bash
npm run build
npm start
```

## What the workflows do

On every pull request (`opened`, `synchronize`, `reopened`), the build workflow deploys to Beforeprod via `beforeprod-com/preview-deployment-action` and writes the preview URL into the PR description.

When the PR is closed, the cleanup workflow stops the preview app.

### Required secrets

| Secret | Description |
|--------|-------------|
| `BP_USER` | Beforeprod username |
| `BP_PASSWORD` | Beforeprod password |

### Permissions

Deploy workflow needs `pull-requests: write`. Cleanup needs `pull-requests: read`.

## Learn more

- Product: [beforeprod.com](https://beforeprod.com)
- Blog: [What is Beforeprod](https://beforeprod.com/blog/what-is-beforeprod)

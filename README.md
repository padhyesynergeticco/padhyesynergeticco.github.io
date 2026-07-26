# FinRo Bazzar

Static Vite + React + TypeScript website prepared for Azure Static Web Apps.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Azure Static Web Apps

Create an Azure Static Web App linked to this repository and add its deployment token as the GitHub Actions secret `AZURE_STATIC_WEB_APPS_API_TOKEN`.

- App location: `/`
- Build command: `npm run build`
- Output location: `dist`

SPA fallback and security headers are configured in `staticwebapp.config.json`.

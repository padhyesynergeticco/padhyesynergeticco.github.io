# Padhye Synergetic Company

Static Vite + React + TypeScript website prepared for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages

The site is deployed from the `main` branch using GitHub Actions.

1. Make sure GitHub Pages is enabled for the repository and set to use GitHub Actions.
2. Push to `main` to build and publish the `dist` folder.
3. If you add client-side routing later, keep `public/404.html` in place so direct refreshes still work.

# devops-pipelines

Simple Node.js Hello World app with CI/CD using GitHub Actions and GitHub Pages.

## Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## Test

```bash
npm test
```

## CI/CD

On every push to `main`, GitHub Actions:

1. Installs dependencies.
2. Runs tests.
3. Deploys the static `public` page to GitHub Pages.

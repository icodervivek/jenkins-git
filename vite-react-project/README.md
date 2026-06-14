# Jenkins Practice Lab

A small Vite + React + TypeScript + Tailwind CSS app used as a playground for
practicing Git workflows and building an end-to-end Jenkins CI/CD pipeline.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` – start the Vite development server
- `npm run build` – type-check and build for production
- `npm run lint` – run ESLint
- `npm run preview` – preview the production build locally

## Jenkins Pipeline

The CI/CD pipeline runs the following stages:

1. **Checkout** – pull source from Git
2. **Install** – `npm install` dependencies
3. **Lint** – `npm run lint`
4. **Build** – `npm run build`
5. **Deploy** – ship the build to EC2

Edit `src/App.tsx`, commit, and watch your Jenkins pipeline run.

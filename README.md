# Systems Over Goals

A portfolio website showcasing 20 AI-powered tools built around the philosophy that consistent systems create more lasting success than one-time goals.

Live site: [systemsovergoals.com](https://systemsovergoals.com)

## Tech Stack

- **Next.js 16** (App Router, fully static output)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** with `@tailwindcss/typography`
- **Vercel** (hosting)

## Pages

| Route | Description |
|---|---|
| `/` | Philosophy article + full project grid |
| `/projects` | Filterable project listing |
| `/projects/[slug]` | Detail page for each of 20 projects |
| `/about` | Brand story and featured projects |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Search engine directives |

## Project Data

All project data lives in [`src/data/projects.json`](src/data/projects.json). Screenshot images are stored in `/public`. To add or update a project, edit the JSON file — no database or CMS required.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

Deployed on Vercel. Push to `main` to trigger a production deployment. No environment variables required.

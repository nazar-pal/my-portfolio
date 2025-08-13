My personal portfolio built with Next.js 15, React 19, Tailwind CSS v4, and a small set of headless UI primitives.

Getting started

```bash
npm install
npm run dev
```

Tech stack

- Next.js App Router, Server Components
- React 19
- Tailwind CSS v4
- class-variance-authority + tailwind-merge
- lucide-react icons

Project structure

- `app/`: Next.js routes, layout, and global styles
- `components/`: UI and section components
- `data/`: static content and config
- `lib/`: utilities
- `public/`: static assets

Notes

- Dark theme is default via the `dark` class on `<html>`.
- Resume link is intentionally removed until `public/Resume.pdf` is added.

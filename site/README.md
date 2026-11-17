# Qingquan Zhang's academic homepage

This Astro project uses [Scholarly](https://github.com/jxpeng98/astro-theme-scholars) v0.9.0 (commit `1270329`).

From this directory, with Node.js 24 and pnpm 11:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

`pnpm build` writes the static site to `dist/`.

- Edit the homepage introduction, roles, and links in `site.config.ts`.
- Edit appointments, education, and service in `src/data/about.yml`.
- Edit publication records in `src/data/publications.bib`. Use `featured = {yes}` to feature a paper on the homepage and `summary` for a short author-written description. Use `abstract` for the paper's abstract.
- Edit projects in `src/content/projects/`.
- The locally saved CV source is in `cv-source/`. Git ignores this directory, and Astro serves static files from `public/`.

# Abdullah Ibrahim — Portfolio

An editorial developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content updates

All external links, featured projects, technologies, services, and resume content live in `data/portfolio.ts`. Replace placeholder values there without editing individual section components.

Project imagery can use either a local path from `public/` (recommended) or a remote URL. Add the value to the relevant project object's `image` property in `data/portfolio.ts`. New projects use the same typed `Project` shape and are rendered automatically when added to the `projects` array.

The non-project image slots are centralized in `portfolioImages` in the same file: `profile`, `heroDetail`, the four process images, and `contactVisual`. External destinations are centralized in `portfolioLinks`; placeholder destinations intentionally remain disabled until replaced.

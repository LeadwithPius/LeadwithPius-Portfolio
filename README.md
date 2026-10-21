# Bruce Pius | Portfolio

Personal portfolio of Bruce Pius: web developer, designer and videographer.

**Live site:** https://leadwithpius.netlify.app/

Built with React 18 and Vite, with animated backgrounds (OGL) and motion effects. Fully responsive, with a contact form handled by Netlify Forms.

## Features

- Responsive layout for mobile, tablet and desktop
- Project showcase carousel
- Skills, About and Contact sections
- Netlify Forms contact form with honeypot spam protection
- SEO: meta tags, Open Graph / Twitter cards, JSON-LD, `sitemap.xml`, `robots.txt`

## Tech stack

React 18 · Vite · motion · OGL · CSS3 · Netlify

## Getting started

```bash
git clone https://github.com/LeadwithPius/LeadwithPius-Portfolio.git
cd LeadwithPius-Portfolio
npm install
npm run dev        # http://localhost:5173
```

Other scripts: `npm run build` (production build to `dist/`), `npm run preview`, `npm run format`.

## Project structure

```
.
├── index.html            # entry HTML: SEO tags, structured data, Netlify form
├── vite.config.js
├── netlify.toml          # build + cache/security headers
├── public/               # served as-is at the site root
│   ├── assets/           # images and résumé PDF
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.ico
├── src/
│   ├── main.jsx          # React entry
│   ├── App.jsx           # page layout
│   ├── components/       # Navbar, Intro, About, Skills, Projects, ContactForm, ...
│   └── styles/global.css
└── docs/                 # supporting documents and notes
```

## Deployment

Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`). Every push to `main` redeploys.

## Contact

[LinkedIn](https://www.linkedin.com/in/bruce-pius-034821256/) · [GitHub](https://github.com/LeadwithPius)

## License

[MIT](LICENSE)

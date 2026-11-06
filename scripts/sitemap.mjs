import { writeFileSync, readFileSync } from 'node:fs'
const base = (process.env.VITE_SITE_URL || 'https://www.example.com').replace(/\/$/, '')
const read = (f) => readFileSync(new URL(`../src/data/${f}`, import.meta.url), 'utf8')
const slugs = (f) => [...read(f).matchAll(/^\s{4}slug: '([^']+)'/gm)].map((m) => m[1])
const paths = ['/', '/about', '/services', ...slugs('services.ts').map((s) => `/services/${s}`), '/products', ...slugs('products.ts').map((s) => `/products/${s}`), '/who-we-serve', '/contact']
writeFileSync(new URL('../dist/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n')}\n</urlset>\n`)
writeFileSync(new URL('../dist/robots.txt', import.meta.url), `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`)
console.log(`sitemap: ${paths.length} urls`)

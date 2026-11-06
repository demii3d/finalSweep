import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { services } from '../data/services'
import { productCategories } from '../data/products'
import { site } from '../data/site'

const col = 'font-heading text-sm font-bold uppercase tracking-wider text-white'
const lnk = 'text-[0.92rem] text-white/75 underline-offset-4 hover:text-white hover:underline'

export function Footer() {
  const hasContact = site.email || site.phone || site.address || site.openingHours
  return (
    <footer className="bg-[#0f2338] text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-[0.92rem] text-white/75">Professional cleaning services and cleaning products for homes, properties and businesses.</p>
          {hasContact && (
            <address className="mt-5 space-y-1 text-[0.92rem] not-italic text-white/75">
              {site.email && <p><a className="hover:underline" href={`mailto:${site.email}`}>{site.email}</a></p>}
              {site.phone && <p><a className="hover:underline" href={`tel:${site.phone}`}>{site.phone}</a></p>}
              {site.address && <p>{site.address}</p>}
              {site.openingHours && <p>{site.openingHours}</p>}
            </address>
          )}
          {site.social.length > 0 && (
            <ul className="mt-4 flex gap-4">{site.social.map((s) => <li key={s.href}><a className={lnk} href={s.href} rel="noopener noreferrer" target="_blank">{s.label}</a></li>)}</ul>
          )}
        </div>
        <nav aria-label="Cleaning services">
          <h2 className={col}>Cleaning Services</h2>
          <ul className="mt-4 space-y-2">{services.map((s) => <li key={s.slug}><Link className={lnk} to={`/services/${s.slug}`}>{s.navLabel}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Cleaning products">
          <h2 className={col}>Cleaning Products</h2>
          <ul className="mt-4 space-y-2">{productCategories.map((c) => <li key={c.slug}><Link className={lnk} to={`/products/${c.slug}`}>{c.name}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Company">
          <h2 className={col}>Company</h2>
          <ul className="mt-4 space-y-2">
            {[['About Us', '/about'], ['Who We Serve', '/who-we-serve'], ['Contact Us', '/contact'], ['Privacy Policy', '/privacy-policy'], ['Cookie Policy', '/cookie-policy']].map(([l, t]) => <li key={t}><Link className={lnk} to={t}>{l}</Link></li>)}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-5 text-sm text-white/65">© {new Date().getFullYear()} {site.name}. All rights reserved. Photography shown is illustrative stock imagery and does not depict Final Sweep projects.</p>
      </div>
    </footer>
  )
}

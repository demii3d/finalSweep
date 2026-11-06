import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { absoluteUrl } from '../lib/seo'

export interface Crumb { label: string; to?: string }

export function Breadcrumbs({ items, tone = 'light' }: { items: Crumb[]; tone?: 'light' | 'dark' }) {
  const all: Crumb[] = [{ label: 'Home', to: '/' }, ...items]
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, ...(c.to && { item: absoluteUrl(c.to) }) })),
  }
  const dark = tone === 'dark'
  return (
    <nav aria-label="Breadcrumb">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${dark ? 'text-white/80' : 'text-muted'}`}>
        {all.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
            {c.to && i < all.length - 1 ? (
              <Link to={c.to} className="underline-offset-4 hover:underline">{c.label}</Link>
            ) : (
              <span aria-current="page" className={dark ? 'font-semibold text-white' : 'font-semibold text-navy'}>{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

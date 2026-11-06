import { site, ogImage } from '../data/site'

export const absoluteUrl = (path: string) => `${site.url.replace(/\/$/, '')}${path}`

export const organisationLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: absoluteUrl('/favicon.svg'),
  image: absoluteUrl(ogImage),
  // Only verified details are emitted.
  ...(site.email && { email: site.email }),
  ...(site.phone && { telephone: site.phone }),
  ...(site.social.length && { sameAs: site.social.map((s) => s.href) }),
})

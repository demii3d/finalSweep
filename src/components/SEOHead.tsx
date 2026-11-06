import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { absoluteUrl } from '../lib/seo'
import { ogImage, ogImageAlt, site } from '../data/site'

interface Props {
  title: string
  description: string
  noindex?: boolean
  jsonLd?: object | object[]
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

/** Lightweight head manager (no extra dependency). */
export function SEOHead({ title, description, noindex, jsonLd }: Props) {
  const { pathname } = useLocation()
  const full = title.includes(site.shortName) ? title : `${title} | ${site.name}`
  const url = absoluteUrl(pathname === '/' ? '/' : pathname)
  const img = absoluteUrl(ogImage)

  useEffect(() => {
    document.title = full
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('property', 'og:title', full)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:image:alt', ogImageAlt)
    setMeta('property', 'og:locale', 'en_GB')
    setMeta('property', 'og:site_name', site.name)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', full)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', img)
    setMeta('name', 'twitter:image:alt', ogImageAlt)
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = url

    document.head.querySelectorAll('script[data-seo-ld]').forEach((n) => n.remove())
    if (jsonLd) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.dataset.seoLd = ''
      s.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(s)
    }
  }, [full, description, url, img, noindex, jsonLd])

  return null
}

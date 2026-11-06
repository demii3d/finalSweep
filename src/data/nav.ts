import { services } from './services'
import { productCategories } from './products'

export const mainNav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Cleaning Services', to: '/services', children: services.map((s) => ({ label: s.navLabel, to: `/services/${s.slug}` })) },
  { label: 'Cleaning Products', to: '/products' },
  { label: 'Who We Serve', to: '/who-we-serve' },
  { label: 'Contact Us', to: '/contact' },
] as const

export const productNav = productCategories.map((c) => ({ label: c.name, to: `/products/${c.slug}` }))

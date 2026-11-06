import { Link } from 'react-router-dom'
import { SEOHead } from '../components/SEOHead'
import { HeroSection } from '../components/HeroSection'
import { SectionHeading } from '../components/SectionHeading'
import { ProductCategoryCard } from '../components/Cards'
import { CTASection } from '../components/CTASection'
import { Button } from '../components/Button'
import { absoluteUrl } from '../lib/seo'
import { productCategories } from '../data/products'

export default function ProductsIndex() {
  const ld = { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: productCategories.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, url: absoluteUrl(`/products/${c.slug}`) })) }
  return (
    <>
      <SEOHead title="Cleaning Products & Supplies" description="Cleaning solutions, detergents, disinfectants, tools, equipment and essentials for households and businesses from Final Sweep Co. Ltd." image="/images/products.jpg" jsonLd={ld} />
      <HeroSection crumbs={[{ label: 'Cleaning Products' }]} eyebrow="Division 2" title="Cleaning Products & Supplies" text="Essential products and materials for everyday cleaning, for individuals, households and businesses." image="/images/products.jpg" imageAlt="Gloved hands handling cleaning products">
        <Button to="/contact?type=products">Enquire About Products</Button>
      </HeroSection>

      <section className="section">
        <div className="container-page">
          <SectionHeading title="The Essentials for a Cleaner Space." text="Alongside our cleaning services, Final Sweep Co. Ltd supplies the products used in everyday cleaning. Browse our categories, then get in touch to discuss what you need." />
          <nav aria-label="Product categories" className="mt-8 flex flex-wrap justify-center gap-2">
            {productCategories.map((c) => <Link key={c.slug} to={`/products/${c.slug}`} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:border-brand hover:text-brand">{c.name}</Link>)}
          </nav>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((c) => <li key={c.slug} className="flex [&>article]:w-full"><ProductCategoryCard category={c} /></li>)}
          </ul>
        </div>
      </section>
      <CTASection title="Looking for Specific Products?" text="Tell us what you need and we will let you know what we can supply." primary={{ label: 'Request Product Information', to: '/contact?type=products' }} />
    </>
  )
}

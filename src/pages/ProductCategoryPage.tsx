import { Link, useParams } from 'react-router-dom'
import { SEOHead } from '../components/SEOHead'
import { HeroSection } from '../components/HeroSection'
import { Button } from '../components/Button'
import { ProductCard } from '../components/Cards'
import { CTASection } from '../components/CTASection'
import { getCategory, getProductsByCategory, productCategories } from '../data/products'
import NotFound from './NotFound'

export default function ProductCategoryPage() {
  const { slug = '' } = useParams()
  const c = getCategory(slug)
  if (!c) return <NotFound />
  const items = getProductsByCategory(c.slug)
  return (
    <>
      <SEOHead title={c.name} description={c.seoDescription} image={c.image} />
      <HeroSection crumbs={[{ label: 'Cleaning Products', to: '/products' }, { label: c.name }]} eyebrow="Cleaning Products" title={c.name} text={c.intro} image={c.image} imageAlt={c.imageAlt}>
        <Button to={`/contact?type=products&category=${c.slug}`}>Enquire About Products</Button>
      </HeroSection>

      <section className="section">
        <div className="container-page">
          <h2 className="h-section">Products in this category</h2>
          {items.length > 0 ? (
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map((p) => <li key={p.id}><ProductCard product={p} /></li>)}</ul>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-[#b9c4cd] bg-soft p-8 sm:p-12">
              <h3 className="text-xl font-bold">Product listings coming soon</h3>
              <p className="mt-2 max-w-2xl text-muted">Our online catalogue is being prepared. In the meantime, tell us what you need and we will respond with the options we can supply. Typical items in this category include:</p>
              <ul className="mt-5 flex flex-wrap gap-2">{c.examples.map((e) => <li key={e} className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-navy shadow-card">{e}</li>)}</ul>
              <Button to={`/contact?type=products&category=${c.slug}`} className="mt-7">Request Product Information</Button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-soft py-12">
        <div className="container-page">
          <h2 className="text-xl font-bold">More product categories</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {productCategories.filter((x) => x.slug !== c.slug).map((x) => <li key={x.slug}><Link to={`/products/${x.slug}`} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy hover:border-brand hover:text-brand">{x.name}</Link></li>)}
          </ul>
        </div>
      </section>
      <CTASection title="Need Help Choosing?" text="Share your requirements and we will get back to you with product information." primary={{ label: 'Request Product Information', to: `/contact?type=products&category=${c.slug}` }} />
    </>
  )
}

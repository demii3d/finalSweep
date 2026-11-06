import { SEOHead } from '../components/SEOHead'
import { HeroSection } from '../components/HeroSection'
import { ClientCategoryCard } from '../components/Cards'
import { CTASection } from '../components/CTASection'
import { audiences } from '../data/audiences'
import { Link } from 'react-router-dom'

export default function WhoWeServe() {
  return (
    <>
      <SEOHead title="Who We Serve" description="Cleaning services and products for households, landlords, property managers, offices, retail premises, commercial businesses and private clients." />
      <HeroSection crumbs={[{ label: 'Who We Serve' }]} eyebrow="Our Customers" title="Supporting Homes, Properties and Businesses." text="Residential and commercial customers, with cleaning services and supplies tailored to each." image="/images/commercial.jpg" imageAlt="Clean, modern commercial interior" />
      <section className="section">
        <div className="container-page">
          <nav aria-label="Customer types" className="mb-10 flex flex-wrap gap-2">
            {audiences.map((a) => <Link key={a.id} to={`#${a.id}`} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy hover:border-brand hover:text-brand">{a.name}</Link>)}
          </nav>
          <ul className="grid gap-6 lg:grid-cols-2">
            {audiences.map((a) => <li key={a.id} className="flex [&>article]:w-full"><ClientCategoryCard audience={a} /></li>)}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  )
}

import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { SEOHead } from '../components/SEOHead'
import { HeroSection } from '../components/HeroSection'
import { Button } from '../components/Button'
import { Img } from '../components/Img'
import { ServiceGrid } from '../components/Cards'
import { CTASection } from '../components/CTASection'
import { getService, services } from '../data/services'
import { absoluteUrl } from '../lib/seo'
import NotFound from './NotFound'

const List = ({ items }: { items: string[] }) => (
  <ul className="mt-5 space-y-3">{items.map((i) => <li key={i} className="flex gap-3"><Check size={20} className="mt-0.5 shrink-0 text-teal-dark" aria-hidden="true" /><span>{i}</span></li>)}</ul>
)

export default function ServiceDetail() {
  const { slug = '' } = useParams()
  const s = getService(slug)
  if (!s) return <NotFound />
  const related = s.related.map((r) => services.find((x) => x.slug === r)!).filter(Boolean)
  const ld = { '@context': 'https://schema.org', '@type': 'Service', name: s.name, description: s.seoDescription, serviceType: s.name, url: absoluteUrl(`/services/${s.slug}`) }

  return (
    <>
      <SEOHead title={s.name} description={s.seoDescription} image={s.image} jsonLd={ld} />
      <HeroSection crumbs={[{ label: 'Cleaning Services', to: '/services' }, { label: s.name }]} eyebrow="Cleaning Services" title={s.name} text={s.heroTagline} image={s.image} imageAlt={s.imageAlt}>
        <Button to={`/contact?type=services&service=${s.slug}`}>Request a Cleaning Quote</Button>
      </HeroSection>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <h2 className="h-section">About {s.name}</h2>
            {s.intro.map((p) => <p key={p} className="lead mt-5">{p}</p>)}
            <h3 className="mt-12 text-2xl font-bold">What the service covers</h3>
            <List items={s.covers} />
            <h3 className="mt-12 text-2xl font-bold">Typical requirements</h3>
            <p className="mt-3 text-muted">To agree the right arrangement, it helps to know:</p>
            <List items={s.requirements} />
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Img src={s.image} alt={s.imageAlt} w={800} h={600} className="aspect-[4/3] w-full rounded-2xl object-cover" />
            <div className="card p-6">
              <h3 className="text-xl font-bold">Suitable for</h3>
              <List items={s.suitableFor} />
            </div>
            <div className="rounded-2xl bg-sky p-6">
              <h3 className="text-xl font-bold">Interested in this service?</h3>
              <p className="mt-2 text-[0.95rem] text-muted">Send us your requirements and we will discuss the details with you.</p>
              <Button to={`/contact?type=services&service=${s.slug}`} className="mt-4 w-full">Make an Enquiry</Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-soft section" aria-labelledby="related">
        <div className="container-page">
          <h2 id="related" className="h-section text-center">Related Services</h2>
          <div className="mt-10"><ServiceGrid items={related} /></div>
          <p className="mt-8 text-center"><Link to="/services" className="inline-flex items-center gap-1.5 font-heading font-bold text-brand underline-offset-4 hover:underline">View all cleaning services <ArrowRight size={16} aria-hidden="true" /></Link></p>
        </div>
      </section>
      <CTASection title={`Ready to Discuss ${s.name}?`} text="Tell us what you need and we will be in touch to discuss your requirements." />
    </>
  )
}

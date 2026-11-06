import { SEOHead } from '../components/SEOHead'
import { HeroSection } from '../components/HeroSection'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceGrid } from '../components/Cards'
import { CTASection } from '../components/CTASection'
import { Button } from '../components/Button'
import { absoluteUrl } from '../lib/seo'
import { services } from '../data/services'

export default function ServicesIndex() {
  const ld = { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: absoluteUrl(`/services/${s.slug}`) })) }
  return (
    <>
      <SEOHead title="Professional Cleaning Services" description="Domestic, commercial and office, deep, end-of-tenancy, post-construction and window cleaning, plus laundry and ironing, from Final Sweep Co. Ltd." jsonLd={ld} />
      <HeroSection crumbs={[{ label: 'Cleaning Services' }]} eyebrow="Division 1" title="Professional Cleaning Services" text="Flexible cleaning solutions for residential and commercial environments, from one-off jobs to scheduled and ongoing arrangements." image="/images/commercial.jpg" imageAlt="Clean modern office space">
        <Button to="/contact?type=services">Request a Cleaning Quote</Button>
      </HeroSection>
      <section className="section">
        <div className="container-page">
          <SectionHeading title="Cleaning Solutions for Every Environment." text="Choose a service to see what it covers and who it suits." />
          <div className="mt-12"><ServiceGrid /></div>
        </div>
      </section>
      <CTASection title="Not Sure Which Service You Need?" text="Tell us about your property or premises and we will discuss the most suitable cleaning arrangement with you." />
    </>
  )
}

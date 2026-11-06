import { SEOHead } from '../components/SEOHead'
import { HeroSection } from '../components/HeroSection'
import { Button } from '../components/Button'
import { Img } from '../components/Img'
import { CTASection } from '../components/CTASection'

export default function About() {
  return (
    <>
      <SEOHead title="About Us" description="Final Sweep Co. Ltd provides residential and commercial cleaning services alongside cleaning products and supplies, with a focus on professionalism and customer satisfaction." image="/images/about.jpg" />
      <HeroSection crumbs={[{ label: 'About Us' }]} eyebrow="About Final Sweep" title="A Cleaner Approach to Everyday Environments." text="Dependable cleaning services and cleaning products for homes, properties and businesses." image="/images/about.jpg" imageAlt="Bright, stylish living room" />
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="h-section">Who we are</h2>
            <p className="lead mt-5">Final Sweep Co. Ltd is a cleaning services company providing a comprehensive range of cleaning solutions to residential and commercial customers.</p>
            <p className="mt-4 text-muted">We work with households, landlords, property managers, offices, retail premises and other businesses, offering flexible and reliable services for one-off jobs, scheduled maintenance cleaning and ongoing commercial arrangements.</p>
          </div>
          <Img src="/images/intro.jpg" alt="Tidy open-plan interior" w={1200} h={800} className="aspect-[3/2] w-full rounded-2xl object-cover" />
        </div>
      </section>
      <section className="bg-soft section">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <h2 className="text-2xl font-bold">Cleaning services</h2>
            <p className="mt-3 text-muted">Domestic cleaning, commercial and office cleaning, deep cleaning, end-of-tenancy cleaning, post-construction cleaning, window cleaning, and laundry and ironing services.</p>
            <Button to="/services" variant="outline" className="mt-6">Explore Cleaning Services</Button>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-bold">Cleaning products and supplies</h2>
            <p className="mt-3 text-muted">General-purpose cleaning solutions, detergents, disinfectants, cleaning tools, equipment and accessories, and other essential cleaning materials for individuals, households and businesses.</p>
            <Button to="/products" variant="outline" className="mt-6">Explore Products</Button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">Our commitment</h2>
          <p className="lead mt-5">We aim to build lasting relationships by providing convenient, dependable and cost-effective solutions tailored to individual requirements.</p>
          <p className="mt-4 text-muted">We are committed to maintaining high standards of cleanliness, customer satisfaction and professionalism, while continually developing our cleaning services and product offering.</p>
        </div>
      </section>
      <CTASection title="Let's Talk About Your Requirements" text="Whether you need a cleaning service, cleaning products or both, we would be glad to hear from you." />
    </>
  )
}

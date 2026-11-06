import { Link } from 'react-router-dom'
import { Briefcase, Building2, CalendarClock, HeartHandshake, PackageCheck, Sparkles, type LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { SEOHead } from '../components/SEOHead'
import { Button } from '../components/Button'
import { Img } from '../components/Img'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceGrid, ProductCategoryCard, ProcessStep, ClientCategoryCard } from '../components/Cards'
import { CTASection } from '../components/CTASection'
import { services } from '../data/services'
import { productCategories } from '../data/products'
import { audiences, principles, steps } from '../data/audiences'
import { organisationLd } from '../lib/seo'

const icons: Record<string, LucideIcon> = { Briefcase, Sparkles, CalendarClock, Building2, PackageCheck, HeartHandshake }

export default function Home() {
  const reduce = useReducedMotion()
  const reveal = (d = 0) => (reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const } })

  return (
    <>
      <SEOHead title="Final Sweep Co. Ltd | Professional Cleaning Services & Cleaning Products" description="Professional domestic, commercial and specialist cleaning services plus cleaning products and supplies for homes and businesses from Final Sweep Co. Ltd." jsonLd={organisationLd()} />

      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <Img src="/images/hero.jpg" alt="Bright, modern living space with natural light" w={1800} h={1224} priority className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/40 max-lg:bg-navy/80" aria-hidden="true" />
        <div className="container-page flex min-h-[560px] items-center py-16 sm:min-h-[620px] lg:min-h-[680px]">
          <div className="max-w-2xl">
            <motion.p {...reveal(0)} className="eyebrow !text-teal">Professional Cleaning Services &amp; Supplies</motion.p>
            <motion.h1 {...reveal(0.1)} className="h-display mt-4 !text-white">A Cleaner Space. A Better Standard.</motion.h1>
            <motion.p {...reveal(0.2)} className="mt-6 max-w-xl text-base text-white/90 sm:text-lg">From professional residential and commercial cleaning to essential cleaning products and supplies, Final Sweep Co. Ltd provides dependable solutions to help keep your spaces clean, fresh, and presentable.</motion.p>
            <motion.div {...reveal(0.3)} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/services">Explore Cleaning Services</Button>
              <Button to="/products" variant="ghost-light">Browse Cleaning Products</Button>
            </motion.div>
            <motion.p {...reveal(0.4)} className="mt-8 border-l-2 border-teal pl-3 font-heading text-sm font-semibold text-white/85">Cleaning Solutions for Homes &amp; Businesses</motion.p>
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Img src="/images/intro.jpg" alt="Spacious, tidy open-plan living area with large windows" w={1200} h={800} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift" />
          <div>
            <p className="eyebrow mb-3">About Final Sweep</p>
            <h2 className="h-section">Everything You Need for a Cleaner Environment.</h2>
            <p className="lead mt-5">Final Sweep Co. Ltd brings together professional cleaning services and essential cleaning supplies to support the everyday needs of households, property managers, and businesses.</p>
            <p className="mt-4 text-muted">We take on individual cleaning jobs as well as scheduled and ongoing cleaning arrangements, and alongside them we supply the products and materials needed for everyday cleaning.</p>
            <Button to="/about" className="mt-8">Discover Final Sweep</Button>
          </div>
        </div>
      </section>

      {/* 3. Two divisions */}
      <section className="bg-soft section" aria-labelledby="divisions">
        <div className="container-page">
          <SectionHeading eyebrow="Our Two Divisions" title={<span id="divisions">Two Ways We Keep Spaces Clean</span>} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="card flex flex-col overflow-hidden">
              <Img src="/images/domestic.jpg" alt="Clean, comfortable home interior" w={1200} h={800} className="aspect-[16/9] w-full object-cover" />
              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <p className="eyebrow">Division 1 · Cleaning Services</p>
                <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">Professional Cleaning, Delivered with Care.</h3>
                <p className="mt-3 text-muted">Flexible cleaning solutions for residential and commercial environments, from individual cleaning requirements to scheduled and ongoing cleaning arrangements.</p>
                <ul className="mt-5 grid gap-x-4 gap-y-1 sm:grid-cols-2">
                  {services.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`} className="inline-block py-1.5 text-[0.95rem] font-medium text-brand underline-offset-4 hover:underline">{s.navLabel}</Link></li>)}
                </ul>
                <Button to="/services" className="mt-7 self-start">Explore Cleaning Services</Button>
              </div>
            </article>
            <article className="relative flex flex-col overflow-hidden rounded-2xl bg-navy text-white shadow-card">
              <Img src="/images/products.jpg" alt="Gloved hands handling cleaning products" w={1400} h={800} className="aspect-[16/9] w-full object-cover opacity-90" />
              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <p className="eyebrow !text-teal">Division 2 · Products &amp; Supplies</p>
                <h3 className="mt-2 text-2xl font-extrabold !text-white sm:text-3xl">Essential Products for Everyday Cleaning.</h3>
                <p className="mt-3 text-white/80">Cleaning products and supplies for individuals, households, and businesses, including detergents, disinfectants, cleaning solutions, tools, and other essential materials.</p>
                <ul className="mt-5 grid gap-x-4 gap-y-1 sm:grid-cols-2">
                  {productCategories.map((c) => <li key={c.slug}><Link to={`/products/${c.slug}`} className="inline-block py-1.5 text-[0.95rem] font-medium text-white/90 underline-offset-4 hover:underline">{c.name}</Link></li>)}
                </ul>
                <Button to="/products" variant="light" className="mt-auto self-start">Explore Products</Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Services overview */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Cleaning Services" title="Cleaning Solutions for Every Environment." text="Seven services covering homes, rental properties, workplaces and newly finished spaces." />
          <div className="mt-12"><ServiceGrid /></div>
          <div className="mt-10 text-center"><Button to="/services" variant="secondary">View All Services</Button></div>
        </div>
      </section>

      {/* 5. Products */}
      <section className="bg-sky section">
        <div className="container-page">
          <SectionHeading eyebrow="Cleaning Products & Supplies" title="The Essentials for a Cleaner Space." text="Explore cleaning products and supplies suitable for everyday household and commercial cleaning requirements." />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((c) => <li key={c.slug} className="flex [&>article]:w-full"><ProductCategoryCard category={c} /></li>)}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">Our product range is available by enquiry. Contact us to discuss your requirements.</p>
          <div className="mt-6 text-center"><Button to="/products">Explore Product Range</Button></div>
        </div>
      </section>

      {/* 6. Why */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Why Final Sweep" title="A Commitment to Cleanliness and Professionalism." />
          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => {
              const Icon = icons[p.icon]
              return (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky text-brand"><Icon size={24} aria-hidden="true" /></span>
                  <div><h3 className="text-lg font-bold">{p.title}</h3><p className="mt-1 text-[0.95rem] text-muted">{p.text}</p></div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* 7. Who we serve */}
      <section className="bg-soft section">
        <div className="container-page">
          <SectionHeading eyebrow="Who We Serve" title="Supporting Homes, Properties and Businesses." />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {audiences.filter((a) => a.id !== 'private-clients').map((a) => <li key={a.id} className="flex [&>article]:w-full"><ClientCategoryCard audience={a} /></li>)}
          </ul>
          <div className="mt-10 text-center"><Button to="/who-we-serve" variant="outline">See Who We Serve</Button></div>
        </div>
      </section>

      {/* 8. How it works */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="How It Works" title="Getting Started Is Simple." text="A general guide to how an enquiry typically progresses." />
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => <ProcessStep key={s.n} {...s} />)}
          </ol>
          <p className="mt-10 text-center text-sm text-muted">This is a general customer journey. Availability and timings are confirmed with you directly.</p>
        </div>
      </section>

      {/* 9. CTA */}
      <CTASection />
    </>
  )
}

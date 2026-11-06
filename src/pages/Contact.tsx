import { useSearchParams } from 'react-router-dom'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { SEOHead } from '../components/SEOHead'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ContactForm } from '../components/ContactForm'
import { site } from '../data/site'

export default function Contact() {
  const [params] = useSearchParams()
  const kind = params.get('type') === 'products' ? 'products' : 'services'
  const details = [
    [Mail, site.email], [Phone, site.phone], [MapPin, site.address], [Clock, site.openingHours],
  ] as const
  const shown = details.filter(([, v]) => v)
  return (
    <>
      <SEOHead title="Contact Us" description="Request a cleaning quote or enquire about cleaning products and supplies from Final Sweep Co. Ltd." />
      <section className="bg-navy py-12 sm:py-16">
        <div className="container-page">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} tone="dark" />
          <h1 className="mt-6 text-4xl font-extrabold !text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">Tell us about your cleaning requirements or the products you need, and we will be in touch to discuss them.</p>
        </div>
      </section>
      <section className="section !pt-10 sm:!pt-14">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="card p-5 sm:p-8">
            <ContactForm key={kind} initialKind={kind} initialCategory={params.get('category') ?? undefined} />
          </div>
          <aside className="space-y-4">
            <div className="rounded-2xl bg-sky p-6">
              <h2 className="text-lg font-bold">Contact details</h2>
              {shown.length ? (
                <ul className="mt-3 space-y-2 text-[0.95rem]">{shown.map(([Icon, v]) => <li key={v} className="flex gap-2"><Icon size={18} className="mt-1 shrink-0 text-brand" aria-hidden="true" />{v}</li>)}</ul>
              ) : (
                <p className="mt-2 text-[0.95rem] text-muted">Direct contact details will be published here soon.</p>
              )}
            </div>
            <div className="rounded-2xl border border-line p-6 text-[0.95rem] text-muted">
              <h2 className="text-lg font-bold text-navy">What happens next?</h2>
              <p className="mt-2">We review your enquiry, clarify your requirements and then discuss the arrangement and costs with you.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

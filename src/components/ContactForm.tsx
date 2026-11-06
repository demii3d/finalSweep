import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { services } from '../data/services'
import { productCategories } from '../data/products'
import { submitEnquiry, type EnquiryKind } from '../lib/submitEnquiry'
import { cn } from '../lib/utils'

const customerTypes = ['Household', 'Landlord', 'Property manager', 'Letting / property management company', 'Office', 'Retail premises', 'Commercial business', 'Private client', 'Other']
const propertyTypes = ['House', 'Flat / apartment', 'Office', 'Retail unit', 'Commercial premises', 'Other']
const frequencies = ['One-off', 'Weekly', 'Fortnightly', 'Monthly', 'Other']
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Errors = Record<string, string>
type Status = 'idle' | 'submitting' | 'not-configured' | 'failed'

function Field({ id, label, required, error, children, hint }: { id: string; label: string; required?: boolean; error?: string; children: ReactNode; hint?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-heading text-sm font-bold text-navy">
        {label} {required ? <span aria-hidden="true" className="text-red-700">*</span> : <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1 text-sm text-muted">{hint}</p>}
      {error && <p id={`${id}-err`} className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-red-700"><AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />{error}</p>}
    </div>
  )
}

const a11y = (id: string, error?: string) => ({ id, name: id, 'aria-invalid': !!error, 'aria-describedby': error ? `${id}-err` : undefined })

export function ContactForm({ initialKind, initialCategory }: { initialKind: EnquiryKind; initialCategory?: string }) {
  const [kind, setKind] = useState<EnquiryKind>(initialKind)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const busy = useRef(false)
  const formRef = useRef<HTMLFormElement>(null)
  const tabs: [EnquiryKind, string][] = [['services', 'Cleaning Services Enquiry'], ['products', 'Cleaning Products Enquiry']]

  const validate = (d: Record<string, string>): Errors => {
    const e: Errors = {}
    if (!d.fullName.trim()) e.fullName = 'Please enter your full name.'
    if (!d.email.trim()) e.email = 'Please enter your email address.'
    else if (!emailRe.test(d.email.trim())) e.email = 'Please enter a valid email address, such as name@example.com.'
    if (d.phone.trim() && !/^[+\d][\d\s()+-]{6,}$/.test(d.phone.trim())) e.phone = 'Please enter a valid telephone number or leave this blank.'
    if (kind === 'services') {
      if (!d.service) e.service = 'Please choose the cleaning service you require.'
      if (!d.message.trim()) e.message = 'Please tell us a little about your requirements.'
    } else {
      if (!d.category) e.category = 'Please choose a product category.'
      if (!d.message.trim()) e.message = 'Please describe the products you are looking for.'
    }
    if (d.website) e.website = 'spam'
    return e
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    if (busy.current) return // prevents duplicate submissions
    const raw = Object.fromEntries(new FormData(ev.currentTarget).entries()) as Record<string, string>
    const e = validate(raw)
    setErrors(e)
    if (Object.keys(e).length) {
      if (e.website) return
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      return
    }
    busy.current = true
    setStatus('submitting')
    const { website: _hp, ...data } = raw
    void _hp
    const res = await submitEnquiry(kind, data)
    busy.current = false
    if (res.ok) {
      setStatus('idle')
      setErrors({})
      formRef.current?.reset()
      setSent(true)
    } else setStatus(res.reason)
  }
  const [sent, setSent] = useState(false)

  if (sent)
    return (
      <div role="status" className="card p-8 text-center">
        <CheckCircle2 className="mx-auto text-teal-dark" size={44} aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-bold">Thank you, your enquiry has been sent</h2>
        <p className="mt-2 text-muted">We will review your requirements and be in touch.</p>
        <button type="button" onClick={() => { setSent(false); setStatus('idle') }} className="mt-6 font-heading font-bold text-brand underline underline-offset-4">Send another enquiry</button>
      </div>
    )

  const submitting = status === 'submitting'
  return (
    <div>
      <div role="tablist" aria-label="Enquiry type" className="grid grid-cols-2 gap-1 rounded-xl bg-sky p-1">
        {tabs.map(([k, l]) => (
          <button key={k} type="button" role="tab" id={`tab-${k}`} aria-selected={kind === k} aria-controls="enquiry-panel" disabled={submitting}
            onClick={() => { setKind(k); setErrors({}); setStatus('idle') }}
            className={cn('min-h-12 rounded-lg px-3 py-2 font-heading text-sm font-bold transition sm:text-base', kind === k ? 'bg-white text-navy shadow-card' : 'text-navy/70 hover:text-navy')}>{l}</button>
        ))}
      </div>

      <form key={kind} ref={formRef} id="enquiry-panel" role="tabpanel" aria-labelledby={`tab-${kind}`} noValidate onSubmit={onSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2" aria-live="polite">
          {status === 'not-configured' && (
            <div role="alert" className="flex gap-3 rounded-lg border border-amber-600/40 bg-amber-50 p-4 text-sm text-amber-950">
              <AlertCircle className="shrink-0" size={20} aria-hidden="true" />
              <p><strong>Your enquiry has not been sent.</strong> Online enquiries are not yet available on this website. Please check back soon, or use the contact details published on this page once available.</p>
            </div>
          )}
          {status === 'failed' && (
            <div role="alert" className="flex gap-3 rounded-lg border border-red-700/40 bg-red-50 p-4 text-sm text-red-900">
              <AlertCircle className="shrink-0" size={20} aria-hidden="true" />
              <p><strong>Something went wrong and your enquiry was not sent.</strong> Please try again in a moment. Your details are still in the form.</p>
            </div>
          )}
          {Object.keys(errors).filter((k) => k !== 'website').length > 0 && <p role="alert" className="text-sm font-semibold text-red-700">Please correct the highlighted fields below.</p>}
        </div>

        {/* Honeypot: hidden from people and assistive tech */}
        <div className="absolute -left-[9999px]" aria-hidden="true"><label>Leave blank<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label></div>

        <Field id="fullName" label="Full Name" required error={errors.fullName}><input className="field" type="text" autoComplete="name" {...a11y('fullName', errors.fullName)} /></Field>
        <Field id="email" label="Email Address" required error={errors.email}><input className="field" type="email" autoComplete="email" {...a11y('email', errors.email)} /></Field>
        <Field id="phone" label="Telephone Number" error={errors.phone}><input className="field" type="tel" autoComplete="tel" {...a11y('phone', errors.phone)} /></Field>
        <Field id="customerType" label="Customer Type">
          <select className="field" defaultValue="" {...a11y('customerType')}><option value="">Select…</option>{customerTypes.map((c) => <option key={c}>{c}</option>)}</select>
        </Field>

        {kind === 'services' ? (
          <>
            <Field id="service" label="Cleaning Service Required" required error={errors.service}>
              <select className="field" defaultValue="" {...a11y('service', errors.service)}><option value="">Select a service…</option>{services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}</select>
            </Field>
            <Field id="propertyType" label="Property Type">
              <select className="field" defaultValue="" {...a11y('propertyType')}><option value="">Select…</option>{propertyTypes.map((c) => <option key={c}>{c}</option>)}</select>
            </Field>
            <Field id="propertyAddress" label="Property Address"><input className="field" type="text" autoComplete="street-address" {...a11y('propertyAddress')} /></Field>
            <Field id="preferredDate" label="Preferred Cleaning Date"><input className="field" type="date" {...a11y('preferredDate')} /></Field>
            <Field id="frequency" label="Cleaning Frequency">
              <select className="field" defaultValue="" {...a11y('frequency')}><option value="">Select…</option>{frequencies.map((c) => <option key={c}>{c}</option>)}</select>
            </Field>
            <div className="sm:col-span-2">
              <Field id="message" label="Additional Requirements" required error={errors.message}><textarea className="field min-h-36" rows={5} {...a11y('message', errors.message)} /></Field>
            </div>
          </>
        ) : (
          <>
            <Field id="category" label="Product Category" required error={errors.category}>
              <select className="field" defaultValue={productCategories.some((c) => c.slug === initialCategory) ? productCategories.find((c) => c.slug === initialCategory)!.name : ''} {...a11y('category', errors.category)}><option value="">Select a category…</option>{productCategories.map((c) => <option key={c.slug} value={c.name}>{c.name}</option>)}</select>
            </Field>
            <div className="sm:col-span-2">
              <Field id="message" label="Product Requirements" required error={errors.message} hint="Tell us what you need and roughly how much.">
                <textarea className="field min-h-36" rows={5} {...a11y('message', errors.message)} aria-describedby={errors.message ? 'message-err' : 'message-hint'} />
              </Field>
            </div>
          </>
        )}

        <div className="sm:col-span-2">
          <p className="text-sm text-muted">By submitting this form you agree that we may use your details to respond to your enquiry. See our <Link to="/privacy-policy" className="font-semibold text-brand underline underline-offset-4">Privacy Policy</Link>.</p>
          <button type="submit" disabled={submitting} aria-disabled={submitting} className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-8 py-3 font-heading font-bold text-white transition hover:bg-brand-dark disabled:opacity-70 sm:w-auto">
            {submitting && <Loader2 className="animate-spin" size={18} aria-hidden="true" />}
            {submitting ? 'Sending…' : kind === 'services' ? 'Send Cleaning Enquiry' : 'Send Product Enquiry'}
          </button>
        </div>
      </form>
    </div>
  )
}

import { Button } from './Button'

export function CTASection({ title = 'Ready for a Cleaner Standard?', text = 'Whether you need professional cleaning for your property or essential cleaning supplies for your business, Final Sweep Co. Ltd is ready to discuss your requirements.', primary = { label: 'Request a Cleaning Quote', to: '/contact?type=services' }, secondary = { label: 'Contact Us', to: '/contact' } }: { title?: string; text?: string; primary?: { label: string; to: string }; secondary?: { label: string; to: string } }) {
  return (
    <section className="bg-navy py-16 text-center sm:py-24" aria-labelledby="cta-title">
      <div className="container-page max-w-3xl">
        <h2 id="cta-title" className="h-section !text-white">{title}</h2>
        <p className="mt-4 text-base text-white/80 sm:text-lg">{text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to={primary.to} variant="primary" className="!bg-teal !text-navy hover:!bg-[#3dbdb7]">{primary.label}</Button>
          <Button to={secondary.to} variant="ghost-light">{secondary.label}</Button>
        </div>
      </div>
    </section>
  )
}

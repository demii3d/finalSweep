import { SEOHead } from '../components/SEOHead'
import { Button } from '../components/Button'

export default function NotFound() {
  return (
    <section className="section">
      <SEOHead title="Page Not Found" description="The page you are looking for could not be found." noindex />
      <div className="container-page max-w-xl text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="h-section mt-3">We couldn't find that page.</h1>
        <p className="lead mt-4">The page may have moved or the address may be wrong.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button to="/">Back to Home</Button><Button to="/contact" variant="outline">Contact Us</Button></div>
      </div>
    </section>
  )
}

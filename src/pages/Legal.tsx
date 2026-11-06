import type { ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Breadcrumbs } from '../components/Breadcrumbs'

export function LegalPage({ title, crumb, children }: { title: string; crumb: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-navy py-12 sm:py-16">
        <div className="container-page">
          <Breadcrumbs items={[{ label: crumb }]} tone="dark" />
          <h1 className="mt-6 text-4xl font-extrabold !text-white sm:text-5xl">{title}</h1>
        </div>
      </section>
      <section className="section !pt-10">
        <div className="container-page max-w-3xl">
          <div role="note" className="mb-10 flex gap-3 rounded-lg border border-amber-600/40 bg-amber-50 p-4 text-sm text-amber-950">
            <AlertTriangle className="shrink-0" size={20} aria-hidden="true" />
            <p><strong>Draft – requires legal review before launch.</strong> Items shown as [PLACEHOLDER] must be completed with verified company information.</p>
          </div>
          <div className="space-y-8 text-muted [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">{children}</div>
        </div>
      </section>
    </>
  )
}

import type { ReactNode } from 'react'
import { Breadcrumbs, type Crumb } from './Breadcrumbs'
import { Img } from './Img'

/** Inner-page hero: dark navy panel with photo. */
export function HeroSection({ crumbs, eyebrow, title, text, image, imageAlt, children }: { crumbs?: Crumb[]; eyebrow?: string; title: string; text?: string; image?: string; imageAlt?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="container-page grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:py-20">
        <div className="rise">
          {crumbs && <div className="mb-6"><Breadcrumbs items={crumbs} tone="dark" /></div>}
          {eyebrow && <p className="eyebrow mb-3 !text-teal">{eyebrow}</p>}
          <h1 className="text-4xl font-extrabold !text-white sm:text-5xl">{title}</h1>
          {text && <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">{text}</p>}
          {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </div>
        {image && <Img src={image} alt={imageAlt ?? ''} priority w={1200} h={800} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift" />}
      </div>
    </section>
  )
}

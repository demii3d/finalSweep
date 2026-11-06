import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import type { Service } from '../data/services'
import type { ProductCategory, Product } from '../data/products'
import type { Audience } from '../data/audiences'
import { services } from '../data/services'
import { productCategories } from '../data/products'
import { Img } from './Img'
import { Button } from './Button'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card group relative flex w-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[3/2] overflow-hidden">
        <Img src={service.image} alt={service.imageAlt} w={600} h={400} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{service.name}</h3>
        <p className="mt-2 flex-1 text-[0.95rem] text-muted">{service.summary}</p>
        <Link to={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-brand after:absolute after:inset-0 hover:text-brand-dark">
          Explore Service<span className="sr-only">: {service.name}</span> <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export function ServiceGrid({ items = services }: { items?: Service[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <li key={s.slug} className="flex"><ServiceCard service={s} /></li>
      ))}
    </ul>
  )
}

export function ProductCategoryCard({ category }: { category: ProductCategory }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-navy text-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[4/3] overflow-hidden">
        <Img src={category.image} alt={category.imageAlt} w={600} h={450} className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold !text-white">{category.name}</h3>
        <p className="mt-2 text-[0.95rem] text-white/80">{category.summary}</p>
        <Link to={`/products/${category.slug}`} className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-teal after:absolute after:inset-0">
          View Category<span className="sr-only">: {category.name}</span> <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card overflow-hidden">
      {product.image && <Img src={product.image} alt={product.name} w={400} h={300} className="aspect-[4/3] w-full object-cover" />}
      <div className="p-5">
        <h3 className="text-lg font-bold">{product.name}</h3>
        {product.description && <p className="mt-1 text-sm text-muted">{product.description}</p>}
        <Button to={`/contact?type=products&category=${product.categorySlug}`} variant="outline" className="mt-4 w-full">Request Product Information</Button>
      </div>
    </article>
  )
}

export function ClientCategoryCard({ audience }: { audience: Audience }) {
  return (
    <article id={audience.id} className="card p-6 sm:p-8">
      <h3 className="text-xl font-bold sm:text-2xl">{audience.name}</h3>
      <p className="mt-3 text-muted">{audience.detail}</p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="eyebrow mb-2">Services</p>
          <ul className="space-y-1.5 text-sm">
            {audience.services.map((s) => (
              <li key={s} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-teal-dark" aria-hidden="true" /><Link to={`/services/${s}`} className="font-medium text-brand underline-offset-4 hover:underline">{services.find((x) => x.slug === s)?.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-2">Products</p>
          <ul className="space-y-1.5 text-sm">
            {audience.products.map((p) => (
              <li key={p} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-teal-dark" aria-hidden="true" /><Link to={`/products/${p}`} className="font-medium text-brand underline-offset-4 hover:underline">{productCategories.find((x) => x.slug === p)?.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export function ProcessStep({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <li className="relative">
      <span className="font-heading text-5xl font-extrabold text-brand/20">{n}</span>
      <h3 className="mt-1 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-[0.95rem] text-muted">{text}</p>
    </li>
  )
}

import { Link } from 'react-router-dom'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'light' | 'ghost-light'

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary: 'bg-navy text-white hover:bg-[#0f2338]',
  outline: 'border-2 border-navy/20 text-navy hover:border-navy hover:bg-sky',
  light: 'bg-white text-navy hover:bg-sky',
  'ghost-light': 'border-2 border-white/50 text-white hover:bg-white/10 hover:border-white',
}

const base =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-center font-heading text-[0.95rem] font-bold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60'

export function Button({ to, variant = 'primary', className, children, ...rest }: { to?: string; variant?: Variant; className?: string; children: ReactNode } & Omit<ComponentProps<'button'>, 'className'>) {
  const cls = cn(base, variants[variant], className)
  if (to) return <Link to={to} className={cls}>{children}</Link>
  return <button className={cls} {...rest}>{children}</button>
}

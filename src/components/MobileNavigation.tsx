import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { mainNav } from '../data/nav'
import { Button } from './Button'
import { cn } from '../lib/utils'

export function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sub, setSub] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey) }
  }, [open, onClose])

  return (
    <div id="mobile-nav" className={cn('absolute inset-x-0 top-full z-30 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white shadow-lift transition duration-300 xl:hidden', open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0')}>
      <nav aria-label="Mobile" className="container-page py-6">
        <ul className="divide-y divide-line">
          {mainNav.map((item) =>
            'children' in item ? (
              <li key={item.to}>
                <div className="flex items-center justify-between">
                  <NavLink to={item.to} className="flex-1 py-4 font-heading text-lg font-bold text-navy">{item.label}</NavLink>
                  <button type="button" aria-expanded={sub} aria-controls="m-services" aria-label="Toggle cleaning services list" onClick={() => setSub((v) => !v)} className="flex h-12 w-12 items-center justify-center text-navy">
                    <ChevronDown aria-hidden="true" className={cn('transition-transform', sub && 'rotate-180')} />
                  </button>
                </div>
                <ul id="m-services" hidden={!sub} className="mb-3 space-y-1 rounded-xl bg-soft p-2">
                  {item.children.map((c) => <li key={c.to}><Link to={c.to} className="block rounded-lg px-3 py-3 font-medium text-navy">{c.label}</Link></li>)}
                </ul>
              </li>
            ) : (
              <li key={item.to}><NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => cn('block py-4 font-heading text-lg font-bold', isActive ? 'text-brand' : 'text-navy')}>{item.label}</NavLink></li>
            ),
          )}
        </ul>
        <Button to="/contact?type=services" className="mt-6 w-full">Request a Cleaning Quote</Button>
      </nav>
    </div>
  )
}

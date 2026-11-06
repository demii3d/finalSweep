import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { Button } from './Button'
import { MobileNavigation } from './MobileNavigation'
import { mainNav } from '../data/nav'
import { cn } from '../lib/utils'

const linkCls = ({ isActive }: { isActive: boolean }) =>
  cn('relative whitespace-nowrap rounded-md px-3 py-2 font-heading text-[0.92rem] font-semibold transition-colors hover:text-brand', isActive ? 'text-brand after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded after:bg-teal' : 'text-navy')

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const [dd, setDd] = useState(false)
  const ddRef = useRef<HTMLLIElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { setMenu(false); setDd(false) }, [pathname])
  useEffect(() => {
    if (!dd) return
    const onDoc = (e: MouseEvent) => { if (!ddRef.current?.contains(e.target as Node)) setDd(false) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setDd(false); ddRef.current?.querySelector('button')?.focus() } }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey) }
  }, [dd])

  return (
    <header className={cn('sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-all duration-300', scrolled ? 'border-line shadow-card' : 'border-transparent')}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white">Skip to main content</a>
      <div className={cn('container-page flex items-center justify-between gap-4 transition-all duration-300', scrolled ? 'h-16' : 'h-[4.5rem] lg:h-20')}>
        <Logo />
        <nav aria-label="Main" className="hidden whitespace-nowrap xl:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              'children' in item ? (
                <li key={item.to} ref={ddRef} className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
                  <div className="flex items-center">
                    <NavLink to={item.to} end={false} className={linkCls}>{item.label}</NavLink>
                    <button type="button" aria-expanded={dd} aria-controls="services-menu" aria-label="Toggle cleaning services menu" onClick={() => setDd((v) => !v)} className="-ml-1.5 rounded-md p-1.5 text-navy hover:text-brand">
                      <ChevronDown size={16} aria-hidden="true" className={cn('transition-transform', dd && 'rotate-180')} />
                    </button>
                  </div>
                  <div id="services-menu" hidden={!dd} className="absolute left-0 top-full w-72 pt-2">
                    <ul className="card p-2">
                      {item.children.map((c) => (
                        <li key={c.to}><Link to={c.to} className="block rounded-lg px-3 py-2.5 text-[0.92rem] font-medium text-navy hover:bg-sky hover:text-brand">{c.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.to}><NavLink to={item.to} end={item.to === '/'} className={linkCls}>{item.label}</NavLink></li>
              ),
            )}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button to="/contact?type=services" className="max-xl:!hidden !min-h-11 whitespace-nowrap !px-5">Request a Cleaning Quote</Button>
          <button type="button" className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-navy hover:bg-sky xl:hidden" aria-expanded={menu} aria-controls="mobile-nav" aria-label={menu ? 'Close menu' : 'Open menu'} onClick={() => setMenu((v) => !v)}>
            {menu ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <MobileNavigation open={menu} onClose={() => setMenu(false)} />
    </header>
  )
}

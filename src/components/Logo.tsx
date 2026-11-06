import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

export function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  const light = tone === 'light'
  return (
    <Link to="/" aria-label="Final Sweep Co. Ltd – home" className={cn('inline-flex items-center gap-2.5', className)}>
      <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <rect width="32" height="32" rx="8" fill={light ? '#fff' : '#17324D'} />
        <path d="M9 22h14M9 16h14M9 10h8" stroke={light ? '#17324D' : '#fff'} strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="23" cy="10" r="2" fill="#24A6A0" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cn('whitespace-nowrap font-heading text-[1.15rem] font-extrabold tracking-[0.12em]', light ? 'text-white' : 'text-navy')}>FINAL SWEEP</span>
        <span className={cn('mt-1 font-heading text-[0.6rem] font-semibold tracking-[0.28em]', light ? 'text-white/70' : 'text-muted')}>CO. LTD</span>
      </span>
    </Link>
  )
}

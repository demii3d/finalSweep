import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

export function SectionHeading({ eyebrow, title, text, align = 'center', tone = 'dark', as: Tag = 'h2' }: { eyebrow?: string; title: ReactNode; text?: ReactNode; align?: 'center' | 'left'; tone?: 'dark' | 'light'; as?: 'h1' | 'h2' }) {
  const light = tone === 'light'
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <p className={cn('eyebrow mb-3', light && '!text-teal')}>{eyebrow}</p>}
      <Tag className={cn('h-section', light && '!text-white')}>{title}</Tag>
      {text && <p className={cn('lead mt-4', light && '!text-white/80')}>{text}</p>}
    </div>
  )
}

import type { ImgHTMLAttributes } from 'react'

/** Local, lazy-loaded image with explicit dimensions to avoid layout shift. */
export function Img({ src, alt, w = 1200, h = 800, priority, className, ...rest }: { src: string; alt: string; w?: number; h?: number; priority?: boolean } & ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchPriority: 'high' as const } : {})}
      className={className}
      {...rest}
    />
  )
}

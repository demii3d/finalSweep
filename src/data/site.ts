/**
 * Central company configuration.
 * Anything set to `null` has NOT been supplied and is deliberately hidden from the public site.
 * Fill these in once verified, and the footer, contact page and structured data update automatically.
 */
export const site = {
  name: 'Final Sweep Co. Ltd',
  shortName: 'Final Sweep',
  // TODO: set VITE_SITE_URL at build time to the real production domain.
  url: (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://www.example.com',
  email: null as string | null,
  phone: null as string | null,
  address: null as string | null,
  openingHours: null as string | null,
  social: [] as { label: string; href: string }[],
  // TODO: replace with the real submission endpoint (see src/lib/submitEnquiry.ts).
  enquiryEndpoint: (import.meta.env.VITE_ENQUIRY_ENDPOINT as string | undefined) ?? null,
}

export const ogImage = '/images/hero.jpg'

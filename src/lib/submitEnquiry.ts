import { site } from '../data/site'

export type EnquiryKind = 'services' | 'products'

export type SubmitResult = { ok: true } | { ok: false; reason: 'not-configured' | 'failed' }

/**
 * BACKEND INTEGRATION POINT.
 * POSTs JSON to VITE_ENQUIRY_ENDPOINT. With no endpoint configured it returns `not-configured`
 * and the UI says so honestly rather than claiming delivery.
 */
export async function submitEnquiry(kind: EnquiryKind, data: Record<string, string>): Promise<SubmitResult> {
  if (!site.enquiryEndpoint) return { ok: false, reason: 'not-configured' }
  try {
    const res = await fetch(site.enquiryEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kind, ...data }),
    })
    return res.ok ? { ok: true } : { ok: false, reason: 'failed' }
  } catch {
    return { ok: false, reason: 'failed' }
  }
}

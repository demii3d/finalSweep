import { SEOHead } from '../components/SEOHead'
import { LegalPage } from './Legal'

export default function Cookies() {
  return (
    <>
      <SEOHead title="Cookie Policy" description="Information about cookies and similar technologies on the Final Sweep Co. Ltd website." noindex />
      <LegalPage title="Cookie Policy" crumb="Cookie Policy">
        <p>Last updated: [PLACEHOLDER – date]</p>
        <section><h2>Our current use of cookies</h2><p>At the time of writing, this website does not set analytics, advertising or other non-essential cookies, and does not load third-party tracking. For that reason it does not display a cookie consent banner.</p></section>
        <section><h2>Fonts</h2><p>This website loads typefaces from Google Fonts, which may involve your browser connecting to Google servers. [PLACEHOLDER – legal to confirm whether this needs disclosure or self-hosting.]</p></section>
        <section><h2>If this changes</h2><p>If analytics, marketing or other non-essential technologies are added, a consent mechanism with clear accept, reject and preference options must be implemented first, and this policy updated to list each cookie, its purpose and its duration.</p></section>
      </LegalPage>
    </>
  )
}

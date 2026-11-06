import { SEOHead } from '../components/SEOHead'
import { LegalPage } from './Legal'

export default function Privacy() {
  return (
    <>
      <SEOHead title="Privacy Policy" description="How Final Sweep Co. Ltd handles personal information submitted through this website." noindex />
      <LegalPage title="Privacy Policy" crumb="Privacy Policy">
        <p>Last updated: [PLACEHOLDER – date]</p>
        <section><h2>1. Who we are</h2><p>This website is operated by Final Sweep Co. Ltd. Registered company name, number and address: [PLACEHOLDER]. Data controller details: [PLACEHOLDER]. Contact for privacy matters: [PLACEHOLDER].</p></section>
        <section><h2>2. Information we collect</h2><p>When you submit an enquiry form we ask for the details you choose to provide, which may include:</p><ul><li>Name, email address and telephone number</li><li>Customer type and property type</li><li>Property address and preferred cleaning date</li><li>Details of your cleaning or product requirements</li></ul></section>
        <section><h2>3. How we use it</h2><p>We use this information to respond to your enquiry and discuss the services or products you have asked about. Lawful basis: [PLACEHOLDER].</p></section>
        <section><h2>4. Sharing your information</h2><p>Service providers who process enquiries on our behalf: [PLACEHOLDER – to be confirmed].</p></section>
        <section><h2>5. How long we keep it</h2><p>Retention period: [PLACEHOLDER].</p></section>
        <section><h2>6. Your rights</h2><p>Depending on applicable law, you may have rights to access, correct, delete or restrict the use of your personal information, and to complain to the supervisory authority. Details: [PLACEHOLDER].</p></section>
        <section><h2>7. Cookies</h2><p>See our Cookie Policy for information about cookies and similar technologies.</p></section>
        <section><h2>8. Changes to this policy</h2><p>We may update this policy from time to time. The latest version will be published on this page.</p></section>
      </LegalPage>
    </>
  )
}

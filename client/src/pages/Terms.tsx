import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/siteConfig";

export default function Terms() {
  return (
    <Layout>
      <PageHero
        title="Terms of Use"
        subtitle="Please read these terms carefully before using our website."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
        compact
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-[#0A1F44] prose-headings:font-display prose-a:text-[#C9A84C]">
            <p className="text-gray-500 text-sm">Last Updated: March 27, 2026</p>

            <h2>Acceptance of Terms</h2>
            <p>By accessing and using the Lendia website (lendia.ca), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.</p>

            <h2>About Our Services</h2>
            <p>Lendia is a licensed mortgage brokerage providing mortgage brokerage services to residents of Ontario, Canada.</p>
            <p>Our services include connecting borrowers with lenders, providing mortgage advice, and facilitating mortgage transactions. We are not a lender and do not make lending decisions.</p>

            <h2>Website Content</h2>
            <p>The information provided on this website is for general informational purposes only and does not constitute financial advice. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information.</p>
            <p>Mortgage rates, terms, and conditions displayed on this website are subject to change without notice and may vary based on individual circumstances. The rates shown are not guaranteed and serve as estimates only.</p>

            <h2>Calculator Disclaimer</h2>
            <p>The mortgage calculators provided on this website are for illustrative purposes only. Results are estimates based on the information you provide and may not reflect actual mortgage terms, payments, or costs. For accurate calculations based on your specific situation, please contact us directly.</p>

            <h2>No Professional Advice</h2>
            <p>Nothing on this website constitutes professional financial, legal, or tax advice. You should consult with qualified professionals before making any financial decisions. The content on this website should not be relied upon as a substitute for professional advice.</p>

            <h2>User Submissions</h2>
            <p>When you submit information through our website (contact forms, applications, etc.), you agree that:</p>
            <ul>
              <li>The information you provide is accurate and complete</li>
              <li>You are authorized to provide such information</li>
              <li>Your submission does not create a binding agreement until confirmed by us</li>
              <li>We may use the information in accordance with our Privacy Policy</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of Lendia or its content suppliers and is protected by Canadian and international copyright laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.</p>

            <h2>Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these websites. Visiting third-party websites is at your own risk.</p>

            <h2>Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Lendia shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services.</p>

            <h2>Governing Law</h2>
            <p>These Terms of Use are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein.</p>

            <h2>Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this website. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.</p>

            <h2>Contact</h2>
            <p>For questions about these Terms of Use, please contact us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

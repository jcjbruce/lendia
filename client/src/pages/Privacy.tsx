import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/siteConfig";

export default function Privacy() {
  return (
    <Layout>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        compact
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-[#0A1F44] prose-headings:font-display prose-a:text-[#C9A84C]">
            <p className="text-gray-500 text-sm">Last Updated: March 27, 2026</p>

            <h2>Introduction</h2>
            <p>Lendia ("we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mortgage brokerage services.</p>
            <p>We comply with all applicable Canadian privacy legislation, including the Personal Information Protection and Electronic Documents Act (PIPEDA).</p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>When you use our services, we may collect the following personal information:</p>
            <ul>
              <li>Full name, date of birth, and contact information (address, phone number, email)</li>
              <li>Social Insurance Number (SIN) — required for credit checks with your consent</li>
              <li>Employment and income information</li>
              <li>Financial information including assets, liabilities, and banking details</li>
              <li>Credit history and credit score</li>
              <li>Property information related to your mortgage application</li>
              <li>Government-issued identification</li>
            </ul>

            <h3>Website Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
              <li>Device and operating system information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Process your mortgage application and submit it to potential lenders</li>
              <li>Assess your eligibility for various mortgage products</li>
              <li>Communicate with you about your application status and mortgage options</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our services and website experience</li>
              <li>Send you relevant mortgage-related information (with your consent)</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>We may share your personal information with:</p>
            <ul>
              <li><strong>Lenders and financial institutions</strong> — to process your mortgage application</li>
              <li><strong>Credit bureaus</strong> — to obtain your credit report (with your consent)</li>
              <li><strong>Our brokerage network</strong> — for compliance and operational purposes</li>
              <li><strong>Legal and regulatory authorities</strong> — when required by law</li>
              <li><strong>Service providers</strong> — who assist us in operating our business (bound by confidentiality agreements)</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure data storage, access controls, and regular security assessments.</p>

            <h2>Your Rights</h2>
            <p>Under Canadian privacy law, you have the right to:</p>
            <ul>
              <li>Access your personal information held by us</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent for the collection and use of your information</li>
              <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
            </ul>

            <h2>Cookies</h2>
            <p>Our website uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can control cookie preferences through your browser settings.</p>

            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:</p>
            <ul>
              <li>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              
              <li>Address: {siteConfig.address.full}</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

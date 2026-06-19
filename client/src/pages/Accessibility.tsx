import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/siteConfig";

export default function Accessibility() {
  return (
    <Layout>
      <PageHero
        title="Accessibility"
        subtitle="Our commitment to making our website accessible to everyone."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Accessibility" }]}
        compact
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-[#0A1F44] prose-headings:font-display prose-a:text-[#C9A84C]">
            <h2>Our Commitment</h2>
            <p>Lendia is committed to ensuring that our website is accessible to all users, including those with disabilities. We strive to comply with the Accessibility for Ontarians with Disabilities Act (AODA) and the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>

            <h2>Accessibility Features</h2>
            <p>Our website includes the following accessibility features:</p>
            <ul>
              <li><strong>Keyboard Navigation:</strong> All interactive elements can be accessed and operated using a keyboard alone.</li>
              <li><strong>Screen Reader Compatibility:</strong> Our website is designed to work with popular screen readers.</li>
              <li><strong>Text Alternatives:</strong> Images include descriptive alt text for screen reader users.</li>
              <li><strong>Color Contrast:</strong> We maintain sufficient color contrast ratios between text and background colors.</li>
              <li><strong>Resizable Text:</strong> Text can be resized using browser controls without loss of content or functionality.</li>
              <li><strong>Clear Navigation:</strong> Consistent and predictable navigation throughout the website.</li>
              <li><strong>Form Labels:</strong> All form fields include clear labels and instructions.</li>
              <li><strong>Focus Indicators:</strong> Visible focus indicators for keyboard navigation.</li>
            </ul>

            <h2>Alternative Formats</h2>
            <p>If you require information from our website in an alternative format, please contact us and we will make reasonable efforts to accommodate your request.</p>

            <h2>Feedback</h2>
            <p>We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:</p>
            <ul>
              <li>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              
              <li>Address: {siteConfig.address.full}</li>
            </ul>
            <p>We will respond to accessibility feedback within 5 business days and work to resolve any issues promptly.</p>

            <h2>Ongoing Efforts</h2>
            <p>We are continuously working to improve the accessibility of our website. This includes regular accessibility audits, staff training, and incorporating accessibility best practices into our development process.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

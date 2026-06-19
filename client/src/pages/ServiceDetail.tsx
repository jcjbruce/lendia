import { useParams, useLocation, Link } from "wouter";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { getServiceBySlug, services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import {
  CheckCircle2, Mail, ArrowRight, ChevronRight, ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const service = getServiceBySlug(slug || "");

  useEffect(() => {
    if (!service) setLocation("/services");
  }, [service, setLocation]);

  if (!service) return null;

  const Icon = service.icon;
  const related = service.relatedServices
    .map((rs) => services.find((s) => s.slug === rs))
    .filter(Boolean);

  return (
    <Layout>
      <SEOHead title={service.metaTitle} description={service.metaDescription} />
      <PageHero
        title={service.h1}
        subtitle={service.heroSubheadline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      {/* What It Is */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeading label="Overview" title={`Understanding ${service.name}`} align="left" />
            <div className="space-y-4">
              {service.whatItIs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-gray-700 leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="container">
          <SectionHeading label="Who It's For" title={`Is ${service.name} Right for You?`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whoItsFor.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="font-bold text-[#0A1F44] mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label="Benefits" title={`Why Choose Lendia for ${service.name}`} align="left" />
              <ul className="space-y-3">
                {service.benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#C9A84C] mt-0.5 shrink-0" />
                    <span className="text-gray-700">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0A1F44] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-display font-bold mb-6 text-white">How It Works</h3>
              <div className="space-y-6">
                {service.howItWorks.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C9A84C] text-[#0A1F44] flex items-center justify-center text-sm font-bold shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeading label="Eligibility" title="General Requirements" />
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <ul className="space-y-3">
                {service.eligibility.map((e, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0A1F44] mt-0.5 shrink-0" />
                    <span className="text-gray-700">{e}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm mt-4 italic">
                Don't meet all the criteria? Contact us anyway — we have solutions for almost every situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeading label="FAQ" title={`Frequently Asked Questions About ${service.name}`} />
            <Accordion type="single" collapsible className="space-y-3">
              {service.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-gray-100 rounded-xl px-6 data-[state=open]:border-[#C9A84C]/30 data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#0A1F44] hover:text-[#C9A84C] py-4 [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-[#FAFAFA]">
          <div className="container">
            <SectionHeading label="Related Services" title="You May Also Be Interested In" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((rs) => {
                if (!rs) return null;
                const RsIcon = rs.icon;
                return (
                  <Link
                    key={rs.slug}
                    href={`/services/${rs.slug}`}
                    className="group block bg-white rounded-xl p-5 border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-md transition-all"
                  >
                    <RsIcon className="w-6 h-6 text-[#0A1F44] group-hover:text-[#C9A84C] transition-colors mb-3" />
                    <h3 className="font-bold text-[#0A1F44] group-hover:text-[#C9A84C] transition-colors text-sm">{rs.name}</h3>
                    <span className="inline-flex items-center gap-1 text-[#C9A84C] text-xs font-medium mt-2">
                      Learn More <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            Ready to Discuss {service.name}?
          </h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Get a free, no-obligation consultation. We'll find the best solution for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4" /> {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

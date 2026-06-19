import { Link } from "wouter";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import { ChevronRight, Mail, ArrowRight } from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export default function Services() {
  return (
    <Layout>
      <SEOHead title="Mortgage Services in Ontario | Lendia" description="Explore our full range of mortgage services: purchases, refinancing, renewals, private mortgages, commercial, construction, and more. 50+ lenders." />
      <PageHero
        title="Our Mortgage Services"
        subtitle="From first-time purchases to complex commercial financing, we have the expertise and lender access to find the right mortgage for every situation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.slug} variants={fadeUp}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block bg-white rounded-xl p-6 border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-lg hover:shadow-[#C9A84C]/5 transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#0A1F44]/5 flex items-center justify-center mb-4 group-hover:bg-[#C9A84C]/10 transition-colors">
                      <Icon className="w-6 h-6 text-[#0A1F44] group-hover:text-[#C9A84C] transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A1F44] mb-2 group-hover:text-[#C9A84C] transition-colors">{s.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.shortDescription}</p>
                    <span className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-medium group-hover:gap-2 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Not Sure Which Service You Need?</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">Contact us for a free consultation. We'll assess your situation and recommend the best path forward.</p>
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

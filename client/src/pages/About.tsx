import { Link } from "wouter";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { Shield, Users, Award, Building2, CheckCircle2, Mail, ArrowRight, Star, TrendingUp, Heart, Target } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <SEOHead title="About Lendia — Ontario Mortgage Experts" description="Learn about Lendia — Ontario's trusted mortgage experts. Access to 50+ lenders, competitive rates, and unbiased advice. Toronto, ON." />
      <PageHero
        title="About Lendia"
        subtitle="Ontario's trusted mortgage experts since 2010. We work for you — not the banks."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        image={siteConfig.images.aboutHero}
      />

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label="Our Story" title="Built on Trust, Driven by Results" align="left" />
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Lendia was founded with a simple belief: every Ontario homeowner deserves access to the best mortgage rates and unbiased expert advice. Too many Canadians were leaving money on the table by accepting their bank's first offer without knowing better options existed.
                </p>
                <p>
                  We have access to over 50 lenders, including major banks, credit unions, trust companies, and private lenders. This means we can shop the entire market on your behalf and find the mortgage that truly fits your situation.
                </p>
                <p>
                  Over the past 15 years, we've helped more than 2,000 Ontario families achieve their homeownership goals, funded over $500 million in mortgages, and built a reputation for honest advice, competitive rates, and exceptional service.
                </p>
                <p>
                  We operate with the highest standards of professionalism and ethics. Our service is completely free to you — the lender pays our fee when your mortgage funds.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: Target, title: "Our Mission", desc: "To empower Ontario homeowners with access to the best mortgage products, rates, and advice — ensuring every client makes informed decisions that save them money and build wealth." },
                { icon: Heart, title: "Our Values", desc: "Transparency, integrity, and client-first service. We never recommend a product that isn't in your best interest, and we always explain the 'why' behind our recommendations." },
                { icon: TrendingUp, title: "Our Approach", desc: "We combine deep market knowledge with cutting-edge technology to deliver a mortgage experience that's fast, transparent, and personalized to your unique situation." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#FAFAFA] rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5 text-[#C9A84C]" />
                    <h3 className="font-bold text-[#0A1F44]">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$500M+", label: "Mortgages Funded" },
              { value: "2,000+", label: "Happy Clients" },
              { value: "50+", label: "Lender Partners" },
              { value: "4.9★", label: "Google Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-[#C9A84C]">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Broker vs Bank */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="Broker vs Bank"
            title="Why Work with a Mortgage Broker?"
            description="A mortgage broker works for you, not the bank. Here's how we're different."
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-3 bg-[#0A1F44] text-white text-sm font-semibold">
                <div className="p-4">Feature</div>
                <div className="p-4 text-center">Lendia</div>
                <div className="p-4 text-center">Your Bank</div>
              </div>
              {[
                { feature: "Lender Options", broker: "50+ lenders", bank: "1 lender" },
                { feature: "Rate Shopping", broker: "Automatic", bank: "You do it yourself" },
                { feature: "Cost to You", broker: "Free", bank: "Free" },
                { feature: "Advice Bias", broker: "Unbiased — we work for you", bank: "Biased to their products" },
                { feature: "Pre-Approval Speed", broker: "24 hours", bank: "3-5 days" },
                { feature: "Negotiation", broker: "We negotiate on your behalf", bank: "Take it or leave it" },
                { feature: "Alternative Solutions", broker: "Full spectrum available", bank: "Limited options" },
              ].map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="p-4 font-medium text-[#0A1F44]">{row.feature}</div>
                  <div className="p-4 text-center text-[#C9A84C] font-medium flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> {row.broker}
                  </div>
                  <div className="p-4 text-center text-gray-500">{row.bank}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Licensed & Regulated", desc: "Fully licensed Ontario mortgage brokerage operating with the highest standards of professionalism and regulatory compliance." },
              { icon: Building2, title: "50+ Lender Network", desc: "Access to Canada's top lenders — banks, credit unions, trust companies, and private lenders — all in one place." },
              { icon: Award, title: "15+ Years Experience", desc: "Over a decade and a half of helping Ontario families achieve their homeownership and financial goals." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <item.icon className="w-10 h-10 text-[#C9A84C] mx-auto mb-3" />
                <h3 className="font-bold text-[#0A1F44] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Ready to Experience the Difference?</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">Get a free, no-obligation consultation with our team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Free Consultation <ArrowRight className="w-4 h-4" /></Link>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4" /> {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

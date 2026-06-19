import { Link } from "wouter";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig, ratesData } from "@/data/siteConfig";
import { Mail, ArrowRight, TrendingDown, AlertCircle, CheckCircle2 } from "lucide-react";

export default function Rates() {
  return (
    <Layout>
      <SEOHead title="Current Mortgage Rates in Ontario | Lendia" description="Compare our mortgage rates vs. posted bank rates. Fixed and variable rate options from 50+ lenders. Updated regularly." />
      <PageHero
        title="Current Mortgage Rates"
        subtitle={`Compare our rates vs. posted bank rates. Last updated: ${ratesData.lastUpdated}`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Rates" }]}
        compact
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl p-4 mb-10 flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-[#C9A84C] mt-0.5 shrink-0" />
              <p className="text-sm text-gray-700">{ratesData.disclaimer}</p>
            </motion.div>

            {/* Fixed Rates */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-[#0A1F44] mb-6">Fixed Rate Mortgages</h2>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-3 bg-[#0A1F44] text-white text-sm font-semibold">
                  <div className="p-4">Term</div>
                  <div className="p-4 text-center">Our Rate</div>
                  <div className="p-4 text-center">Posted Bank Rate</div>
                </div>
                {ratesData.fixed.map((rate, i) => (
                  <motion.div
                    key={rate.term}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-[#C9A84C]/5 transition-colors`}
                  >
                    <div className="p-4 font-medium text-[#0A1F44]">{rate.term}</div>
                    <div className="p-4 text-center">
                      <span className="text-[#C9A84C] font-bold text-lg">{rate.rate}</span>
                    </div>
                    <div className="p-4 text-center text-gray-400 line-through">{rate.comparison}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Variable Rates */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-[#0A1F44] mb-6">Variable Rate Mortgages</h2>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-3 bg-[#0A1F44] text-white text-sm font-semibold">
                  <div className="p-4">Term</div>
                  <div className="p-4 text-center">Our Rate</div>
                  <div className="p-4 text-center">Posted Bank Rate</div>
                </div>
                {ratesData.variable.map((rate, i) => (
                  <motion.div
                    key={rate.term}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-[#C9A84C]/5 transition-colors`}
                  >
                    <div className="p-4 font-medium text-[#0A1F44]">{rate.term}</div>
                    <div className="p-4 text-center">
                      <span className="text-[#C9A84C] font-bold text-lg">{rate.rate}</span>
                    </div>
                    <div className="p-4 text-center text-gray-400 line-through">{rate.comparison}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fixed vs Variable */}
            <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-display font-bold text-[#0A1F44] mb-4">Fixed vs Variable: Which Is Right for You?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-[#0A1F44] mb-3 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-[#C9A84C]" /> Fixed Rate
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" /> Payment stays the same for the entire term</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" /> Protection against rate increases</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" /> Ideal for budgeting and predictability</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" /> Best when rates are expected to rise</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A1F44] mb-3 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-[#C9A84C]" /> Variable Rate
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" /> Typically starts lower than fixed rates</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" /> Benefits from rate decreases</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" /> Lower prepayment penalties</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" /> Best when rates are expected to drop</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-6">Not sure which is right for you? <Link href="/contact" className="text-[#C9A84C] font-medium hover:underline">Contact us</Link> for a personalized recommendation based on your situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Want a Personalized Rate Quote?</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">These are our starting rates. Your actual rate may be even lower depending on your profile.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Get Your Rate <ArrowRight className="w-4 h-4" /></Link>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4" /> {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

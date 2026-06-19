import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/siteConfig";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch within 24 hours.");
  };

  return (
    <Layout>
      <SEOHead title="Contact Lendia | Free Mortgage Consultation" description="Contact Lendia for a free, no-obligation mortgage consultation. Send us a message or email info@lendia.ca. Toronto, ON." />
      <PageHero
        title="Contact Us"
        subtitle="Get a free, no-obligation mortgage consultation. We're here to help you find the best rate."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image={siteConfig.images.contactHero}
        compact
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-[#0A1F44] mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1F44] group-hover:text-[#C9A84C] transition-colors">Email</h3>
                    <p className="text-gray-600 text-sm">{siteConfig.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1F44]">Location</h3>
                    <p className="text-gray-600 text-sm">{siteConfig.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1F44]">Hours</h3>
                    <p className="text-gray-600 text-sm">{siteConfig.hours.weekday}</p>
                    <p className="text-gray-600 text-sm">{siteConfig.hours.saturday}</p>
                    <p className="text-gray-600 text-sm">{siteConfig.hours.sunday}</p>
                    <p className="text-[#C9A84C] text-xs mt-1">{siteConfig.hours.note}</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="mt-8 p-6 bg-[#0A1F44] rounded-xl text-white">
                <h3 className="font-bold text-white mb-2">Prefer Email?</h3>
                <p className="text-white/70 text-sm mb-4">Send us a message and we'll respond within 24 hours.</p>
                <a href={`mailto:${siteConfig.email}`} className="btn-gold w-full justify-center text-sm">
                  <Mail className="w-4 h-4" /> Email Us
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl border border-gray-200 p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#0A1F44] mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">We've received your message and will be in touch within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", service: "", message: "" }); }} className="text-[#C9A84C] font-medium hover:underline">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-gray-200 p-8"
                >
                  <h2 className="text-2xl font-display font-bold text-[#0A1F44] mb-6">Send Us a Message</h2>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-[#0A1F44] mb-1.5 block">Full Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#0A1F44] mb-1.5 block">Email *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-[#0A1F44] mb-1.5 block">Phone (optional)</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#0A1F44] mb-1.5 block">Service Interested In</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors bg-white"
                        >
                          <option value="">Select a service...</option>
                          <option value="first-time">First-Time Home Purchase</option>
                          <option value="refinance">Refinancing</option>
                          <option value="renewal">Mortgage Renewal</option>
                          <option value="investment">Investment Property</option>
                          <option value="self-employed">Self-Employed Mortgage</option>
                          <option value="private">Private Mortgage</option>
                          <option value="commercial">Commercial Mortgage</option>
                          <option value="construction">Construction Mortgage</option>
                          <option value="debt-consolidation">Debt Consolidation</option>
                          <option value="pre-approval">Pre-Approval</option>
                          <option value="new-to-canada">New to Canada</option>
                          <option value="home-equity">Home Equity Line of Credit</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#0A1F44] mb-1.5 block">Message *</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors resize-none"
                        placeholder="Tell us about your mortgage needs..."
                        required
                      />
                    </div>
                    <button type="submit" className="btn-gold w-full justify-center">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                    <p className="text-gray-400 text-xs text-center">We'll respond within 24 hours. Your information is kept confidential.</p>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-[400px] bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-[#C9A84C] mx-auto mb-3" />
            <h3 className="font-bold text-[#0A1F44] text-lg">{siteConfig.address.full}</h3>
            <p className="text-gray-500 text-sm mt-1">Serving the Greater Toronto Area and all of Ontario</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

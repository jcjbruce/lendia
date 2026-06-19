import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Send, CheckCircle2, Shield, Clock, Users } from "lucide-react";
import { toast } from "sonner";

export default function Apply() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    mortgageType: "", propertyType: "", purchasePrice: "",
    downPayment: "", employmentType: "", annualIncome: "",
    creditScore: "", timeline: "", comments: ""
  });

  const update = (key: string, val: string) => setForm({ ...form, [key]: val });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Application received! We'll contact you within 24 hours.");
  };

  if (submitted) {
    return (
      <Layout>
        <SEOHead title="Apply for a Mortgage | Lendia" description="Start your mortgage application today. Quick online form, response within 24 hours. Free, no-obligation consultation." />
        <PageHero title="Application Submitted" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Apply" }]} compact />
        <section className="py-20">
          <div className="container max-w-2xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0A1F44] mb-3">Thank You!</h2>
              <p className="text-gray-600 text-lg mb-8">Your application has been received. A licensed mortgage professional will contact you within 24 hours to discuss your options.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn-gold">Return Home</Link>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  <Mail className="w-4 h-4" /> Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead title="Apply for a Mortgage | Lendia" description="Start your mortgage application today. Quick online form, response within 24 hours. Free, no-obligation consultation." />
      <PageHero
        title="Apply for a Mortgage"
        subtitle="Start your mortgage journey today. Fill out our quick application and we'll get back to you within 24 hours."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Apply Now" }]}
        compact
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                { icon: Shield, text: "Secure & Confidential" },
                { icon: Clock, text: "Response in 24 Hours" },
                { icon: Users, text: "Free, No Obligation" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-gray-500 text-sm">
                  <badge.icon className="w-4 h-4 text-[#C9A84C]" />
                  {badge.text}
                </div>
              ))}
            </div>

            {/* Step indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s ? "bg-[#0A1F44] text-white" : "bg-gray-200 text-gray-400"}`}>
                    {s}
                  </div>
                  {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-[#0A1F44]" : "bg-gray-200"}`} />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8">
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                  <h2 className="text-xl font-display font-bold text-[#0A1F44] mb-4">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormInput label="First Name *" value={form.firstName} onChange={(v) => update("firstName", v)} placeholder="John" required />
                    <FormInput label="Last Name *" value={form.lastName} onChange={(v) => update("lastName", v)} placeholder="Smith" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormInput label="Email *" type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="john@example.com" required />
                    <FormInput label="Phone *" type="tel" value={form.phone} onChange={(v) => update("phone", v)} placeholder="Your phone number" required />
                  </div>
                  <div className="flex justify-end">
                    <button type="button" onClick={() => setStep(2)} className="btn-gold text-sm">Next Step</button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                  <h2 className="text-xl font-display font-bold text-[#0A1F44] mb-4">Mortgage Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormSelect label="Mortgage Type" value={form.mortgageType} onChange={(v) => update("mortgageType", v)}
                      options={["Purchase", "Refinance", "Renewal", "Pre-Approval", "Home Equity", "Other"]} />
                    <FormSelect label="Property Type" value={form.propertyType} onChange={(v) => update("propertyType", v)}
                      options={["Detached House", "Semi-Detached", "Townhouse", "Condo", "Multi-Unit", "Commercial"]} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormInput label="Purchase Price / Property Value" value={form.purchasePrice} onChange={(v) => update("purchasePrice", v)} placeholder="$600,000" />
                    <FormInput label="Down Payment" value={form.downPayment} onChange={(v) => update("downPayment", v)} placeholder="$120,000" />
                  </div>
                  <div className="flex justify-between">
                    <button type="button" onClick={() => setStep(1)} className="px-6 py-3 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Back</button>
                    <button type="button" onClick={() => setStep(3)} className="btn-gold text-sm">Next Step</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                  <h2 className="text-xl font-display font-bold text-[#0A1F44] mb-4">Financial Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormSelect label="Employment Type" value={form.employmentType} onChange={(v) => update("employmentType", v)}
                      options={["Full-Time Employed", "Part-Time Employed", "Self-Employed", "Contract", "Retired", "Other"]} />
                    <FormInput label="Annual Income" value={form.annualIncome} onChange={(v) => update("annualIncome", v)} placeholder="$100,000" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormSelect label="Credit Score (Estimate)" value={form.creditScore} onChange={(v) => update("creditScore", v)}
                      options={["Excellent (750+)", "Good (700-749)", "Fair (650-699)", "Below Average (600-649)", "Poor (Below 600)", "Not Sure"]} />
                    <FormSelect label="Timeline" value={form.timeline} onChange={(v) => update("timeline", v)}
                      options={["Immediately", "Within 30 Days", "1-3 Months", "3-6 Months", "Just Exploring"]} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#0A1F44] mb-1.5 block">Additional Comments</label>
                    <textarea
                      value={form.comments}
                      onChange={(e) => update("comments", e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors resize-none"
                      placeholder="Anything else we should know?"
                    />
                  </div>
                  <div className="flex justify-between">
                    <button type="button" onClick={() => setStep(2)} className="px-6 py-3 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Back</button>
                    <button type="submit" className="btn-gold">
                      <Send className="w-4 h-4" /> Submit Application
                    </button>
                  </div>
                </motion.div>
              )}
            </form>

            <p className="text-gray-400 text-xs text-center mt-4">
              Your information is kept strictly confidential. By submitting, you agree to our <Link href="/privacy" className="underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function FormInput({ label, value, onChange, placeholder, type = "text", required }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-[#0A1F44] mb-1.5 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

function FormSelect({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <div>
      <label className="text-sm font-medium text-[#0A1F44] mb-1.5 block">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-colors bg-white"
      >
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

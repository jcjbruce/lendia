import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { testimonials } from "@/data/siteConfig";
import { blogPosts } from "@/data/blogPosts";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import {
  ArrowRight, Star, Shield, Users, TrendingUp,
  CheckCircle2, ChevronRight, Quote, Clock, Award, Building2, Mail
} from "lucide-react";

/* ─── Animated counter ─── */
function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

/* ─── Stagger children wrapper ─── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <Layout>
      <SEOHead title="Lendia — Smarter Mortgages, Better Rates | Ontario" description="Access Canada's top lenders through one platform. Better rates, expert advice, and a mortgage experience built around your life." />

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img
          src={siteConfig.images.heroSkyline}
          alt="Toronto skyline at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071530]/97 via-[#0A1F44]/85 to-[#0A1F44]/50" />
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
        
        <div className="container relative z-10 py-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-md border border-white/[0.12] rounded-full px-5 py-2 mb-8"
            >
              <Shield className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-white/80 text-[13px] font-medium tracking-wide">Licensed Ontario Mortgage Brokerage</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl md:text-5xl lg:text-[3.75rem] font-display font-bold text-white leading-[1.08] mb-7"
            >
              Smarter Mortgages,{" "}
              <span className="text-[#C9A84C] italic">Better Rates</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-lg"
            >
              Access Canada's top lenders through one platform. Expert advice, competitive rates, and a mortgage experience built around your life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-gold text-base !py-4 !px-9">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white/90 rounded-lg font-medium hover:bg-white/[0.06] hover:border-white/30 transition-all"
              >
                <Mail className="w-5 h-5 text-[#C9A84C]" />
                {siteConfig.email}
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-white/[0.08]"
            >
              {[
                { icon: Users, label: "2,000+ Happy Clients" },
                { icon: Building2, label: "50+ Lenders" },
                { icon: Award, label: "15+ Years Experience" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2.5 text-white/50 text-sm">
                  <badge.icon className="w-4 h-4 text-[#C9A84C]/80" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════ STATS BAR ════════════════ */}
      <section className="bg-white border-b border-gray-100/80">
        <div className="container py-12 lg:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: 500, prefix: "$", suffix: "M+", label: "Mortgages Funded" },
              { value: 2000, suffix: "+", label: "Happy Clients" },
              { value: 50, suffix: "+", label: "Lender Partners" },
              { value: 15, suffix: "+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0A1F44] tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-gray-400 text-sm mt-1.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ SERVICES ════════════════ */}
      <section className="py-24 md:py-32 bg-[#FAFAF8]">
        <div className="container">
          <SectionHeading
            label="Our Services"
            title="Mortgage Solutions for Every Situation"
            description="From first-time purchases to complex commercial financing, we have the expertise and lender access to find the right mortgage for you."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.slug} variants={fadeUp}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block bg-white rounded-2xl p-7 border border-gray-100/80 hover:border-[#C9A84C]/20 hover:shadow-[0_8px_32px_rgba(10,31,68,0.06)] transition-all duration-400"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0A1F44]/[0.04] flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/10 transition-colors duration-300">
                      <Icon className="w-5.5 h-5.5 text-[#0A1F44]/70 group-hover:text-[#C9A84C] transition-colors duration-300" />
                    </div>
                    <h3 className="text-[17px] font-bold text-[#0A1F44] mb-2 group-hover:text-[#C9A84C] transition-colors duration-300">
                      {s.name}
                    </h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed mb-5">
                      {s.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ WHY CHOOSE US ════════════════ */}
      <section className="py-24 md:py-32 bg-[#071530] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#C9A84C]/[0.03] rounded-full -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9A84C]/[0.02] rounded-full translate-y-1/2 -translate-x-1/3" />
        <div className="container relative z-10">
          <SectionHeading
            label="Why Lendia"
            title="Why 2,000+ Ontario Families Trust Us"
            description="We're not a bank. We work for you — shopping the entire market to find the best mortgage for your unique situation."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {[
              {
                icon: Building2,
                title: "50+ Lender Partners",
                desc: "Access to Canada's largest lender network. More options means better rates and terms for you."
              },
              {
                icon: Award,
                title: "Expert Guidance",
                desc: "Licensed mortgage professionals with 15+ years of experience navigating Ontario's mortgage landscape."
              },
              {
                icon: TrendingUp,
                title: "Better Rates Guaranteed",
                desc: "We shop the entire market on your behalf. Our clients consistently get rates lower than what banks offer directly."
              },
              {
                icon: Clock,
                title: "Fast Pre-Approvals",
                desc: "Get pre-approved in as little as 24 hours. Know your budget before you start shopping for your home."
              },
              {
                icon: Shield,
                title: "Licensed & Regulated",
                desc: "Fully licensed and regulated mortgage brokerage in Ontario. Your protection is guaranteed."
              },
              {
                icon: Users,
                title: "Free Service",
                desc: "Our service is completely free to you. The lender pays our fee when your mortgage funds. Zero cost, zero obligation."
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-7 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-[#C9A84C] mb-5" />
                <h3 className="text-white font-bold text-[17px] mb-2">{item.title}</h3>
                <p className="text-white/50 text-[14px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ HOW IT WORKS ════════════════ */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            label="How It Works"
            title="Your Mortgage in 4 Simple Steps"
            description="We've simplified the mortgage process so you can focus on what matters — finding your perfect home."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#C9A84C]/10 via-[#C9A84C]/40 to-[#C9A84C]/10" />
            {[
              { step: 1, title: "Free Consultation", desc: "Tell us about your goals. We'll assess your situation and outline your best options." },
              { step: 2, title: "We Shop the Market", desc: "We compare rates and terms from 50+ lenders to find your ideal mortgage." },
              { step: 3, title: "Get Approved", desc: "We handle the paperwork, negotiations, and lender communications." },
              { step: 4, title: "Close & Celebrate", desc: "We coordinate with all parties for a smooth closing. Welcome home!" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center relative"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[#0A1F44] text-white flex items-center justify-center text-lg font-bold mx-auto mb-5 relative z-10 ring-[5px] ring-white shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-[#0A1F44] font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed max-w-[220px] mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ TESTIMONIALS ════════════════ */}
      <section className="py-24 md:py-32 bg-[#FAFAF8]">
        <div className="container">
          <SectionHeading
            label="Client Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what Ontario homeowners have to say about working with Lendia."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                <Quote className="w-8 h-8 text-[#C9A84C]/20 mb-4" />
                <p className="text-gray-600 text-[14px] leading-relaxed mb-5">{t.text}</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-[#0A1F44] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.location} — {t.service}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ BLOG PREVIEW ════════════════ */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            label="Blog & Resources"
            title="Mortgage Insights & Guides"
            description="Expert articles to help you make informed mortgage decisions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2.5">
                    <span className="text-[#C9A84C] font-semibold uppercase tracking-wide text-[11px]">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-[#0A1F44] font-bold text-lg group-hover:text-[#C9A84C] transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] mt-2.5 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:gap-3 transition-all duration-300">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <section className="py-24 md:py-32 bg-[#071530] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <img src={siteConfig.images.heroSkyline} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#071530] via-transparent to-[#071530]/80" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-5 leading-tight">
              Ready to Find Your Best Rate?
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              Get a free, no-obligation consultation. We'll shop 50+ lenders to find the mortgage that's right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold text-base !py-4 !px-9">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white/80 rounded-lg font-medium hover:bg-white/[0.06] hover:border-white/30 transition-all"
              >
                <Mail className="w-5 h-5 text-[#C9A84C]" />
                {siteConfig.email}
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { icon: CheckCircle2, text: "Free service — lenders pay our fee" },
                { icon: CheckCircle2, text: "No obligation consultation" },
                { icon: CheckCircle2, text: "Pre-approval in 24 hours" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/45 text-sm">
                  <item.icon className="w-4 h-4 text-[#C9A84C]/70" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

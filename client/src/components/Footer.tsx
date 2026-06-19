import { Link } from "wouter";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#071530] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/[0.06]">
        <div className="container py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Ready to Get Started?</h3>
            <p className="text-white/60 mt-2 text-[15px]">Get a free, no-obligation mortgage consultation today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-gold text-sm">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/80 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white hover:border-white/30 transition-all">
              <Mail className="w-4 h-4 text-[#C9A84C]" />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/BVnLyE62MZUPPgghWUEffe/lendia-icon-FfXeKDo9w2DjGhaXgHqWLv.webp"
                alt=""
                className="h-12 w-12 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="text-white font-display text-[24px] font-bold tracking-tight">Lendia</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Smarter mortgages, better rates. Access Canada's top lenders through one platform.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-white/60 hover:text-[#C9A84C] transition-colors">
                <Mail className="w-4 h-4 text-[#C9A84C]/70" /> {siteConfig.email}
              </a>
              <div className="flex items-start gap-2.5 text-white/60">
                <MapPin className="w-4 h-4 text-[#C9A84C]/70 mt-0.5 shrink-0" /> {siteConfig.address.full}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/90 font-semibold mb-5 text-xs uppercase tracking-[0.12em]">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/50 text-sm hover:text-[#C9A84C] transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/90 font-semibold mb-5 text-xs uppercase tracking-[0.12em]">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/rates", label: "Current Rates" },
                { href: "/calculators", label: "Mortgage Calculators" },
                { href: "/blog", label: "Blog & Resources" },
                { href: "/contact", label: "Contact Us" },
                { href: "/apply", label: "Apply Now" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-[#C9A84C] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white/90 font-semibold mb-5 text-xs uppercase tracking-[0.12em]">Legal</h4>
            <ul className="space-y-2.5 mb-8">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Use" },
                { href: "/accessibility", label: "Accessibility" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-[#C9A84C] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
              <p className="text-white/35 text-xs leading-relaxed">
                Licensed mortgage brokerage operating in Ontario, Canada. All mortgage services are subject to qualification.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Lendia. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/30 text-xs hover:text-[#C9A84C] transition-colors group"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

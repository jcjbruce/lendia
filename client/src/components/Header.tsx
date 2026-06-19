import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { Menu, X, ChevronDown, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/rates", label: "Rates" },
    { href: "/calculators", label: "Calculators" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#071530] text-white/70 text-[13px] hidden lg:block border-b border-white/5">
        <div className="container flex justify-between items-center py-2.5">
          <div className="flex items-center gap-6">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#C9A84C]" />
              {siteConfig.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
              {siteConfig.address.city}, {siteConfig.address.province}
            </span>
          </div>
          <span className="text-white/40 text-xs tracking-wide uppercase">Licensed Mortgage Brokerage</span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]"
            : "bg-white border-b border-gray-100/80"
        }`}
      >
        <div className="container flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href="/" className="shrink-0 group flex items-center gap-2.5">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/BVnLyE62MZUPPgghWUEffe/lendia-icon-FfXeKDo9w2DjGhaXgHqWLv.webp"
              alt=""
              className="h-14 w-14 object-contain"
            />
            <span className="text-[#0A1F44] font-display text-[26px] font-bold tracking-tight group-hover:opacity-80 transition-opacity">Lendia</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/services"
                    className={`flex items-center gap-1 px-4 py-2.5 text-[14px] font-medium rounded-lg transition-all ${
                      location.startsWith("/services")
                        ? "text-[#C9A84C]"
                        : "text-[#0A1F44]/80 hover:text-[#0A1F44] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1),0_4px_16px_rgba(0,0,0,0.05)] border border-gray-100/80 p-5 grid grid-cols-2 gap-1 mt-2"
                      >
                        {services.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#FAFAF8] transition-all group"
                            >
                              <div className="w-9 h-9 rounded-lg bg-[#0A1F44]/5 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/10 transition-colors">
                                <Icon className="w-4 h-4 text-[#0A1F44]/70 group-hover:text-[#C9A84C] transition-colors" />
                              </div>
                              <div>
                                <span className="text-[13px] font-semibold text-[#0A1F44] group-hover:text-[#C9A84C] transition-colors block">{s.name}</span>
                                <span className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">{s.shortDescription}</span>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 text-[14px] font-medium rounded-lg transition-all ${
                    location === link.href
                      ? "text-[#C9A84C]"
                      : "text-[#0A1F44]/80 hover:text-[#0A1F44] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden md:flex btn-gold text-sm !py-2.5 !px-5">
              Get a Free Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="container py-4 space-y-1">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.href}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-[#0A1F44] font-medium rounded-lg hover:bg-gray-50"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {services.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#C9A84C] rounded-lg"
                              >
                                {s.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 font-medium rounded-lg ${
                        location === link.href ? "text-[#C9A84C] bg-[#C9A84C]/5" : "text-[#0A1F44] hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-3 border-t border-gray-100">
                  <Link href="/contact" className="btn-gold w-full justify-center text-sm">
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

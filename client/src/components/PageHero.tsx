import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  image?: string;
  compact?: boolean;
}

export default function PageHero({ title, subtitle, breadcrumbs, image, compact }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? "py-16 md:py-20" : "py-20 md:py-28"}`}
      style={{
        background: image
          ? undefined
          : "linear-gradient(135deg, #071530 0%, #0A1F44 40%, #0F2D5E 100%)",
      }}
    >
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#071530]/85" />
        </>
      )}
      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      
      <div className="container relative z-10">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-[13px] text-white/40 mb-6"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3 h-3" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#C9A84C] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white max-w-3xl leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] md:text-lg text-white/60 mt-5 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

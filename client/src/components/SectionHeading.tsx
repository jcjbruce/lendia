import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({ label, title, description, align = "center", light }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-14 lg:mb-16 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}
    >
      {label && (
        <span className={`inline-block text-[11px] font-bold tracking-[0.15em] uppercase mb-4 ${light ? "text-[#C9A84C]/80" : "text-[#C9A84C]"}`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-[2.5rem] font-display font-bold leading-tight ${light ? "text-white" : "text-[#0A1F44]"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-[16px] leading-relaxed ${light ? "text-white/60" : "text-gray-500"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

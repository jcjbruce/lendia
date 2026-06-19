import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { blogPosts, blogCategories } from "@/data/blogPosts";
import { siteConfig } from "@/data/siteConfig";
import { Clock, ArrowRight, Mail } from "lucide-react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <SEOHead title="Mortgage Blog & Resources | Lendia" description="Expert mortgage articles, guides, and insights for Ontario homeowners. Learn about rates, first-time buying, refinancing, and more." />
      <PageHero
        title="Blog & Resources"
        subtitle="Expert articles, guides, and insights to help you make informed mortgage decisions."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        image={siteConfig.images.blogHero}
        compact
      />

      <section className="py-16 md:py-24">
        <div className="container">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#0A1F44] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="text-[#C9A84C] font-medium">{post.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    <span>{new Date(post.date).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                  <h3 className="text-[#0A1F44] font-bold text-lg group-hover:text-[#C9A84C] transition-colors leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Have a Mortgage Question?</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">Our team is here to help. Get a free, no-obligation consultation.</p>
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

import { useParams, useLocation, Link } from "wouter";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";
import { siteConfig } from "@/data/siteConfig";
import { Clock, User, ArrowLeft, ArrowRight, Mail } from "lucide-react";


export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const post = getBlogPostBySlug(slug || "");

  useEffect(() => {
    if (!post) setLocation("/blog");
  }, [post, setLocation]);

  if (!post) return null;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <Layout>
      <SEOHead title={`${post.title} | Lendia Blog`} description={post.excerpt} />
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        compact
      />

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
              <span className="text-[#C9A84C] font-medium">{post.category}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              <span>{new Date(post.date).toLocaleDateString("en-CA", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</span>
            </div>

            {/* Featured image */}
            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-10">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none prose-headings:text-[#0A1F44] prose-headings:font-display prose-a:text-[#C9A84C] prose-strong:text-[#0A1F44]"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content
                .replace(/^### (.+)$/gm, '<h3>$1</h3>')
                .replace(/^## (.+)$/gm, '<h2>$1</h2>')
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/^/, '<p>').replace(/$/, '</p>')
              }} />
            </motion.article>

            {/* CTA in article */}
            <div className="mt-12 bg-[#0A1F44] rounded-2xl p-8 text-center">
              <h3 className="text-xl font-display font-bold text-white mb-2">Need Expert Mortgage Advice?</h3>
              <p className="text-white/70 text-sm mb-4">Get a free, no-obligation consultation with our licensed mortgage professionals.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-gold text-sm">
                  Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4" /> {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="mt-16">
                <h3 className="text-xl font-display font-bold text-[#0A1F44] mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {related.map((rp) => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3">
                        <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <h4 className="text-[#0A1F44] font-bold group-hover:text-[#C9A84C] transition-colors leading-snug">{rp.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to blog */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <Link href="/blog" className="inline-flex items-center gap-2 text-[#C9A84C] font-medium hover:gap-3 transition-all">
                <ArrowLeft className="w-4 h-4" /> Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

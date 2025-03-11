
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogList } from "@/components/blog/BlogList";
import { BackToHome } from "@/components/BackToHome";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Heartcode Blog",
    "description": t("blog.description"),
    "url": "https://heartcode.io/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Heartcode",
      "logo": {
        "@type": "ImageObject",
        "url": "https://heartcode.io/og-image.png",
        "width": 1200,
        "height": 630
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "BlogPosting",
          "position": 1,
          "url": "https://heartcode.io/blog/the-importance-of-responsive-design",
          "name": "The Importance of Responsive Design"
        },
        {
          "@type": "BlogPosting",
          "position": 2,
          "url": "https://heartcode.io/blog/optimizing-website-performance",
          "name": "Optimizing Website Performance"
        }
      ]
    }
  };

  return (
    <main className="relative min-h-screen" role="main">
      <SEO 
        title={`${t("blog.title")} | Heartcode - Web Development Agency`}
        description={t("blog.description")}
        schema={blogSchema}
        type="blog"
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
        role="progressbar"
        aria-label="Page scroll progress"
      />
      <div className="container mx-auto px-4 pt-8">
        <BackToHome />
      </div>
      <BlogHeader />
      <BlogList />
      <Footer />
    </main>
  );
};

export default Blog;

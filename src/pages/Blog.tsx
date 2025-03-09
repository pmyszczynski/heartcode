
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogList } from "@/components/blog/BlogList";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Blog = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Heartcode Blog",
    "description": "Insights and updates on web development, design, and technology",
    "url": "https://heartcode.io/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Heartcode",
      "logo": {
        "@type": "ImageObject",
        "url": "/og-image.png"
      }
    }
  };

  return (
    <main className="relative min-h-screen" role="main">
      <SEO 
        title="Blog | Heartcode - Web Development Agency"
        description="Insights and updates on web development, design, and technology"
        schema={schema}
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
        role="progressbar"
        aria-label="Page scroll progress"
      />
      <BlogHeader />
      <BlogList />
      <Footer />
    </main>
  );
};

export default Blog;

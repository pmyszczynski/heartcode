
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Timeline } from "@/components/Timeline";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
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
    "@type": "Organization",
    "name": "Heartcode",
    "url": "https://heartcode.io",
    "logo": "/og-image.png",
    "description": "Crafting exceptional digital experiences through innovative web development solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@heartcode.io",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://heartcode.io"
    ]
  };

  return (
    <main className="relative" role="main">
      <SEO schema={schema} />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
        role="progressbar"
        aria-label="Page scroll progress"
      />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

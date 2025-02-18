
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Server, Users, Lightbulb, Settings } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const TechConsulting = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tech Consulting - Heartcode",
    "description": "Expert technology consulting services to help businesses innovate and grow through digital transformation.",
    "provider": {
      "@type": "Organization",
      "name": "Heartcode"
    }
  };

  const services = [
    {
      icon: Code,
      title: "Technical Architecture",
      description: "We design scalable and maintainable system architectures that grow with your business."
    },
    {
      icon: Server,
      title: "Cloud Solutions",
      description: "Optimize your infrastructure with cloud-native solutions and migration strategies."
    },
    {
      icon: Users,
      title: "Team Augmentation",
      description: "Access skilled developers and tech experts to strengthen your existing team."
    },
    {
      icon: Lightbulb,
      title: "Digital Strategy",
      description: "Transform your business with data-driven technology roadmaps and innovation."
    },
    {
      icon: Settings,
      title: "Process Optimization",
      description: "Streamline your development processes and improve operational efficiency."
    }
  ];

  return (
    <main className="min-h-screen">
      <SEO 
        title="Tech Consulting - Heartcode"
        description="Expert technology consulting services to help businesses innovate and grow through digital transformation."
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Technology Consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Navigate the complex world of technology with expert guidance and strategic solutions tailored to your business needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/get-started">
              <Button size="lg" className="rounded-full">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology consulting services to help you make informed decisions and achieve your business goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how our technology consulting services can help you achieve your goals and drive innovation in your organization.
            </p>
            <Link to="/get-started">
              <Button size="lg" className="rounded-full">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TechConsulting;

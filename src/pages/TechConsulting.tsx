import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Server, Database, Shield, GitBranch, Workflow, Brain, Terminal } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const TechConsulting = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Piotr Myszczyński",
    "description": "Senior Full-Stack Engineer with over 11 years of experience, specializing in technology consulting and system architecture design.",
    "jobTitle": "Senior Full-Stack Engineer",
    "knowsAbout": ["Node.js", "PHP", "Ruby", "Web Development", "System Architecture", "API Design"]
  };

  const expertise = [{
    icon: Code,
    title: "Full-Stack Development",
    description: "Expert in Node.js, PHP, Ruby, and modern web development technologies with over 11 years of hands-on experience."
  }, {
    icon: Brain,
    title: "Technology Stack Selection",
    description: "Strategic guidance on choosing the optimal tech stack for your project's specific needs and goals."
  }, {
    icon: Terminal,
    title: "System Architecture",
    description: "Design of scalable, high-performance architectures with a focus on maintainability and future growth."
  }, {
    icon: Workflow,
    title: "Project Management",
    description: "Agile project leadership experience across 30+ projects, many as technical lead."
  }, {
    icon: Database,
    title: "Database & API Design",
    description: "Expertise in database optimization, RESTful and GraphQL API development for efficient data management."
  }, {
    icon: Shield,
    title: "Security & Performance",
    description: "Implementation of robust security measures and performance optimization across all application layers."
  }, {
    icon: GitBranch,
    title: "Legacy Transformation",
    description: "Strategic modernization of legacy systems while maintaining business continuity."
  }];

  return <main className="min-h-screen">
      <SEO title="Tech Consulting - Piotr Myszczyński" description="Senior Full-Stack Engineer with over 11 years of experience, providing expert technology consulting and development solutions." schema={schema} />
      
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Tech Consultancy</motion.h1>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto space-y-4">
            <p>
              Hi, I'm <span className="text-primary font-semibold">Piotr Myszczyński</span>. With over 11 years of experience 
              in full-stack development and technical leadership across 30+ projects, I help businesses build robust, 
              scalable software solutions.
            </p>
            <p>
              Specializing in Node.js, PHP, Ruby, and modern web development, I provide comprehensive consulting 
              services to transform your technical challenges into successful solutions.
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <Link to="/get-started">
              <Button size="lg" className="rounded-full">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology consulting services backed by years of hands-on experience and successful project delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-background p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Technical Expertise?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how my experience in full-stack development and technical leadership can help you achieve your project goals.
            </p>
            <Link to="/get-started">
              <Button size="lg" className="rounded-full">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>;
};

export default TechConsulting;

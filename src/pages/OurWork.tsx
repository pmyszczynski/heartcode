
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cpu, Globe, BookOpen, BarChart, Users, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { PortfolioItem } from "@/components/PortfolioItem";
import { SEO } from "@/components/SEO";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
}

const OurWork = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Work - Heartcode Portfolio",
    "description": "Explore our portfolio of successful projects where we've helped businesses transform their digital presence.",
    "url": "https://heartcode.io/our-work",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": project.title,
        "description": project.description,
        "url": `https://heartcode.io/our-work#${project.id}`
      }))
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <SEO 
        title="Our Work - Heartcode Portfolio"
        description="Explore our portfolio of successful projects where we've helped businesses transform their digital presence."
        schema={schema}
      />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Explore our portfolio of successful projects where we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <PortfolioItem key={project.id} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    id: 1,
    title: "Agrosmart",
    description: "Smart agricultural monitoring system with real-time tracking and analytics",
    icon: Cpu,
    link: "https://agrosmart.pro/www/"
  },
  {
    id: 2,
    title: "Fintech Startup Website",
    description: "Modern website with Apple-like animations for an innovative startup",
    icon: Globe,
  },
  {
    id: 3,
    title: "Bennabis Health",
    description: "A tech-enabled healthcare platform focused on making medical cannabis more accessible and affordable",
    icon: BarChart,
    link: "https://bennabishealth.com/"
  },
  {
    id: 4,
    title: "Cryptocurency exchange",
    description: "A web application for a cryptocurrency exchange targeting high-volume investors, driving successful acquisition by a major investment corporation",
    icon: BarChart,
  },
  {
    id: 5,
    title: "Outfilm",
    description: "A feature-rich streaming application for Samsung Tizen TVs for LGBTQ+ communities",
    icon: Users,
    link: "https://www.outfilm.pl/"
  },
  {
    id: 6,
    title: "The Coaching Manual",
    description: "A platform for football coaches to create and share training sessions, tactics, and strategies",
    icon: BookOpen,
    link: "https://www.thecoachingmanual.com/"
  },
  {
    id: 7,
    title: "The Ticketing Co",
    description: "A ticketing platform for events and venues, with a focus on user experience and performance",
    icon: Users,
  },
  {
    id: 8,
    title: "M-commerce platform",
    description: "A mobile commerce platform for a well-known eyewear brand, driving a significant increase in online sales",
    icon: Globe,
  },
  {
    id: 9,
    title: "Fimble",
    description: "Invoicing and accounts receivable automation for businesses that struggle to get paid on time",
    icon: Cpu,
    link: "https://www.fimble.co.uk/"
  },
  {
    id: 10,
    title: "Bricknest",
    description: "A platform for property managers to manage their properties, tenants, and maintenance requests",
    icon: BookOpen,
  },
];

export default OurWork;

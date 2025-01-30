import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cpu, Globe, BookOpen, BarChart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <div className="min-h-screen py-16 px-4">
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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="w-full h-64 relative group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-primary/80 to-secondary/80">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  {project.icon && <project.icon className="w-12 h-12 mb-4" />}
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/80 text-center">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Agrosmart",
    description: "Advanced agricultural monitoring system featuring real-time vehicle tracking, fuel consumption monitoring, mobile app integration, and comprehensive machine analytics. Includes SMS notifications, detailed reporting, and secure 24/7 monitoring for agricultural machinery.",
    icon: Cpu
  },
  {
    id: 2,
    title: "Tech Startup Website",
    description: "Clean and modern website for an innovative startup",
    icon: Globe,
  },
  {
    id: 3,
    title: "Educational Platform",
    description: "Interactive learning platform with real-time collaboration",
    icon: BookOpen,
  },
  {
    id: 4,
    title: "Healthcare Dashboard",
    description: "Intuitive analytics dashboard for healthcare providers",
    icon: BarChart,
  },
  {
    id: 5,
    title: "Social Media App",
    description: "Feature-rich social platform with real-time updates",
    icon: Users,
  },
];

export default OurWork;
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CrawlForm } from "@/components/CrawlForm";

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
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
            <CrawlForm />
          </div>
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
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/80">{project.description}</p>
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
    title: "Professional Telemetry & Logistics System",
    description: "Advanced IoT platform revolutionizing agricultural logistics with real-time monitoring, smart sensors, and automated fleet management. Features comprehensive data analytics for optimizing operations and resource utilization.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    title: "Tech Startup Website",
    description: "Clean and modern website for an innovative startup",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    id: 3,
    title: "Educational Platform",
    description: "Interactive learning platform with real-time collaboration",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 4,
    title: "Healthcare Dashboard",
    description: "Intuitive analytics dashboard for healthcare providers",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "Feature-rich social platform with real-time updates",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
];

export default OurWork;
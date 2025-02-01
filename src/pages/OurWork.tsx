import { PortfolioItem } from "@/components/PortfolioItem";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Cpu, PenTool, ShoppingCart } from "lucide-react";

const OurWork = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Work</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects where we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioItem
            title="Agrosmart"
            description="Smart agricultural monitoring system with real-time tracking and analytics."
            icon={<Cpu className="h-6 w-6" />}
          />
          <PortfolioItem
            title="Creative Studio"
            description="Brand identity and website redesign for a digital art studio."
            icon={<PenTool className="h-6 w-6" />}
          />
          <PortfolioItem
            title="EcoShop"
            description="Full-featured e-commerce platform for sustainable products."
            icon={<ShoppingCart className="h-6 w-6" />}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurWork;
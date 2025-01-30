import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PortfolioItemProps {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const PortfolioItem = ({ title, description, icon: Icon, index }: PortfolioItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="w-full h-64 relative group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-primary/80 to-secondary/80">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
          {Icon && <Icon className="w-12 h-12 mb-4" />}
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white/80 text-center">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem; 
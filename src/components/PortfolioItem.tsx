
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioItemProps {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export const PortfolioItem = ({ title, description, icon: Icon, index }: PortfolioItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg"
      role="article"
      aria-label={`Portfolio item: ${title}`}
    >
      <div className="w-full h-64 relative group-hover:scale-105 transition-transform duration-300 bg-card border shadow-sm">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          {Icon && (
            <div 
              className="mb-4 p-3 rounded-lg bg-primary/10"
              role="img"
              aria-label={`${title} icon`}
            >
              <Icon className="w-8 h-8 text-primary" />
            </div>
          )}
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h3>
          <p className="text-muted-foreground text-center">{description}</p>
        </div>
      </div>
    </motion.article>
  );
};

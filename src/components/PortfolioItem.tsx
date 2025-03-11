
import { motion } from "framer-motion";
import { LucideIcon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioItemProps {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  link?: string;
}

export const PortfolioItem = ({ title, description, icon: Icon, index, link }: PortfolioItemProps) => {
  const content = (
    <div className="w-full h-64 relative group-hover:scale-105 transition-transform duration-300 bg-card border shadow-sm">
      {link && (
        <div className="absolute top-2 right-2 z-10 p-1.5 bg-primary/10 rounded-full">
          <ExternalLink className="w-4 h-4 text-primary" aria-label="External link" />
        </div>
      )}
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
        <h3 className="text-xl font-semibold mb-2 text-card-foreground flex items-center gap-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-center">{description}</p>
      </div>
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-lg cursor-pointer",
        link && "ring-1 ring-primary/20 hover:ring-primary/50 transition-all"
      )}
      role="article"
      aria-label={`Portfolio item: ${title}`}
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.article>
  );
};

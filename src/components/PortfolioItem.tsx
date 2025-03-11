
import { motion } from "framer-motion";
import { LucideIcon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioItemProps {
  id: number;
  title: string;
  description: string;
  icon?: LucideIcon;
  index: number;
  link?: string;
  image?: string;
  iconImage?: string;
}

export const PortfolioItem = ({ title, description, icon: Icon, index, link, image, iconImage }: PortfolioItemProps) => {
  const content = (
    <div 
      className={cn(
        "w-full h-64 relative group-hover:scale-105 transition-transform duration-300 bg-card border shadow-sm",
        image && "bg-cover bg-center"
      )}
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      {link && (
        <div className="absolute top-2 right-2 z-10 p-1.5 bg-primary/10 rounded-full">
          <ExternalLink className="w-4 h-4 text-primary" aria-label="External link" />
        </div>
      )}
      
      <div className={cn(
        "absolute inset-0 flex flex-col items-center justify-center p-6",
        image && "bg-black/60 text-white"
      )}>
        {iconImage && (
          <div 
            className="mb-4 p-3 rounded-lg bg-primary/10 flex items-center justify-center"
            role="img"
            aria-label={`${title} icon`}
          >
            <img src={iconImage} alt={`${title} icon`} className="w-8 h-8" />
          </div>
        )}
        {Icon && !iconImage && !image && (
          <div 
            className="mb-4 p-3 rounded-lg bg-primary/10"
            role="img"
            aria-label={`${title} icon`}
          >
            <Icon className="w-8 h-8 text-primary" />
          </div>
        )}
        <h3 className={cn(
          "text-xl font-semibold mb-2 flex items-center gap-2",
          image ? "text-white" : "text-card-foreground"
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-center",
          image ? "text-white/80" : "text-muted-foreground"
        )}>
          {description}
        </p>
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

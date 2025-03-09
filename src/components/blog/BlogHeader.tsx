
import { motion } from "framer-motion";

export const BlogHeader = () => {
  return (
    <section className="pt-24 pb-12 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights and updates on web development, design, and technology
          </p>
        </motion.div>
      </div>
    </section>
  );
};

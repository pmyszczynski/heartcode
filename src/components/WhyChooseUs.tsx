import { motion } from "framer-motion";
import { Cog, Target, Handshake } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Cutting-Edge Technology",
    description: "We leverage the latest tools and technologies to build robust, scalable solutions that stand the test of time."
  },
  {
    icon: Target,
    title: "Result-Driven Strategy",
    description: "Our approach is focused on delivering measurable results that align with your business objectives and drive growth."
  },
  {
    icon: Handshake,
    title: "Close Collaboration",
    description: "We work hand-in-hand with our clients, analyzing their unique needs to craft tailored solutions that exceed expectations."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Heartcode</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We bring unique value to every project through our commitment to excellence and innovation 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 inline-block p-3 bg-primary/10 rounded-xl">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
import { motion } from "framer-motion";
import { Clock, FileSearch, Wrench, CheckCircle, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Discovery & Planning",
    description: "We start by understanding your unique challenges and project scope. Every business is different, and we take time to truly grasp your specific needs."
  },
  {
    icon: Wrench,
    title: "Tailored Solution",
    description: "Based on your requirements, we craft a custom solution that perfectly fits your business needs and goals."
  },
  {
    icon: Clock,
    title: "Implementation",
    description: "During development, we maintain constant communication to ensure everything aligns with your vision. No surprises, just smooth progress."
  },
  {
    icon: CheckCircle,
    title: "Verification",
    description: "Your feedback and approval are crucial. We thoroughly test and verify everything meets your expectations."
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Partnership",
    description: "Our relationship doesn't end at launch. We provide warranty, SLA support, and are always here for future evolution of your project."
  }
];

export const Timeline = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our process is flexible and adapts to your needs, but here's generally how we'll work together to bring your vision to life 💫
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

          {/* Timeline steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } relative`}
              >
                {/* Content */}
                <div className="w-1/2 px-8">
                  <div className={`${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-1/2 px-8" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
import { Code, Palette, Search, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "We'll work closely with you to create a design that perfectly captures your brand's personality and connects with your audience.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Our developers craft every line of code with care, ensuring your website is not just beautiful, but blazing fast and reliable.",
  },
  {
    icon: Search,
    title: "SEO/SEM",
    description:
      "Let's get your brand noticed! We'll help you reach the right people with our tailored search optimization strategies.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Ready to sell online? We'll build you a store that's both beautiful and easy to use, helping you turn visitors into happy customers.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How We Can Help You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Every project is unique, and we're here to help you succeed in your digital journey
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
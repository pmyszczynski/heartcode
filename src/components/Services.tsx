
import { Code, Palette, Search, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Palette,
      title: t('services.items.design.title'),
      description: t('services.items.design.description'),
    },
    {
      icon: Code,
      title: t('services.items.development.title'),
      description: t('services.items.development.description'),
    },
    {
      icon: Search,
      title: t('services.items.seo.title'),
      description: t('services.items.seo.description'),
    },
    {
      icon: ShoppingBag,
      title: t('services.items.ecommerce.title'),
      description: t('services.items.ecommerce.description'),
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {t('services.subtitle')}
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

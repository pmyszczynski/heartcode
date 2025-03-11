
import { motion } from "framer-motion";
import { Cog, Target, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";

export const WhyChooseUs = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Cog,
      title: t('whyChooseUs.features.technology.title'),
      description: t('whyChooseUs.features.technology.description')
    }, 
    {
      icon: Target,
      title: t('whyChooseUs.features.strategy.title'),
      description: t('whyChooseUs.features.strategy.description')
    }, 
    {
      icon: Handshake,
      title: t('whyChooseUs.features.collaboration.title'),
      description: t('whyChooseUs.features.collaboration.description')
    }
  ];
  
  return (
    <section id="why-choose-us" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('whyChooseUs.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('whyChooseUs.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 1.2, delay: index * 0.4, ease: "easeOut" }} 
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

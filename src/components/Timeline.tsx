
import { motion } from "framer-motion";
import { Clock, FileSearch, Wrench, CheckCircle, HeartHandshake } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Timeline = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      icon: FileSearch,
      title: t('timeline.steps.discovery.title'),
      description: t('timeline.steps.discovery.description')
    },
    {
      icon: Wrench,
      title: t('timeline.steps.solution.title'),
      description: t('timeline.steps.solution.description')
    },
    {
      icon: Clock,
      title: t('timeline.steps.implementation.title'),
      description: t('timeline.steps.implementation.description')
    },
    {
      icon: CheckCircle,
      title: t('timeline.steps.verification.title'),
      description: t('timeline.steps.verification.description')
    },
    {
      icon: HeartHandshake,
      title: t('timeline.steps.partnership.title'),
      description: t('timeline.steps.partnership.description')
    }
  ];

  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('timeline.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('timeline.subtitle')}
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


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      await emailjs.sendForm(
        'service_5mcp4mn', // Your EmailJS service ID
        'template_tli2vp2', // Your EmailJS template ID
        form,
        'oQSA1wWeEGXhTL-dn' // Your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: "Please try again later or contact us through other means.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-secondary-foreground/80">
              {t('contact.subtitle')}
            </p>
          </motion.div>
          
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('contact.form.name')}</label>
                <Input
                  name="user_name"
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                  className="bg-secondary-foreground/5 border-secondary-foreground/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('contact.form.email')}</label>
                <Input
                  name="user_email"
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                  className="bg-secondary-foreground/5 border-secondary-foreground/10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('contact.form.projectType')}</label>
              <Input
                name="project_type"
                placeholder={t('contact.form.projectTypePlaceholder')}
                required
                className="bg-secondary-foreground/5 border-secondary-foreground/10"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('contact.form.message')}</label>
              <Textarea
                name="message"
                placeholder={t('contact.form.messagePlaceholder')}
                required
                className="bg-secondary-foreground/5 border-secondary-foreground/10 min-h-[150px]"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.button')}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

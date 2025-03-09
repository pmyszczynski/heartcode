import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const Contact = () => {
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
              Let's Start Something Special
            </h2>
            <p className="text-secondary-foreground/80">
              Have a project in mind? We'd love to hear about it. Drop us a message, and we'll get back to you within 24 hours.
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
                <label className="text-sm font-medium">Your Name</label>
                <Input
                  name="user_name"
                  placeholder="John Doe"
                  required
                  className="bg-secondary-foreground/5 border-secondary-foreground/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  name="user_email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-secondary-foreground/5 border-secondary-foreground/10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Project Type</label>
              <Input
                name="project_type"
                placeholder="Website, E-commerce, or something else?"
                required
                className="bg-secondary-foreground/5 border-secondary-foreground/10"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Tell us about your project</label>
              <Textarea
                name="message"
                placeholder="Share your ideas, goals, and timeline..."
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
              {isSubmitting ? "Sending..." : "Let's Make Something Amazing 🚀"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

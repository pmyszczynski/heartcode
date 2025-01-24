import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
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
                  placeholder="John Doe"
                  className="bg-secondary-foreground/5 border-secondary-foreground/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-secondary-foreground/5 border-secondary-foreground/10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Project Type</label>
              <Input
                placeholder="Website, E-commerce, or something else?"
                className="bg-secondary-foreground/5 border-secondary-foreground/10"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Tell us about your project</label>
              <Textarea
                placeholder="Share your ideas, goals, and timeline..."
                className="bg-secondary-foreground/5 border-secondary-foreground/10 min-h-[150px]"
              />
            </div>
            <Button size="lg" className="w-full rounded-full">
              Let's Make Something Amazing 🚀
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
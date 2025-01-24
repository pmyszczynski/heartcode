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
              Let's Create Something Amazing
            </h2>
            <p className="text-secondary-foreground/80">
              Ready to start your project? We'd love to hear from you.
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
              <Input
                placeholder="Name"
                className="bg-secondary-foreground/5 border-secondary-foreground/10"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-secondary-foreground/5 border-secondary-foreground/10"
              />
            </div>
            <Input
              placeholder="Subject"
              className="bg-secondary-foreground/5 border-secondary-foreground/10"
            />
            <Textarea
              placeholder="Your message"
              className="bg-secondary-foreground/5 border-secondary-foreground/10 min-h-[150px]"
            />
            <Button size="lg" className="w-full rounded-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
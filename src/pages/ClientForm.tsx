
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BusinessInfo from "@/components/client-form/BusinessInfo";
import ProjectScope from "@/components/client-form/ProjectScope";
import BudgetTimeline from "@/components/client-form/BudgetTimeline";
import ContactDetails from "@/components/client-form/ContactDetails";
import Review from "@/components/client-form/Review";
import { useToast } from "@/hooks/use-toast";

const ClientForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessInfo: {},
    projectScope: {},
    budgetTimeline: {},
    contactDetails: {}
  });
  const { toast } = useToast();

  const totalSteps = 5;

  const updateFormData = (section: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Form Submitted Successfully",
      description: "We'll get back to you within 24 hours.",
    });
    // Here you would typically send the data to your backend
    console.log("Form data:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Let's Build Something Amazing</h1>
            <span className="text-muted-foreground">
              Step {step} of {totalSteps}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-lg shadow-lg p-6"
          >
            {step === 1 && (
              <BusinessInfo
                data={formData.businessInfo}
                updateData={(data) => updateFormData("businessInfo", data)}
              />
            )}
            {step === 2 && (
              <ProjectScope
                data={formData.projectScope}
                updateData={(data) => updateFormData("projectScope", data)}
              />
            )}
            {step === 3 && (
              <BudgetTimeline
                data={formData.budgetTimeline}
                updateData={(data) => updateFormData("budgetTimeline", data)}
              />
            )}
            {step === 4 && (
              <ContactDetails
                data={formData.contactDetails}
                updateData={(data) => updateFormData("contactDetails", data)}
              />
            )}
            {step === 5 && (
              <Review formData={formData} />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </Button>
          
          {step === totalSteps ? (
            <Button onClick={handleSubmit} className="flex items-center gap-2">
              Submit Request
            </Button>
          ) : (
            <Button onClick={nextStep} className="flex items-center gap-2">
              Next <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientForm;

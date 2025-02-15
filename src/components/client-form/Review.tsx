
import { motion } from "framer-motion";

interface ReviewProps {
  formData: {
    businessInfo: any;
    projectScope: any;
    budgetTimeline: any;
    contactDetails: any;
  };
}

const Review = ({ formData }: ReviewProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Review Your Information</h2>
        <p className="text-muted-foreground">
          Please review your information before submitting.
        </p>
      </div>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border rounded-lg p-4 space-y-3"
        >
          <h3 className="font-semibold">Business Information</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p className="text-muted-foreground">Company Name:</p>
            <p>{formData.businessInfo.companyName || "Not provided"}</p>
            <p className="text-muted-foreground">Industry:</p>
            <p>{formData.businessInfo.industry || "Not provided"}</p>
            <p className="text-muted-foreground">Company Size:</p>
            <p>{formData.businessInfo.companySize || "Not provided"}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border rounded-lg p-4 space-y-3"
        >
          <h3 className="font-semibold">Project Scope</h3>
          <div className="space-y-2">
            <p className="text-muted-foreground">Project Types:</p>
            <div className="flex flex-wrap gap-2">
              {formData.projectScope.projectType?.map((type: string) => (
                <span key={type} className="bg-muted px-2 py-1 rounded-full text-sm">
                  {type}
                </span>
              )) || "Not provided"}
            </div>
            <p className="text-muted-foreground mt-2">Required Features:</p>
            <div className="flex flex-wrap gap-2">
              {formData.projectScope.features?.map((feature: string) => (
                <span key={feature} className="bg-muted px-2 py-1 rounded-full text-sm">
                  {feature}
                </span>
              )) || "Not provided"}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border rounded-lg p-4 space-y-3"
        >
          <h3 className="font-semibold">Budget & Timeline</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p className="text-muted-foreground">Budget Range:</p>
            <p>{formData.budgetTimeline.budget || "Not provided"}</p>
            <p className="text-muted-foreground">Timeline:</p>
            <p>{formData.budgetTimeline.timeline || "Not provided"}</p>
            <p className="text-muted-foreground">Start Date:</p>
            <p>{formData.budgetTimeline.startDate || "Not provided"}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border rounded-lg p-4 space-y-3"
        >
          <h3 className="font-semibold">Contact Information</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p className="text-muted-foreground">Name:</p>
            <p>{formData.contactDetails.name || "Not provided"}</p>
            <p className="text-muted-foreground">Email:</p>
            <p>{formData.contactDetails.email || "Not provided"}</p>
            <p className="text-muted-foreground">Phone:</p>
            <p>{formData.contactDetails.phone || "Not provided"}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Review;

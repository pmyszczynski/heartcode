
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface ContactDetailsData {
  name?: string;
  email?: string;
  phone?: string;
  preferredContact?: string;
  message?: string;
  agreement?: boolean;
}

interface Props {
  data: ContactDetailsData;
  updateData: (data: ContactDetailsData) => void;
}

const ContactDetails = ({ data, updateData }: Props) => {
  const [formData, setFormData] = useState<ContactDetailsData>(data);

  const handleChange = (field: keyof ContactDetailsData, value: any) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    updateData(newData);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="text-muted-foreground">
          Please provide your contact details so we can get back to you about your project.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            value={formData.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Message</Label>
          <Textarea
            id="message"
            placeholder="Any additional information you'd like to share..."
            value={formData.message || ""}
            onChange={(e) => handleChange("message", e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreement"
            checked={formData.agreement}
            onCheckedChange={(checked) => handleChange("agreement", checked)}
          />
          <Label htmlFor="agreement" className="text-sm font-normal">
            I agree to be contacted about my project request and understand that my data will be handled according to the privacy policy.
          </Label>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

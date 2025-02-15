
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BusinessInfoData {
  companyName?: string;
  industry?: string;
  companySize?: string;
  description?: string;
}

interface Props {
  data: BusinessInfoData;
  updateData: (data: BusinessInfoData) => void;
}

const BusinessInfo = ({ data, updateData }: Props) => {
  const [formData, setFormData] = useState<BusinessInfoData>(data);

  const handleChange = (field: keyof BusinessInfoData, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    updateData(newData);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Tell us about your business</h2>
        <p className="text-muted-foreground">
          Help us understand your company better so we can provide the most suitable solutions.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            placeholder="Enter your company name"
            value={formData.companyName || ""}
            onChange={(e) => handleChange("companyName", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Select
            value={formData.industry}
            onValueChange={(value) => handleChange("industry", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="companySize">Company Size</Label>
          <Select
            value={formData.companySize}
            onValueChange={(value) => handleChange("companySize", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-500">201-500 employees</SelectItem>
              <SelectItem value="500+">500+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Business Description</Label>
          <Textarea
            id="description"
            placeholder="Tell us about your business, its goals, and values..."
            value={formData.description || ""}
            onChange={(e) => handleChange("description", e.target.value)}
            className="min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;

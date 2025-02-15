
import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface BudgetTimelineData {
  budget?: string;
  timeline?: string;
  startDate?: string;
  additionalInfo?: string;
}

interface Props {
  data: BudgetTimelineData;
  updateData: (data: BudgetTimelineData) => void;
}

const BudgetTimeline = ({ data, updateData }: Props) => {
  const [formData, setFormData] = useState<BudgetTimelineData>(data);

  const handleChange = (field: keyof BudgetTimelineData, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    updateData(newData);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Budget & Timeline</h2>
        <p className="text-muted-foreground">
          Help us understand your budget constraints and project timeline expectations.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range</Label>
          <Select
            value={formData.budget}
            onValueChange={(value) => handleChange("budget", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k+">$100,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeline">Project Timeline</Label>
          <Select
            value={formData.timeline}
            onValueChange={(value) => handleChange("timeline", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select expected timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2-months">1-2 months</SelectItem>
              <SelectItem value="2-4-months">2-4 months</SelectItem>
              <SelectItem value="4-6-months">4-6 months</SelectItem>
              <SelectItem value="6-12-months">6-12 months</SelectItem>
              <SelectItem value="12+months">12+ months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="startDate">Preferred Start Date</Label>
          <Input
            type="date"
            id="startDate"
            value={formData.startDate || ""}
            onChange={(e) => handleChange("startDate", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            placeholder="Any other details about your timeline or budget constraints..."
            value={formData.additionalInfo || ""}
            onChange={(e) => handleChange("additionalInfo", e.target.value)}
            className="min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetTimeline;

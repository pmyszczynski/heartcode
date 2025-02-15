
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface ProjectScopeData {
  projectType?: string[];
  features?: string[];
  description?: string;
}

interface Props {
  data: ProjectScopeData;
  updateData: (data: ProjectScopeData) => void;
}

const ProjectScope = ({ data, updateData }: Props) => {
  const [formData, setFormData] = useState<ProjectScopeData>(data);

  const projectTypes = [
    { id: "website", label: "Website Development" },
    { id: "ecommerce", label: "E-commerce Platform" },
    { id: "webapp", label: "Web Application" },
    { id: "mobile", label: "Mobile App" },
    { id: "design", label: "UI/UX Design" },
  ];

  const features = [
    { id: "auth", label: "User Authentication" },
    { id: "payment", label: "Payment Integration" },
    { id: "cms", label: "Content Management" },
    { id: "analytics", label: "Analytics Dashboard" },
    { id: "api", label: "API Integration" },
    { id: "responsive", label: "Responsive Design" },
  ];

  const handleProjectTypeChange = (type: string) => {
    const currentTypes = formData.projectType || [];
    const newTypes = currentTypes.includes(type)
      ? currentTypes.filter((t) => t !== type)
      : [...currentTypes, type];

    const newData = { ...formData, projectType: newTypes };
    setFormData(newData);
    updateData(newData);
  };

  const handleFeatureChange = (feature: string) => {
    const currentFeatures = formData.features || [];
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((f) => f !== feature)
      : [...currentFeatures, feature];

    const newData = { ...formData, features: newFeatures };
    setFormData(newData);
    updateData(newData);
  };

  const handleDescriptionChange = (description: string) => {
    const newData = { ...formData, description };
    setFormData(newData);
    updateData(newData);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Project Requirements</h2>
        <p className="text-muted-foreground">
          Let us know what type of project you're looking to build and what features you need.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Project Type</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  checked={(formData.projectType || []).includes(type.id)}
                  onCheckedChange={() => handleProjectTypeChange(type.id)}
                />
                <Label htmlFor={type.id} className="font-normal">
                  {type.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Required Features</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center space-x-2">
                <Checkbox
                  id={feature.id}
                  checked={(formData.features || []).includes(feature.id)}
                  onCheckedChange={() => handleFeatureChange(feature.id)}
                />
                <Label htmlFor={feature.id} className="font-normal">
                  {feature.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectDescription">Project Description</Label>
          <Textarea
            id="projectDescription"
            placeholder="Describe your project vision, goals, and any specific requirements..."
            value={formData.description || ""}
            onChange={(e) => handleDescriptionChange(e.target.value)}
            className="min-h-[150px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectScope;

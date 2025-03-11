
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export const BackToHome = () => {
  const { t } = useTranslation();
  
  return (
    <Link to="/">
      <Button variant="ghost" className="mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t('common.backToHome', 'Back to Home')}
      </Button>
    </Link>
  );
};

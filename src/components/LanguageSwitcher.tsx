
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 right-4 z-50"
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="rounded-full">
            <Globe className="h-4 w-4 mr-2" />
            {i18n.language === 'pl' ? 'PL' : 'EN'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer">
            {t('languageSwitcher.en')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('pl')} className="cursor-pointer">
            {t('languageSwitcher.pl')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
};

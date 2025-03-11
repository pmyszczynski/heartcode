
import { Link } from "react-router-dom";
import { Mail, Globe, Copyright } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Heartcode</h3>
            <p className="text-muted-foreground text-sm">
              {t('footer.company.description')}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('footer.services.title')}</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.services.webDev')}</a></li>
              <li><a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.services.uiUx')}</a></li>
              <li><Link to="/tech-consulting" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.services.techConsulting')}</Link></li>
              <li><a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.services.seo')}</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2">
              <li><Link to="/our-work" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.quickLinks.work')}</Link></li>
              <li><a href="/#why-choose-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.quickLinks.about')}</a></li>
              <li><a href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.quickLinks.contact')}</a></li>
              <li><a href="/#timeline" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.quickLinks.process')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('footer.contactUs.title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@heartcode.io" className="hover:text-primary transition-colors">
                  hello@heartcode.io
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4" />
                <a href="https://heartcode.io" className="hover:text-primary transition-colors">
                  heartcode.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 flex items-center justify-center text-sm text-muted-foreground">
          <Copyright className="h-4 w-4 mr-2" />
          <p>{currentYear} Heartcode. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

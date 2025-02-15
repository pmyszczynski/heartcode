
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  schema?: object;
}

export const SEO = ({ 
  title = "Heartcode - Web Development Agency",
  description = "Crafting exceptional digital experiences through innovative web development solutions.",
  image = "/og-image.png",
  schema
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `https://heartcode.io${location.pathname}`;

  useEffect(() => {
    // Update meta tags
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', currentUrl);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', image);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', currentUrl);

    // Add JSON-LD Schema
    if (schema) {
      const existingSchema = document.querySelector('#jsonld-schema');
      if (existingSchema) {
        existingSchema.remove();
      }
      
      const script = document.createElement('script');
      script.id = 'jsonld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, image, schema, currentUrl]);

  return null;
};

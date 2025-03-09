
/// <reference types="vite/client" />

interface Window {
  gtag: (
    command: 'config' | 'event' | 'js' | 'set', 
    targetId: string, 
    params?: {
      page_path?: string;
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
  fbAsyncInit: () => void;
  FB: any;
}

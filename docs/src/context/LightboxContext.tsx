import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

interface LightboxContextType {
  isOpen: boolean;
  activeIndex: number;
  images: GalleryImage[];
  openLightbox: (index: number, images: GalleryImage[]) => void;
  closeLightbox: () => void;
  goNext: () => void;
  goPrev: () => void;
}

const LightboxContext = createContext<LightboxContextType | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState<GalleryImage[]>([]);

  const openLightbox = useCallback((index: number, imgs: GalleryImage[]) => {
    setActiveIndex(index);
    setImages(imgs);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <LightboxContext.Provider
      value={{ isOpen, activeIndex, images, openLightbox, closeLightbox, goNext, goPrev }}
    >
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider');
  return ctx;
}

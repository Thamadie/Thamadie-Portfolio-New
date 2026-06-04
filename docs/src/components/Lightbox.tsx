import { useEffect, useCallback, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLightbox } from '@/context/LightboxContext';

export default function Lightbox() {
  const { isOpen, activeIndex, images, closeLightbox, goNext, goPrev } = useLightbox();
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [fadeKey, setFadeKey] = useState(0);

  const handleClose = useCallback(() => {
    closeLightbox();
  }, [closeLightbox]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') {
        goPrev();
        setFadeKey((k) => k + 1);
      }
      if (e.key === 'ArrowRight') {
        goNext();
        setFadeKey((k) => k + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose, goNext, goPrev]);

  useEffect(() => {
    setFadeKey((k) => k + 1);
  }, [activeIndex]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[activeIndex];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-charcoal/95"
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-5 right-5 md:top-6 md:right-6 text-white hover:opacity-70 transition-opacity z-10"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Left arrow */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className={`absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-baby-pink flex items-center justify-center text-charcoal hover:bg-baby-pink transition-colors z-10 ${
            activeIndex === 0 ? 'opacity-40 pointer-events-none' : ''
          }`}
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Right arrow */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className={`absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-baby-pink flex items-center justify-center text-charcoal hover:bg-baby-pink transition-colors z-10 ${
            activeIndex === images.length - 1 ? 'opacity-40 pointer-events-none' : ''
          }`}
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Image */}
      <div
        className="flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={fadeKey}
          ref={imageRef}
          src={currentImage.src}
          alt={currentImage.title}
          className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg animate-in fade-in duration-300"
        />

        {/* Counter & Caption */}
        <div className="mt-4 text-center">
          <p className="text-white text-sm font-body font-medium">
            {activeIndex + 1} / {images.length}
          </p>
          <p className="text-white/80 text-base font-body font-light mt-1">
            {currentImage.title}
          </p>
        </div>
      </div>
    </div>
  );
}

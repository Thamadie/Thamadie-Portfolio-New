import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Instagram, Youtube } from 'lucide-react';

// Simple TikTok icon since lucide doesn't have it
function TikTokIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function Footer() {
  const ref = useScrollAnimation<HTMLElement>({ type: 'fade-in', duration: 0.6 });

  return (
    <footer ref={ref} className="bg-white border-t border-light-pink py-12 px-5 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="font-heading text-[22px] text-charcoal">
          Thamadie Gunawardena
        </h3>
        <p className="font-body text-sm text-warm-grey mt-2">
          Fashion Model & Presenter
        </p>

        <div className="flex items-center justify-center gap-5 mt-5">
          <a
            href="#"
            className="text-warm-grey hover:text-dusty-rose transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a
            href="#"
            className="text-warm-grey hover:text-dusty-rose transition-colors duration-300"
            aria-label="TikTok"
          >
            <TikTokIcon size={22} />
          </a>
          <a
            href="#"
            className="text-warm-grey hover:text-dusty-rose transition-colors duration-300"
            aria-label="YouTube"
          >
            <Youtube size={22} />
          </a>
        </div>

        <p className="font-body text-xs text-taupe mt-6">
          &copy; {new Date().getFullYear()} Thamadie Gunawardena. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

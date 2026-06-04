import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function StickyRateBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;
    gsap.fromTo(
      banner,
      { y: -44 },
      { y: 0, duration: 0.5, ease: 'power2.out', delay: 0.3 }
    );
  }, []);

  return (
    <div
      ref={bannerRef}
      className="fixed top-0 left-0 right-0 z-[100] h-11 bg-baby-pink flex items-center justify-center"
    >
      {/* Desktop: 3 items */}
      <div className="hidden md:flex items-center gap-6 px-6">
        <span className="text-sm font-medium text-charcoal whitespace-nowrap">
          👗 Photoshoot: LKR 10,000 / 10 fits
        </span>
        <span className="text-dusty-rose text-xs">◆</span>
        <span className="text-sm font-medium text-charcoal whitespace-nowrap">
          🎬 Video: LKR 10,000 / 2 hrs
        </span>
        <span className="text-dusty-rose text-xs">◆</span>
        <span className="text-sm font-medium text-charcoal whitespace-nowrap">
          🎤 Presenting: LKR 10,000 / 1 hr
        </span>
      </div>

      {/* Mobile: Marquee */}
      <div className="md:hidden w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-4 text-xs font-medium text-charcoal">
          <span>👗 Photoshoot LKR 10,000/10 fits</span>
          <span className="text-dusty-rose">◆</span>
          <span>🎬 Video LKR 10,000/2hrs</span>
          <span className="text-dusty-rose">◆</span>
          <span>🎤 Presenting LKR 10,000/1hr</span>
          <span className="text-dusty-rose">◆</span>
          <span>👗 Photoshoot LKR 10,000/10 fits</span>
          <span className="text-dusty-rose">◆</span>
          <span>🎬 Video LKR 10,000/2hrs</span>
          <span className="text-dusty-rose">◆</span>
          <span>🎤 Presenting LKR 10,000/1hr</span>
          <span className="text-dusty-rose">◆</span>
        </div>
      </div>
    </div>
  );
}

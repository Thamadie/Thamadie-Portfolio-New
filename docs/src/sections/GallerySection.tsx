import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '@/components/SectionHeader';
import { useLightbox } from '@/context/LightboxContext';
import type { GalleryImage } from '@/context/LightboxContext';

gsap.registerPlugin(ScrollTrigger);

const galleryImages: GalleryImage[] = [
  { src: '/Thamadie-Portfolio/assets/5.jpeg', title: 'Golden Elegance', category: 'Fashion Editorial' },
  { src: '/Thamadie-Portfolio/assets/9.jpeg', title: 'Garden Grace', category: 'Lifestyle' },
  { src: '/Thamadie-Portfolio/assets/WhatsApp%20Image%202026-06-03%20at%2021.38.11%20(11).jpeg', title: 'Runway Ready', category: 'Fashion' },
  { src: '/Thamadie-Portfolio/assets/6.jpeg', title: 'Natural Beauty', category: 'Portrait' },
  { src: '/Thamadie-Portfolio/assets/WhatsApp%20Image%202026-06-03%20at%2021.38.12%20(2).jpeg', title: 'Street Style', category: 'Fashion' },
  { src: '/Thamadie-Portfolio/assets/2.jpeg', title: 'Evening Glow', category: 'Editorial' },
  { src: '/Thamadie-Portfolio/assets/WhatsApp%20Image%202026-06-03%20at%2021.38.11%20(8).jpeg', title: 'Confident Pose', category: 'Portrait' },
  { src: '/Thamadie-Portfolio/assets/WhatsApp%20Image%202026-06-03%20at%2021.38.11%20(5).jpeg', title: 'Floral Dreams', category: 'Lifestyle' },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Only use GSAP horizontal scroll on desktop
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = trackWidth - viewportWidth + 80;

      const scrollTween = gsap.to(track, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollDistance * 1.5}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="bg-baby-pink relative"
    >
      {/* Header */}
      <div className="pt-20 md:pt-32 px-5 md:px-10 max-w-7xl mx-auto">
        <SectionHeader
          label="PORTFOLIO"
          title="Gallery Showcase"
          description="A curated collection of fashion, editorial, and lifestyle photography. Click any image to view in full screen."
        />
      </div>

      {/* Horizontal Scroll Track */}
      <div className="pb-20 md:pb-32 overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 px-5 md:px-10 md:flex-nowrap flex-row"
          style={{ willChange: 'transform' }}
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              data-cursor-hover
              onClick={() => openLightbox(index, galleryImages)}
              className="group flex-shrink-0 w-[240px] md:w-[280px] bg-white rounded-2xl border-2 border-pale-lavender overflow-hidden cursor-pointer transition-all duration-300 hover:border-dusty-rose"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="font-body text-sm font-medium text-charcoal">
                  {img.title}
                </p>
                <p className="font-body text-xs font-medium text-dusty-rose uppercase tracking-wider mt-1">
                  {img.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    // Parallax on background
    const parallaxTl = gsap.to(bg, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Entrance animation timeline
    const tl = gsap.timeline({ delay: 0.6 });

    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        taglineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      );

    // Fade out content on scroll
    const fadeTl = gsap.to(contentRef.current, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: '60% top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      parallaxTl.scrollTrigger?.kill();
      fadeTl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div ref={bgRef} className="absolute inset-0 w-full h-[120%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Thamadie-Portfolio/assets/2.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(248, 225, 230, 0.88) 0%, rgba(230, 230, 250, 0.78) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1
          ref={nameRef}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-light text-charcoal leading-[1.1] tracking-wide opacity-0"
          style={{ textShadow: '0 2px 20px rgba(255,255,255,0.5)' }}
        >
          Thamadie Gunawardena
        </h1>

        <p
          ref={subtitleRef}
          className="font-body text-base sm:text-lg text-warm-grey uppercase tracking-[0.15em] mt-4 opacity-0"
        >
          Fashion Model & Presenter
        </p>

        <p
          ref={taglineRef}
          className="font-body text-base text-taupe mt-6 max-w-md mx-auto italic opacity-0"
        >
          Bringing elegance, confidence, and creativity to every frame.
        </p>

        <a
          ref={ctaRef}
          href="#gallery"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn-primary mt-10 inline-block opacity-0"
        >
          ✨ View My Portfolio
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center opacity-0"
      >
        <div className="animate-bounce-soft">
          <ChevronDown size={24} className="text-white mx-auto" />
        </div>
        <span className="font-body text-xs font-medium text-white mt-1 block">
          Scroll
        </span>
      </div>
    </section>
  );
}

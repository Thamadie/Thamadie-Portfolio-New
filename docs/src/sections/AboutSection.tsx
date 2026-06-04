import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { label: 'AGE', value: '26' },
  { label: 'HEIGHT', value: "5'4\"" },
  { label: 'WEIGHT', value: '47 kg' },
  { label: 'WAIST', value: '30"' },
  { label: 'UK SIZE', value: '8' },
  { label: 'BUST', value: '32A' },
];

export default function AboutSection() {
  const labelRef = useScrollAnimation<HTMLParagraphElement>({
    type: 'fade-up',
    duration: 0.6,
  });
  const headingRef = useScrollAnimation<HTMLHeadingElement>({
    type: 'fade-up',
    duration: 0.8,
    delay: 0.1,
  });
  const bio1Ref = useScrollAnimation<HTMLParagraphElement>({
    type: 'fade-up',
    duration: 0.8,
    delay: 0.2,
  });
  const bio2Ref = useScrollAnimation<HTMLParagraphElement>({
    type: 'fade-up',
    duration: 0.8,
    delay: 0.3,
  });
  const statsRef = useScrollAnimation<HTMLDivElement>({
    type: 'fade-up',
    duration: 0.8,
    delay: 0.3,
  });
  const imageRef = useScrollAnimation<HTMLDivElement>({
    type: 'slide-left',
    duration: 1.0,
    delay: 0.2,
  });

  return (
    <section id="about" className="bg-white py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-start">
        {/* Left: Text */}
        <div>
          <p ref={labelRef} className="section-label mb-4">
            ABOUT ME
          </p>

          <h2
            ref={headingRef}
            className="font-heading text-4xl md:text-5xl text-charcoal leading-tight"
          >
            Meet Thamadie
          </h2>

          <p
            ref={bio1Ref}
            className="font-body text-base text-warm-grey leading-relaxed mt-6"
          >
            Hi, I'm Thamadie — a 26-year-old fashion model and presenter based in
            Sri Lanka. With a passion for style, storytelling, and self-expression,
            I bring energy and authenticity to every project I work on. Whether it's
            a high-fashion photoshoot, an engaging product video, or hosting an event
            on stage, I love connecting with audiences and bringing brands to life.
          </p>

          <p
            ref={bio2Ref}
            className="font-body text-base text-warm-grey leading-relaxed mt-4"
          >
            My journey in modeling has taught me the power of confidence and
            versatility. I believe every frame tells a story, and I'm here to make
            yours unforgettable. Let's create something beautiful together!
          </p>

          {/* Model Stats Card */}
          <div
            ref={statsRef}
            className="bg-cream border border-light-pink rounded-2xl p-6 md:p-8 mt-10"
          >
            <h3 className="font-heading text-2xl text-charcoal mb-2">
              Model Statistics
            </h3>
            <div className="w-10 h-px bg-light-pink mb-6" />

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-body text-xs font-medium uppercase tracking-wider text-dusty-rose">
                    {stat.label}
                  </p>
                  <p className="font-body text-lg text-charcoal mt-1">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div ref={imageRef} className="lg:sticky lg:top-32">
          <div className="rounded-2xl overflow-hidden shadow-service">
            <img
              src="/Thamadie-Portfolio/assets/WhatsApp%20Image%202026-06-03%20at%2021.38.12%20(6).jpeg"
              alt="Thamadie Gunawardena"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

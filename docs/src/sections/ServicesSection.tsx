import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/SectionHeader';
import { Camera, Video, Mic } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Fashion Photoshoot',
    price: 'LKR 10,000',
    unit: '/ 10 outfits',
    description:
      'Professional fashion photography including multiple outfit changes, posed and candid shots, and full usage rights for your brand.',
    cta: 'Book Photoshoot',
  },
  {
    icon: Video,
    title: 'Video Shoot',
    price: 'LKR 10,000',
    unit: '/ 2 hours',
    description:
      'High-quality video production for product showcases, fashion lookbooks, brand campaigns, and social media content.',
    cta: 'Book Video Shoot',
  },
  {
    icon: Mic,
    title: 'Presenting',
    price: 'LKR 10,000',
    unit: '/ 1 hour',
    description:
      'Live or recorded presenting for events, product launches, fashion shows, brand activations, and corporate functions.',
    cta: 'Book Presenting',
  },
];

export default function ServicesSection() {
  const cardsRef = useScrollAnimation<HTMLDivElement>({
    type: 'scale-up',
    duration: 0.8,
    stagger: 0.2,
    childSelector: '.service-card',
  });

  const handleBookClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-baby-pink py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="SERVICES"
          title="Rate Card"
          description="Transparent pricing for your next project. Let's create something amazing together."
        />

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card bg-white rounded-[20px] p-8 md:p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-service"
              >
                <div className="flex justify-center">
                  <Icon size={48} className="text-dusty-rose" strokeWidth={1.5} />
                </div>
                <div className="w-10 h-px bg-light-pink mx-auto mt-4 mb-4" />

                <h4 className="font-heading text-2xl md:text-[28px] text-charcoal">
                  {service.title}
                </h4>

                <p className="font-heading text-4xl md:text-[44px] text-dusty-rose mt-4">
                  {service.price}
                </p>
                <p className="font-body text-base text-warm-grey mt-1">
                  {service.unit}
                </p>

                <p className="font-body text-sm text-warm-grey leading-relaxed mt-5 min-h-[80px]">
                  {service.description}
                </p>

                <button
                  onClick={handleBookClick}
                  className="btn-service mt-6"
                >
                  {service.cta}
                </button>
              </div>
            );
          })}
        </div>

        <p className="font-body text-sm text-taupe italic text-center mt-10 max-w-2xl mx-auto">
          * All prices are negotiable for long-term collaborations and package
          deals. Travel expenses may apply for locations outside Colombo.
        </p>
      </div>
    </section>
  );
}

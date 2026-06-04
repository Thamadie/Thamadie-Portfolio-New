import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/SectionHeader';
import { Mail, Phone, Instagram, Youtube, ChevronDown } from 'lucide-react';

function TikTokIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const contactPhotos = [
  '/Thamadie-Portfolio/assets/8.jpeg',
  '/Thamadie-Portfolio/assets/7.jpeg',
  '/Thamadie-Portfolio/assets/WhatsApp%20Image%202026-06-03%20at%2021.38.11%20(4).jpeg',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const formRef = useScrollAnimation<HTMLDivElement>({
    type: 'fade-up',
    duration: 1.0,
  });
  const cardsRef = useScrollAnimation<HTMLDivElement>({
    type: 'fade-up',
    duration: 0.8,
    stagger: 0.15,
    childSelector: '.info-card',
  });
  const photosRef = useScrollAnimation<HTMLDivElement>({
    type: 'fade-in',
    duration: 0.6,
    delay: 0.4,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-lavender py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="GET IN TOUCH"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear from you. Fill out the form or reach out directly through any of the channels below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-16">
          {/* Form */}
          <div ref={formRef}>
            {submitted ? (
              <div className="bg-mint-green/30 border border-mint-green rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-mint-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3D3D3D" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-charcoal">Message Sent!</h3>
                <p className="font-body text-warm-grey mt-2">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-body text-xs font-medium uppercase text-charcoal mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="w-full bg-transparent border border-light-pink rounded-lg px-4 py-4 font-body text-base text-charcoal placeholder:text-taupe focus:border-mint-green focus:outline-none focus:ring-2 focus:ring-mint-green/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs font-medium uppercase text-charcoal mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-transparent border border-light-pink rounded-lg px-4 py-4 font-body text-base text-charcoal placeholder:text-taupe focus:border-mint-green focus:outline-none focus:ring-2 focus:ring-mint-green/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs font-medium uppercase text-charcoal mb-2">
                    Service Interested In
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-light-pink rounded-lg px-4 py-4 font-body text-base text-charcoal appearance-none focus:border-mint-green focus:outline-none focus:ring-2 focus:ring-mint-green/20 transition-all"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="photoshoot">Fashion Photoshoot</option>
                      <option value="video">Video Shoot</option>
                      <option value="presenting">Presenting</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown
                      size={20}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-taupe pointer-events-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-medium uppercase text-charcoal mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full bg-transparent border border-light-pink rounded-lg px-4 py-4 font-body text-base text-charcoal placeholder:text-taupe focus:border-mint-green focus:outline-none focus:ring-2 focus:ring-mint-green/20 transition-all resize-y min-h-[140px]"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info Cards */}
          <div ref={cardsRef} className="space-y-5">
            <div className="info-card bg-soft-peach rounded-2xl p-6 transition-all hover:-translate-y-0.5">
              <Mail size={24} className="text-dusty-rose" />
              <p className="font-body text-xs font-medium uppercase text-dusty-rose mt-3 tracking-wider">
                Email
              </p>
              <p className="font-body text-base text-charcoal mt-1">
                thamadie@email.com
              </p>
            </div>

            <div className="info-card bg-soft-peach rounded-2xl p-6 transition-all hover:-translate-y-0.5">
              <Phone size={24} className="text-dusty-rose" />
              <p className="font-body text-xs font-medium uppercase text-dusty-rose mt-3 tracking-wider">
                Phone
              </p>
              <p className="font-body text-base text-charcoal mt-1">
                +94 77 123 4567
              </p>
            </div>

            <div className="info-card bg-soft-peach rounded-2xl p-6 transition-all hover:-translate-y-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-dusty-rose" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <p className="font-body text-xs font-medium uppercase text-dusty-rose mt-3 tracking-wider">
                Follow Me
              </p>
              <div className="flex items-center gap-4 mt-3">
                <a href="#" className="text-warm-grey hover:text-charcoal transition-colors" aria-label="Instagram">
                  <Instagram size={22} />
                </a>
                <a href="#" className="text-warm-grey hover:text-charcoal transition-colors" aria-label="TikTok">
                  <TikTokIcon size={22} />
                </a>
                <a href="#" className="text-warm-grey hover:text-charcoal transition-colors" aria-label="YouTube">
                  <Youtube size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Strip */}
        <div
          ref={photosRef}
          className="flex gap-4 mt-16 overflow-x-auto hide-scrollbar justify-center"
        >
          {contactPhotos.map((photo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[120px] md:w-[150px] rounded-xl overflow-hidden opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300"
            >
              <img
                src={photo}
                alt={`Portfolio preview ${index + 1}`}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

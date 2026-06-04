import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/SectionHeader';

const videos = [
  {
    title: 'Product Presentation',
    description: 'Showcasing products with confidence and style',
    src: '/Thamadie-Portfolio/assets/12.mp4',
  },
  {
    title: 'Fashion Showcase',
    description: 'A walkthrough of the latest fashion collection',
    src: '/Thamadie-Portfolio/assets/3.mp4',
  },
  {
    title: 'Brand Collaboration',
    description: 'Partnering with brands for creative content',
    src: '/Thamadie-Portfolio/assets/13.mp4',
  },
  {
    title: 'Behind the Scenes',
    description: 'A glimpse into life on set',
    src: '/Thamadie-Portfolio/assets/14.mp4',
  },
];

export default function VideoSection() {
  const gridRef = useScrollAnimation<HTMLDivElement>({
    type: 'fade-up',
    duration: 0.8,
    stagger: 0.15,
    childSelector: '.video-card',
  });

  return (
    <section id="videos" className="bg-white py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="VIDEO WORK"
          title="Video Portfolio"
          description="From product presentations to fashion showcases — watch me in action."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="video-card bg-white rounded-2xl border-2 border-pale-lavender overflow-hidden transition-all duration-300 hover:border-baby-pink hover:shadow-video"
            >
              <div className="aspect-video">
                <video
                  controls
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster=""
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <h4 className="font-body text-lg font-medium text-charcoal">
                  {video.title}
                </h4>
                <p className="font-body text-sm text-warm-grey mt-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional videos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: '/Thamadie-Portfolio/assets/WhatsApp%20Video%202026-06-03%20at%2021.34.17.mp4', title: 'Live Presentation' },
            { src: '/Thamadie-Portfolio/assets/WhatsApp%20Video%202026-06-03%20at%2021.42.20.mp4', title: 'Event Hosting' },
            { src: '/Thamadie-Portfolio/assets/WhatsApp%20Video%202026-06-04%20at%2011.58.28.mp4', title: 'Creative Content' },
          ].map((video, index) => (
            <div
              key={`extra-${index}`}
              className="rounded-2xl border-2 border-pale-lavender overflow-hidden transition-all duration-300 hover:border-baby-pink hover:shadow-video"
            >
              <div className="aspect-video">
                <video
                  controls
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <div className="p-4">
                <p className="font-body text-sm font-medium text-charcoal">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

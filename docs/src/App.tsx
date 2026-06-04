import { LightboxProvider } from '@/context/LightboxContext';
import { useLenis } from '@/hooks/useLenis';
import CustomCursor from '@/components/CustomCursor';
import StickyRateBanner from '@/components/StickyRateBanner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import GallerySection from '@/sections/GallerySection';
import VideoSection from '@/sections/VideoSection';
import ServicesSection from '@/sections/ServicesSection';
import ContactSection from '@/sections/ContactSection';

export default function App() {
  useLenis();

  return (
    <LightboxProvider>
      <CustomCursor />
      <StickyRateBanner />
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <VideoSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
      <Lightbox />
    </LightboxProvider>
  );
}

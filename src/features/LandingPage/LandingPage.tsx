import { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import Footer from './components/Footer/Footer';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const starsSmRef = useRef<HTMLDivElement>(null);
  const starsMdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (starsSmRef.current) {
        starsSmRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
      if (starsMdRef.current) {
        starsMdRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="landing-page">
      <div className="stars-container">
        <div className="stars-sm" ref={starsSmRef}></div>
        <div className="stars-md" ref={starsMdRef}></div>
      </div>
      <div className="horizon-glow"></div>
      <div className="content-wrapper">
        <HeroSection />
        <FeaturesSection />
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;

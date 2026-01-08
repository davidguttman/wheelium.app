
import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import Footer from './components/Footer/Footer';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <main className="landing-page">
      <div className="stars-container">
        <div className="stars-sm"></div>
        <div className="stars-md"></div>
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

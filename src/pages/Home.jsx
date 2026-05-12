import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ShowcaseSection from '../components/sections/ShowcaseSection';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/layout/Footer';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Home;
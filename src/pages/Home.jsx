// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <div className="bg-background dark:bg-dark-background">
      <Hero />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
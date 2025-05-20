import './App.css';
import HeroSection from './HeroSection';
import Header from './Header';
import ExperienceSection from './ExperienceSection';
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import ProjectsSection from './ProjectsSection';
function App() {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);
  return (
    <div>
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}

export default App;

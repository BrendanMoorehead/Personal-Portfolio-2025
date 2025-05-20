// HeroSection.jsx
import React, { useState, useEffect } from 'react';
import VideoBackground from './VideoBackGround';
import backgroundVideo from './videos/water_bg.mp4';

const aboutText =
  'I develop attractive, functional applications solving everyday problems, as well as working on anything I find interesting. I strive to make technology more accessible and enjoyable for everyone.';

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoSrc = backgroundVideo;

  // Optional: Add a loading state for better UX
  useEffect(() => {
    const videoElement = new Image();
    videoElement.onload = () => {
      setVideoLoaded(true);
    };

    // Start loading the video after a short delay to prioritize initial page content
    const timer = setTimeout(() => {
      const video = document.createElement('video');
      video.src = videoSrc;
      video.onloadeddata = () => {
        setVideoLoaded(true);
      };
      // Set timeout for loading failure
      setTimeout(() => {
        if (!videoLoaded) setVideoLoaded(true);
      }, 5000);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <VideoBackground videoSrc={videoSrc} />
      <div className="overlay"></div>

      {/* Content that appears on top of the video */}
      <div className="content-overlay">
        <h1 className="name name-upper">BRENDAN</h1>
        <h1 className="name name-lower">MOOREHEAD</h1>
        <div className="hero-about">{aboutText}</div>
      </div>
    </section>
  );
};

export default HeroSection;

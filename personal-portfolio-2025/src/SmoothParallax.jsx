// SmoothParallax.jsx
import React, { useEffect, useRef, useState } from 'react';
import './SmoothParallax.css';

const SmoothParallax = ({
  imageUrl,
  children,
  panAmount = 100,
  direction = 'vertical',
  className = '',
}) => {
  // Use a ref to store the current parallax position
  const positionRef = useRef(0);
  // State used for re-rendering
  const [, setRender] = useState(0);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    // Target parallax position based on scroll
    let targetPosition = 0;
    // Smoothed actual position
    let currentPosition = 0;

    const calculateTargetPosition = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        // Calculate what percentage of the element is visible in the viewport
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // This gives us a value between roughly -1 and 1, with 0 being centered
        const scrollProgress =
          (windowHeight / 2 - (elementTop + elementHeight / 2)) /
          (windowHeight + elementHeight);

        // Map this to our pan amount
        targetPosition = scrollProgress * panAmount;
      }
    };

    const smoothAnimation = () => {
      // Calculate the target position based on current scroll
      calculateTargetPosition();

      // Smooth easing - adjust the 0.1 value to control smoothness (lower = smoother)
      currentPosition += (targetPosition - currentPosition) * 0.05;

      // Update the ref with the current position
      positionRef.current = currentPosition;

      // Force a re-render if the position has changed significantly
      if (Math.abs(lastScrollRef.current - currentPosition) > 0.1) {
        lastScrollRef.current = currentPosition;
        setRender((prev) => prev + 1);
      }

      // Continue the animation loop
      rafRef.current = requestAnimationFrame(smoothAnimation);
    };

    // Start the animation
    rafRef.current = requestAnimationFrame(smoothAnimation);

    // Clean up
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [panAmount]);

  // Calculate the background position based on the smoothed scroll value
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  if (direction === 'vertical') {
    backgroundStyle.backgroundPositionY = `calc(50% + ${positionRef.current}px)`;
  } else {
    backgroundStyle.backgroundPositionX = `calc(50% + ${positionRef.current}px)`;
  }

  return (
    <div
      ref={containerRef}
      className={`smooth-parallax-container ${className}`}
      style={backgroundStyle}
    >
      <div className="smooth-parallax-content">{children}</div>
    </div>
  );
};

export default SmoothParallax;

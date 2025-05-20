import React, { useEffect, useRef, useState } from 'react';

const Mockup = ({
  imageUrl,
  children,
  panAmount = 200, // How many pixels the image will move
  direction = 'vertical', // 'vertical' or 'horizontal'
  className = '',
  fontSize = '180px',
  color = 'white',
  imageSize = 'cover', // New prop: 'contain', 'cover', or custom percentage like '80%'
  imagePosition = 'center', // New prop: 'center', 'top', 'bottom', etc.
  backgroundColor = 'rgba(0, 0, 0, 0.6)', // New prop for background color
}) => {
  // Use refs to store animation values
  const targetPositionRef = useRef(0);
  const currentPositionRef = useRef(0);
  // State used for re-rendering
  const [, setRender] = useState(0);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const style = {
    fontSize,
    color,
  };

  useEffect(() => {
    const calculateTargetPosition = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        // Calculate how far the element is from the top of the viewport
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate the element's position relative to the center of the viewport
        // This gives a value from roughly -1 to 1
        const scrollProgress =
          (windowHeight / 2 - (elementTop + elementHeight / 2)) /
          (windowHeight + elementHeight);

        // Map this to our pan amount, normalized from 0-1 to -0.5 to 0.5
        targetPositionRef.current = scrollProgress * panAmount;
      }
    };

    const smoothAnimation = () => {
      // Calculate the target position based on current scroll
      calculateTargetPosition();

      // Apply smooth easing: current position moves 5% closer to target position each frame
      currentPositionRef.current +=
        (targetPositionRef.current - currentPositionRef.current) * 0.05;

      // Force a re-render periodically
      setRender((prev) => prev + 1);

      // Continue the animation loop
      rafRef.current = requestAnimationFrame(smoothAnimation);
    };

    // Start the animation loop
    rafRef.current = requestAnimationFrame(smoothAnimation);

    // Clean up
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [panAmount]);

  // Calculate the background position based on the smoothed position
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: imageSize, // Use the new imageSize prop
    backgroundPosition: imagePosition, // Use the new imagePosition prop
    backgroundRepeat: 'no-repeat',
    backgroundColor: backgroundColor,
  };

  if (direction === 'vertical') {
    backgroundStyle.backgroundPositionY = `calc(50% + ${currentPositionRef.current}px)`;
  } else {
    backgroundStyle.backgroundPositionX = `calc(50% + ${currentPositionRef.current}px)`;
  }

  return (
    <div
      ref={containerRef}
      className={`work-title-container ${className}`}
      // style={backgroundStyle}
    >
      <div className="work-title-background" style={backgroundStyle}></div>
      <div className="mockup-title-overlay"></div>
      <div className="work-title" style={style}>
        {children}
      </div>
    </div>
  );
};

export default Mockup;

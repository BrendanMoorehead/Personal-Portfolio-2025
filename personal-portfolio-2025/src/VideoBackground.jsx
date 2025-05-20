import { useRef, useEffect } from 'react';

const VideoBackground = ({ videoSrc }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);
  return (
    <div className="video-background-container">
      <video
        ref={videoRef}
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag
      </video>
    </div>
  );
};

export default VideoBackground;

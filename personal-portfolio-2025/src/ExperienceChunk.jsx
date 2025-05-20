import React from 'react';

const ExperienceChunk = ({ header, children }) => {
  return (
    <div className="experience-chunk">
      <p className="experience-header">{header}</p>
      <div className="experience-list">{children}</div>
    </div>
  );
};

export default ExperienceChunk;

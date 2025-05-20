import React from 'react';
import ExperienceChunk from './ExperienceChunk';
const ExperienceDetails = ({ position, company, responsibilities, year }) => {
  return (
    <div className="experience-wrapper">
      <div className="line"></div>
      <ExperienceChunk header="POSITION" children={position} />
      <div className="line"></div>
      <ExperienceChunk header="COMPANY" children={company} />
      <div className="line"></div>
      <ExperienceChunk header="RESPONSIBILTIES" children={responsibilities} />
      <div className="line"></div>
      <ExperienceChunk header="YEAR" children={year} />
      <div className="line"></div>
    </div>
  );
};

export default ExperienceDetails;

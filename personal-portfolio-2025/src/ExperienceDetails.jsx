import React from 'react';
import ExperienceChunk from './ExperienceChunk';
const ExperienceDetails = ({ details }) => {
  return (
    <div className="experience-wrapper">
      <div className="line"></div>

      {Object.keys(details).map((key) => (
        <React.Fragment key={key}>
          <ExperienceChunk
            key={key}
            header={details[key].header}
            children={details[key].data}
          />
          <div className="line"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ExperienceDetails;

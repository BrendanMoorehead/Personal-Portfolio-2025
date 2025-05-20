import React from 'react';
import WorkTitle from './WorkTitle';
import autostore from './images/autostore.jpg';
import disc from './images/disc.jpg';
import ExperienceDetails from './ExperienceDetails';
const ExperienceSection = () => {
  return (
    <div className="experience-section" id="experience">
      <h1 className="section-header">EXPERIENCE</h1>
      <WorkTitle children={'Bastian Solutions'} imageUrl={autostore} />
      <ExperienceDetails
        position="Software Developer Co-op"
        company="Bastian Solutions"
        responsibilities={
          <div>
            <p>Operator Emulation</p>
            <p>GUI Redesign</p>
            <p>Emulation Testing</p>
          </div>
        }
        year="2022 - 2024"
      />
      <WorkTitle children={'Perpetual Motion'} imageUrl={disc} />
      <ExperienceDetails
        position="Software Developer Co-op"
        company="Perpetual Motion"
        responsibilities={
          <div>
            <p>Feature Development</p>
            <p>Web Page Porting</p>
            <p>Idea Generation & Implementation</p>
          </div>
        }
        year="2022"
      />
    </div>
  );
};

export default ExperienceSection;

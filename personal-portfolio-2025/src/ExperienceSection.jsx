import React from 'react';
import WorkTitle from './WorkTitle';
import autostore from './images/autostore.jpg';
import disc from './images/disc.jpg';
import ExperienceDetails from './ExperienceDetails';
const bastianText =
  'I completed four co-op terms at Bastian Solutions, where I was part of a small team of developers working on creating digital twin software to emulate warehouses in the Bastian ecosystem. Across my four terms, I worked on many unique projects, from collaborating with product teams to emulate human interaction with web interfaces, to redesigning a 3D web-based racking tool to be more accessible and understandable.';
const perpetualMotionText =
  'At Perpetual Motion, I worked directly with the owner to update and port existing internal web-based tools to JavaScript. I proactively proposed, designed, and implemented new features for the GUI, and improved upon existing ones, reducing time spent on certain tasks by upto 80%. I proposed and implemented marketing and design ideas, increasing league enrollment and revenue.';
const bastianDetails = {
  position: {
    header: 'POSITION',
    data: 'Software Developer Co-op',
  },
  company: {
    header: 'COMPANY',
    data: 'Bastian Solutions',
  },
  responsibilities: {
    header: 'RESPONSIBILITIES',
    data: (
      <div className="list">
        <p>Operator Emulation</p>
        <p>GUI Redesign</p>
        <p>Emulation Testing</p>
      </div>
    ),
  },
  year: {
    header: 'DURATION',
    data: '2022 - 2024',
  },
};

const perpetualMotionDetails = {
  position: {
    header: 'POSITION',
    data: 'Software Developer Co-op',
  },
  company: {
    header: 'COMPANY',
    data: 'Perpetual Motion',
  },
  responsibilities: {
    header: 'RESPONSIBILITIES',
    data: (
      <div className="list">
        <p>Feature Development</p>
        <p>Web Page Porting</p>
        <p>Idea Generation & Implementation</p>
      </div>
    ),
  },
  year: {
    header: 'DURATION',
    data: '2022',
  },
};
const ExperienceSection = () => {
  return (
    <div className="experience-section" id="experience">
      <h1 className="section-header">EXPERIENCE</h1>
      <div className="experience-group">
        <WorkTitle children={'Bastian Solutions'} imageUrl={autostore} />
        <p className="detail-text">{bastianText}</p>
        <ExperienceDetails details={bastianDetails} />
      </div>
      <div className="experience-group">
        <WorkTitle children={'Perpetual Motion'} imageUrl={disc} />
        <p className="detail-text">{perpetualMotionText}</p>
        <ExperienceDetails details={perpetualMotionDetails} />
      </div>
    </div>
  );
};

export default ExperienceSection;

import React from 'react';
import ExperienceDetails from './ExperienceDetails';
const schoolDetails = {
  position: {
    header: 'MAJOR',
    data: 'Computer Science',
  },
  company: {
    header: 'MINOR',
    data: 'Entrepreneurship',
  },
  school: {
    header: 'SCHOOL',
    data: 'University of Guelph, Canada',
  },
  gpa: {
    header: 'GPA',
    data: '3.76 / 4.0',
  },
  responsibilities: {
    header: 'RELEVANT COURSEWORK',
    data: (
      <div className="list">
        <p>Mobile Computing</p>
        <p>Database Systems</p>
        <p>Computer Networks</p>
        <p>Software Testing</p>
        <p>Human Computer Interaction</p>
      </div>
    ),
  },
  year: {
    header: 'DURATION',
    data: '2020 - 2025',
  },
};
const EducationSection = () => {
  return (
    <div className="experience-section" id="education">
      <h1 className="section-header">EDUCATION</h1>
      <ExperienceDetails details={schoolDetails} />
    </div>
  );
};

export default EducationSection;

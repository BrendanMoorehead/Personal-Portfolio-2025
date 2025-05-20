import React from 'react';

const HeaderLinks = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="header-links">
      <p className="header-link" onClick={() => scrollToSection('experience')}>
        Experience
      </p>
      <p className="header-link" onClick={() => scrollToSection('projects')}>
        Projects
      </p>
      <p className="header-link" onClick={() => scrollToSection('education')}>
        Education
      </p>
    </div>
  );
};

export default HeaderLinks;

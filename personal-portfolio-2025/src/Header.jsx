import React from 'react';
import HeaderSection from './HeaderSection';
import HeaderLinks from './HeaderLinks';
const Header = () => {
  const email = 'bmoorehe@uoguelph.ca';
  const subject = 'Portfolio Contact';
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-section header-left hide-on-mobile">
          <HeaderSection
            content={"I'm looking for new graduate or junior opportunities."}
          />
        </div>
        <div className="header-section header-center">
          <HeaderSection content={<HeaderLinks />} />
        </div>

        <div className="header-section header-right hide-on-mobile">
          {/* Direct approach without using HeaderSection for the email link */}
          <a href={mailtoLink} className="header-bubble email-link">
            Contact me!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

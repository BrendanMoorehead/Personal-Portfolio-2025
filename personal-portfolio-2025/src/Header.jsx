import React from 'react';
import HeaderSection from './HeaderSection';
import HeaderLinks from './HeaderLinks';
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-section header-left">
          <HeaderSection
            content={"I'm looking for new graduate or junior opportunities."}
          />
        </div>
        <div className="header-section header-center">
          <HeaderSection content={<HeaderLinks />} />
        </div>

        <div className="header-section header-right">
          <HeaderSection content={'Contact me'} />
        </div>
      </div>
    </header>
  );
};

export default Header;

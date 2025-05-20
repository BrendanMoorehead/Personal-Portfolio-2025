import React from 'react';
import WorkTitle from './WorkTitle';
import Mockup from './Mockup';
import Texture from './images/texture.jpg';
import WagrScreenshot from './images/wagrss-left.png';
import ExperienceDetails from './ExperienceDetails';
const bastianDetails = {
  position: {
    header: 'PROJECT',
    data: 'Peer-to-Peer Betting Ledger',
  },
  company: {
    header: 'FEATURES',
    data: (
      <div className="list">
        <p>Wager Creation & Tracking</p>
        <p>Leaderboard & Stats</p>
        <p>User Authentication & Friends</p>
        <p>Time-based Wager Processing</p>
      </div>
    ),
  },
  responsibilities: {
    header: 'TECHNOLOGIES',
    data: (
      <div className="list">
        <p>Flutter</p>
        <p>Node.js</p>
        <p>Supabase</p>
      </div>
    ),
  },
  year: {
    header: 'DURATION',
    data: '2025 - Current',
  },
  links: {
    header: 'LINKS',
    data: (
      <div className="list">
        <a
          className="list-link"
          href="https://github.com/BrendanMoorehead/WAGR"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </div>
    ),
  },
};
const wagrText =
  "WAGR is a mobile, cross-platform app built as a ledger for bets made in-person, between friends. WAGR keeps track of bets for you, while gamifying the entire process. WAGR is currently being developed by me and three of my former classmates. It is built in Flutter, with a Node.js backend and Supabase for database and authentication. As the team lead, I've set the project timeline using agile processes and made key technical and design decisions.";
const ProjectWrapper = () => {
  return (
    <div className="projects">
      <div className="project-cards">
        <div className="project-wrapper">
          <WorkTitle children={'WAGR'} imageUrl={Texture} fontSize="100px" />
          {/* <WorkTitle children={'WAGR'} imageUrl={Texture} fontSize="100px" /> */}
        </div>
        <div className="project-wrapper">
          <Mockup
            imageUrl={WagrScreenshot}
            imageSize="25%" // This will show the whole image
            imagePosition="center"
            backgroundColor="rgb(241, 241, 241)" // Lighter background
            color="black"
            className="iphone-mockup-container"
            panAmount={80}
          />
          {/* <WorkTitle children={'WAGR'} imageUrl={Texture} fontSize="100px" /> */}
        </div>
      </div>
      <p className="detail-text">{wagrText}</p>
      <ExperienceDetails details={bastianDetails} />
    </div>
  );
};

export default ProjectWrapper;

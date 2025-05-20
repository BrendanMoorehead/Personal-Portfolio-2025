import React from 'react';
import WorkTitle from './WorkTitle';
import Mockup from './Mockup';
import Texture from './images/texture.jpg';
import WagrScreenshot from './images/wagrss-left.png';

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
    </div>
  );
};

export default ProjectWrapper;

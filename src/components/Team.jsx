import React from 'react';
import './Team.css';

const TeamPage = () => {
  return (
    <div className="team-container">
      <h1 className="team-quote">"Coming together is a beginning, staying together is progress, and working together is success." – Tarun Chauhan</h1>
      <div className="team-member left-image">
        <img src="assets/tarun.jpg" alt="Team Member 1" className="team-image"/>
        <div className="team-info">
          <h2><bolder>Tarun</bolder></h2>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="team-member right-image">
        <div className="team-info">
          <h2><bolder>Ciri</bolder></h2>
          <p>Backend Developer</p>
        </div>
        <img src="assets/ciri.jpg" alt="Team Member 2" className="team-image"/>
      </div>
    </div>
  );
};

export default TeamPage;

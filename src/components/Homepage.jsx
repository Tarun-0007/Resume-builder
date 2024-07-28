


import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="text-container">
        <h1>Welcome to the <strong>Resume Builder</strong></h1>
        <p><strong>Create a professional resume in minutes.</strong></p>
        <p><strong>Try it for free.</strong></p>
        <Link to="/form">
          <button className="create-resume-button">Create Your Resume</button>
        </Link>
      </div>
      <div className="image-container">
        <img src="/assets/image.png" alt="Resume Builder" />
      </div>
    </div>
  );
};

export default HomePage;


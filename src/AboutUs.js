import React from 'react';
import AboutUs from './images/Building4.jpg';
import './AboutUsComponent.css';
import { Link, useLocation  } from 'react-router-dom';

const AboutUsComponent = () => {
    return (
      <div className="about-us-container">
        <img src={AboutUs} alt="About Us" className="about-us-image" />
        <div className="about-us-details">
          <h2 className='about-us-heading'>About Us</h2>
          <p>
            FyRealty is a leading real estate company with a commitment to providing outstanding service and value to buyers and sellers.
            We are known for developing quality working relationships with our clientele; relationships based on respect, integrity, and trust.
          </p>
          <Link to="/about-us" className="learn-more-container">
        <button className="learn-more-button">
        Learn More &#8594;
        </button>
      </Link>
        </div>
      </div>
    );
  }
  
  export default AboutUsComponent;

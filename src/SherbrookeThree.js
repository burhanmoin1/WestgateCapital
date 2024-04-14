import React, { useState, useEffect } from 'react';
import './VillienueveDetails.css'; // Import the CSS file
import Image1 from './images/Portfolio/Sherbrooke-E-2306-MontrealoriginalQuebec-Canada-H2K-1E5/0001-001_10_DSC07934.jpg';
import Image2 from './images/Portfolio/Sherbrooke-E-2306-MontrealoriginalQuebec-Canada-H2K-1E5/0002-002_1_DSC07925.jpg';
import Image3 from './images/Portfolio/Sherbrooke-E-2306-MontrealoriginalQuebec-Canada-H2K-1E5/0003-003_11_DSC07955.jpg';
import NavBar from './Navbar';
import Footer from './Footer';

const SherbrookeThreeDetails = ({ propertyName }) => {
  const [imageIndex, setImageIndex] = useState(0);
   const [timer, setTimer] = useState(null);

  const propertyImages = [
    Image1,
    Image2,
    Image3,
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % propertyImages.length);
    }, 4000); // Initial interval

    setTimer(interval); // Store the interval in state

    return () => clearInterval(interval);
  }, [propertyImages.length]);

  const handleImageClick = (index) => {
    setImageIndex(index); // Set clicked image as the new starting point

    // Clear the existing interval
    if (timer) {
      clearInterval(timer);
    }

    // Start a new interval
    const newInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % propertyImages.length);
    }, 4000); // Restart interval

    setTimer(newInterval); // Store the new interval in state
  };

  return (
    <div className="property-details-container">
      <h1>{propertyName}</h1>
      <hr className="casgrainline" />
      <div className="slideshow-container">
        <img
          src={propertyImages[imageIndex]}
          alt={`Property ${imageIndex + 1}`}
          className="main-image"
        />
      </div>

      <div className="image-preview">
        {propertyImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property ${index + 1}`}
            onClick={() => handleImageClick(index)} // Pass index to handleImageClick
            className={index === imageIndex ? 'active' : ''}
          />
        ))}
      </div>

      <div className="property-description">
        <h2>About the Property</h2>
        <p>
        Elegantly designed with meticulous attention to detail, the Sherbrooke Apartment presents a collection of stylish and thoughtfully curated spaces. From sleek interiors to expansive windows that frame stunning city views, each aspect reflects sophistication and contemporary luxury.        
        </p>
      </div>

      <button className="interested-button">I'm Interested</button>
    </div>
  );
};

function SherbrookeThreePage() {
  const propertyName = '2306 Sherbrooke'; // Set property name here
  return (
    <React.Fragment>
      <NavBar />
      <SherbrookeThreeDetails propertyName={propertyName} />
      <Footer />
    </React.Fragment>
  );
}

export default SherbrookeThreePage;
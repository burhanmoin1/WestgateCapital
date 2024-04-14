import React, { useState, useEffect } from 'react';
import './CasgrainDetails.css'; // Import the CSS file
import Image3 from './images/Portfolio/Casgrain/0001-001_3_DSC08034.jpg';
import Image2 from './images/Portfolio/Casgrain/0002-002_8_DSC08074.jpg';
import Image1 from './images/Portfolio/Casgrain/0003-003_11_DSC08095.jpg';
import NavBar from './Navbar';
import Footer from './Footer';

const CasgrainDetails = ({ propertyName }) => {
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
            Nestled in the heart of Montreal, the Avenue Casgrain Apartment stands as a testament to modern luxury living. Its sleek architectural design seamlessly blends with the vibrant urban landscape, offering residents a sophisticated and comfortable living experience.
        </p>
      </div>

      <button className="interested-button">I'm Interested</button>
    </div>
  );
};

function CasgrainPage() {
  const propertyName = 'Casgrain'; // Set property name here
  return (
    <React.Fragment>
      <NavBar />
      <CasgrainDetails propertyName={propertyName} />
      <Footer />
    </React.Fragment>
  );
}

export default CasgrainPage;
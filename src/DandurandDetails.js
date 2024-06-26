import React, { useState, useEffect } from 'react';
import './FullumDetails.css'; // Import the CSS file
import Image2 from './images/Portfolio/Dandurand/0001-001_1_DSC08200.jpg';
import Image3 from './images/Portfolio/Dandurand/0002-002_10_DSC08209.jpg';
import NavBar from './Navbar';
import Footer from './Footer';

const DandurandDetails = ({ propertyName }) => {
  const [imageIndex, setImageIndex] = useState(0);
   const [timer, setTimer] = useState(null);

  const propertyImages = [
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
      <hr className="fullumline" />
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
        Situated in close proximity to Montreal's cultural hotspots, trendy cafes, and diverse culinary delights, the Dandurand Apartment provides residents with access to the city's rich tapestry of experiences.        </p>
      </div>

      <button className="interested-button">I'm Interested</button>
    </div>
  );
};

function DandurandPage() {
  const propertyName = 'Dandurand'; // Set property name here
  return (
    <React.Fragment>
      <NavBar />
      <DandurandDetails propertyName={propertyName} />
      <Footer />
    </React.Fragment>
  );
}

export default DandurandPage;
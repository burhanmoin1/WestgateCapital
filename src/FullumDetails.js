import React, { useState, useEffect } from 'react';
import './FullumDetails.css'; // Import the CSS file
import Image2 from './images/Portfolio/Fullum/0001-001_1_DSC07863.jpg';
import Image3 from './images/Portfolio/Fullum/0002-002_5_DSC07878.jpg';
import Image1 from './images/Portfolio/Fullum/0003-003_10_DSC07911.jpg';
import NavBar from './Navbar';
import Footer from './Footer';

const FullumDetails = ({ propertyName }) => {
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
        Fullum Montreal offers a breathtaking blend of modern living amidst the rich historical backdrop of Montreal.<br></br><br></br> This property embodies elegance and convenience, situated in a vibrant neighborhood that pulsates with cultural diversity and urban charm.
        </p>
      </div>

      <button className="interested-button">I'm Interested</button>
    </div>
  );
};

function FullumPage() {
  const propertyName = 'Fullum'; // Set property name here
  return (
    <React.Fragment>
      <NavBar />
      <FullumDetails propertyName={propertyName} />
      <Footer />
    </React.Fragment>
  );
}

export default FullumPage;
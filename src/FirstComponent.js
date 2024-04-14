import React, { useState, useEffect } from 'react';
import backgroundImage from './images/Casgrain.jpg';
import { motion } from "framer-motion";
import './FirstComponent.css';

const FirstComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerHeight, setContainerHeight] = useState(700); // Initial height of the container

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      // Calculate the new height based on scroll position
      const newHeight = 600 - scrollPosition * 0.51; // Adjust the speed by changing the multiplier
      setContainerHeight(newHeight >= 700 ? newHeight : 600); // Ensure the minimum height is 100px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    transform: `translateY(-${scrollPosition * 0.1}px)`, // Adjust the speed by changing the multiplier
    height: `${containerHeight}px`, // Set the dynamic height here
  };

  const handleButtonClick = () => {
    let scrollAmount = 800;
    if (window.innerWidth <= 767.98) {
      scrollAmount = 500;
    }
    window.scrollTo({
      top: window.scrollY + scrollAmount,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="first-container" style={containerStyle}>
      <div className="overlay"></div>
      <div className="content">
        <motion.h1 initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 0.3}} className='first-heading'>Building The Foundation To Your Dreams</motion.h1>
        <button className="arrow-button" onClick={handleButtonClick}>&#8595;</button>
      </div>
    </div>
  );
};

export default FirstComponent;

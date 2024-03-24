import React, { useEffect } from 'react';
import './PortfolioContainer.css'; 
import { Link, useLocation  } from 'react-router-dom';
import Frontenac from './images/Portfolio/Frontenac/0002-002_1_DSC08100.jpg';
import CasgrainImage from './images/Portfolio/Casgrain/0002-002_8_DSC08074.jpg';
import Fullum from './images/Portfolio/Fullum/0003-003_10_DSC07911.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

const PortfolioContainer = () => {   

  const servicesData = [
    {
      id: 1,
      image: Frontenac,
      text: '2087 - 2093 Frontenac',
      description: 'Apartment - Montreal',
      className: 'first-service', // Class for the first image
    },
    {
      id: 2,
      image: CasgrainImage,
      text: '7530 - 7538 Casgrain',
      description: 'Apartment - Montreal',
      className: 'second-service', // Class for the second image
    },
    {
      id: 4,
      image: Fullum,
      text: '2300 - 2551 Fullum',
      description: 'Apartment - Montreal',
      className: 'fourth-service', // Class for the third image
      },

  ];
  return (
    <div className="services-container">
      <div className="heading-container">
        <h2 className="main-heading">Portfolio</h2>
        <h2 className="second-heading">Our Latest Acquisitions</h2>
      </div>
      {servicesData.map((service, index) => (
         <Link
         key={service.id}
         to={`/services/${service.text.toLowerCase().replace(/\s+/g, '-')}`}
         className="service-link"
       >
        <div key={service.id} className={`service-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
          <div className="image-container">
          <img
              src={service.image}
              alt={`${service.text.toLowerCase().replace(/\s+/g, '-')}`}
              className={`service-image ${service.className}`}
          />
          </div>
          <div className="text-container">
            <h3 className="service-heading">{service.text}</h3>
            <p className='service-para'>{service.description}</p>
          </div>
        </div>
        </Link>
      ))}
      <Link to="/portfolio" className="explore-more-container">
        <button className="explore-more-button">
        Explore More &#8594;
        </button>
      </Link>
    </div>
  );
};

export default PortfolioContainer;
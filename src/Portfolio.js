import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import ContactUs from './ContactUs';
const Frontenac = 'https://property-images-112.s3.us-east-2.amazonaws.com/images/Frontenac.jpg';
const CasgrainImage = 'https://property-images-112.s3.us-east-2.amazonaws.com/images/Casgrain.jpg';
const Fullum = 'https://property-images-112.s3.us-east-2.amazonaws.com/images/Fullum.jpg';
const Sherbrooke = 'https://property-images-112.s3.us-east-2.amazonaws.com/Portfolio/Sherbrooke/0001-001_1_DSC08005.jpg';
const StJacques = 'https://property-images-112.s3.us-east-2.amazonaws.com/Portfolio/St Jacques-7388/DJI_0884.jpg';
const Sherbrooketwo = 'https://property-images-112.s3.us-east-2.amazonaws.com/Portfolio/Sherbrooke/2308-2310-Rue-Sherbrooke-Est-Montreal-originalCanada-H2K-1E5/0002-002_7_DSC07804.jpg';
const Sherbrookethree = 'https://property-images-112.s3.us-east-2.amazonaws.com/Portfolio/Sherbrooke-E-2314-2316-Montreal-original Quebec-Canada-H2K-1E5/0002-002_10_DSC07847.jpg';
const Sherbrookefour = 'https://property-images-112.s3.us-east-2.amazonaws.com/Portfolio/Sherbrooke-E-2306-MontrealoriginalQuebec-Canada-H2K-1E5/0001-001_10_DSC07934.jpg';
const MarieAnne = 'https://property-images-112.s3.us-east-2.amazonaws.com/Portfolio/Marie-Anne/0003-003_11_DSC07775.jpg';
const Dandurand = 'https://property-images-112.s3.us-east-2.amazonaws.com/Portfolio/Dandurand/0003-003_11_DSC08225.jpg';
const Hochelaga8578 = 'https://property-images-112.s3.us-east-2.amazonaws.com/Portfolio/Hochelaga-8578-8590/0002-002_6_DSC07715.jpg';
const Hochelaga3657 = 'https://property-images-112.s3.us-east-2.amazonaws.com/Portfolio/Hochelaga-3657-3667/0002-002_10_DSC07667.jpg';
const VillImage = 'https://property-images-112.s3.us-east-2.amazonaws.com/images/vill.jpg'; 

const PortfolioItem = ({ image, name, description }) => {
  const cleanedName = name.replace(/[\d-]/g, '').trim();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  let link;

  if (name === '2290 SHERBROOKE') {
    link = (
      <a href="sherbrookeone">
        {isLoaded && (
          <img
            src={image}
            alt={name}
            effect="opacity"
            className="portfolio-image"
          />
        )}
        <h3>{name}</h3>
        <p>{description}</p>
      </a>
    );
    } else if (name === '2308 SHERBROOKE') {
      link = (
        <a href="sherbrooketwo">
          {isLoaded && (
            <img
              src={image}
              alt={name}
              effect="opacity"
              className="portfolio-image"
            />
          )}
          <h3>{name}</h3>
          <p>{description}</p>
        </a>
      );
    } else if (name === '2306 SHERBROOKE') {
      link = (
        <a href="sherbrookethree">
          {isLoaded && (
            <img
              src={image}
              alt={name}
              effect="opacity"
              className="portfolio-image"
            />
          )}
          <h3>{name}</h3>
          <p>{description}</p>
        </a>
      );
    } else if (name === '2314 SHERBROOKE') {
      link = (
        <a href="sherbrookefour">
          {isLoaded && (
            <img
              src={image}
              alt={name}
              effect="opacity"
              className="portfolio-image"
            />
          )}
          <h3>{name}</h3>
          <p>{description}</p>
        </a>
      );
  } else {
    link = (
      <Link to={`/property/${cleanedName.replace(/\s+/g, '-').toLowerCase()}`}>
        {isLoaded && (
          <img
            src={image}
            alt={name}
            effect="opacity"
            className="portfolio-image"
          />
        )}
        <h3>{name}</h3>
        <p>{description}</p>
      </Link>
    );
  }

  return <div className="portfolio-item">{link}</div>;
};

const Portfolio = () => {
  // Sample data for portfolio items
  const portfolioData = [
    { id: 1, image: CasgrainImage, name: '7530 - 7538 Casgrain', description: 'Apartment - Montreal' },
    { id: 2, image: Frontenac, name: '2087 - 2093 Frontenac', description: 'Apartment - Montreal' },
    { id: 3, image: VillImage, name: '294 Villienueve Quest', description: 'Apartment - Montreal' },
    { id: 4, image: Fullum, name: '2300 - 2551 Fullum', description: 'Apartment - Montreal' },
    { id: 5, image: Sherbrooke, name: '2290 Sherbrooke', description: 'Apartment - Montreal'},
    { id: 10, image: Sherbrooketwo, name: '2308 Sherbrooke', description: 'Apartment - Montreal'},
    { id: 10, image: Sherbrookefour, name: '2306 Sherbrooke', description: 'Apartment - Montreal'},
    { id: 10, image: Sherbrookethree, name: '2314 Sherbrooke', description: 'Apartment - Montrea;'},
    { id: 10, image: StJacques, name: '7388 St Jacques', description: 'Apartment - Montreal'},
    { id: 6, image: MarieAnne, name: '2189 - 2199 Marie-Anne', description: 'Apartment - Montreal'},
    { id: 7, image: Dandurand, name: '2700 - 2710 Dandurand', description: 'Apartment - Montreal'},
    { id: 8, image: Hochelaga8578, name: '8578 - 8590 Baldwin', description: 'Apartment - Montreal'},
    { id: 8, image: Hochelaga3657, name: '3657 - 3667 De Chambly', description: 'Apartment - Montreal'},
  ];

    useEffect(() => {
    const criticalImages = [
      Frontenac,
      CasgrainImage,
      Fullum,
      Sherbrooke,
      StJacques,
      Sherbrooketwo,
      Sherbrookefour,
      Sherbrookethree,
      MarieAnne,
      Dandurand,
      Hochelaga8578,
      Hochelaga3657,
      VillImage
    ];

    criticalImages.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
    });
  }, []);

  return (
    <div className="portfolio">
      <h1 className='portfolioheading'>PORTFOLIO</h1>
      <p className='portfoliopara'>OUR LATEST ACQUISITIONS</p>
      <hr className="portfolioline" />
      <div className="portfolio-items">
        {portfolioData.map(item => (
          <PortfolioItem
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

function PortfolioPage() {
    return (
      <React.Fragment>
        <NavBar />
        <Portfolio />
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
  
  export default PortfolioPage;
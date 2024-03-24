import React, {useEffect} from 'react';
import CustomNavbar from './Navbar';
import FirstComponent from './FirstComponent';
import PortfolioContainer from './PortfolioContainer';
import AboutUsComponent from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function Homepage() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = 'Home - Westgate Capital';
      }
  }, [location.pathname]);
  
    return (
      <React.Fragment>
        <CustomNavbar />
        <FirstComponent />
        <PortfolioContainer />
        <AboutUsComponent />
        <ContactUs />
        <Footer />
    </React.Fragment>
  );
}

export default Homepage;
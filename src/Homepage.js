import React, {useEffect} from 'react';
import CustomNavbar from './Navbar';
import FirstComponent from './FirstComponent';
import PortfolioContainer from './PortfolioContainer';
import AboutUsComponent from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';

function Homepage() {
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
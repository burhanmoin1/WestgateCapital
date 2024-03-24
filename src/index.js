import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import Homepage from './Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';
import PortfolioPage from './Portfolio';
import AboutUsFull from './AboutUsFull';

const App = () => {
return (
    <React.StrictMode>
      <Router>
      <ScrollToTop />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path = '/portfolio' element={<PortfolioPage />} />
        <Route path = '/about-us' element={<AboutUsFull />} />
          </Routes>
          </Router>
    </React.StrictMode>
  );
};

const domNode = document.getElementById('root');
render(<App />, domNode);
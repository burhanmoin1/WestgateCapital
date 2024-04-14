import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import Homepage from './Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';
import PortfolioPage from './Portfolio';
import AboutUsFull from './AboutUsFull';
import SherbrookeTwoPage from './SherbrookeTwo';
import SherbrookeThreePage from './SherbrookeThree';
import SherbrookeFourPage from './SherbrookeFour';
import CasgrainPage from './CasgrainDetails';
import VillieunevePage from './VillienueveDetails';
import FrontenacPage from './FrontenacDetails';
import FullumPage from './FullumDetails';
import SherbrookePage from './SherbrookeDetails';
import MarieAnnePage from './MarieAnneDetails';
import DandurandPage from './DandurandDetails'; 
import Hochelega8578Page from './Hochlega8578Details';
import Hochelega3657Page from './Hochelaga3657Details';

const App = () => {
return (
    <React.StrictMode>
      <Router>
      <ScrollToTop />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/about-us' element={<AboutUsFull />} />
        <Route path='/property/villienueve-quest' element={<VillieunevePage />} />
        <Route path='/property/Casgrain' element={<CasgrainPage />} />
        <Route path='/property/Frontenac' element={<FrontenacPage />} />
        <Route path='/property/Fullum' element={<FullumPage />} />
        <Route path='sherbrookeone' element={<SherbrookePage />} />
        <Route path='sherbrooketwo' element={<SherbrookeTwoPage />} />   
        <Route path='sherbrookethree' element={<SherbrookeThreePage />} />            
        <Route path='sherbrookefour' element={<SherbrookeFourPage />} />            
        <Route path='/property/marieanne' element={<MarieAnnePage />} />      
        <Route path='/property/Dandurand' element={<DandurandPage />} />      
        <Route path='/property/baldwin' element={<Hochelega8578Page />} />
        <Route path='/property/de-chambly' element={<Hochelega3657Page />} />
          </Routes>
          </Router>
    </React.StrictMode>
  );
};

const domNode = document.getElementById('root');
render(<App />, domNode);
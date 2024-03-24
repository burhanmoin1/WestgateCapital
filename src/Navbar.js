import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from './images/Westgate Capital Logo.png';
import Hamburger from 'hamburger-react';

const CustomNavbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar bg="transparent" expand="lg" variant="dark" className="floaty-navbar">
      <Navbar.Brand className="logo-container">
          <Link className="navbar-logo" to="/">WestgateCapital
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger-container">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.5}
          className="hamburger-icon"
        />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <Nav.Link>
          <Link to="/" className="NavLink-underline" >Home</Link>
        </Nav.Link>
          <Nav.Link>
          <Link to="/portfolio" className="NavLink-underline">Portfolio</Link>
          </Nav.Link>
          <Nav.Link>
          <Link to="/about-us" className="NavLink-underline">About Us</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

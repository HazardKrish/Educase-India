import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">
          <span>COMPANY</span>
          <br />
          Your Logo
        </Link>
        <div className={`nav-toggle-label ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
        </div>
        <ul className="nav-menu">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/services">Our Services</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
        </ul>
        <Link to="/contact" className="btn btn-quote-desktop">Get a Quote</Link>
        <div className={`mobile-nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul onClick={() => setMenuOpen(false)}>
            <li><NavLink to="/"><i className="fa-solid fa-house"></i> Home</NavLink></li>
            <li><NavLink to="/about"><i className="fa-solid fa-circle-info"></i> About Us</NavLink></li>
            <li><NavLink to="/services"><i className="fa-solid fa-briefcase"></i> Our Services</NavLink></li>
            <li><NavLink to="/pricing"><i className="fa-solid fa-tag"></i> Pricing</NavLink></li>
            <li><NavLink to="/faq"><i className="fa-solid fa-circle-question"></i> FAQ</NavLink></li>
          </ul>
          <Link to="/contact" className="btn btn-contact-mobile">CONTACT US</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

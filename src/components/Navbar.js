import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/logo1.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import moon from '../assets/dark theme icon/sun.png'
import Cursor from './Cursor.js'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Cursor/>
      <div className="navbar-container">
        <ul className="navbar-left">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Onyx Constructions Logo" />
        </Link>
        <ul className="navbar-right">
          <li>
          <a href="https://www.facebook.com/onyx.oci/" rel='noreferrer' target='_blank' id='facebook'>
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/onyx.oci/" rel='noreferrer' target='_blank' id='instagram'>
            <FaInstagram />
          </a>
        </li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

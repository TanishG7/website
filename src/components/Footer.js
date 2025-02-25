import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Footer.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import logo from "../assets/logo1.png";
import GetInTouch from "./GetInTouch"

const Footer = () => {
  const location = useLocation();

  return (
    <>
    {location.pathname !== '/schedule-a-meeting' && <GetInTouch />}
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Company Logo" className="footer-logo" />
        <div className="footer-company-name">ONYX Construction and Interiors</div>
        <div className="footer-socials">
        <a href="https://www.instagram.com/onyx.oci" rel='noreferrer' target='_blank'><FaInstagram className="social-icon"/></a>
        <a href="https://www.facebook.com/onyx.oci/" rel='noreferrer' target='_blank'><FaFacebook className="social-icon" /></a>
          <FaTwitter className="social-icon" />
          <FaYoutube className="social-icon" />
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <h3>Our Projects</h3>
          <ul>
            <li><Link to="/projects/b-1-619-janakpuri">B-1/619, Janakpuri</Link></li>
            <li><Link to="/projects/a-46-vikaspuri">A-46, Vikaspuri</Link></li>
            <li><Link to="/projects/h-474-vikaspuri">H-474, Vikaspuri</Link></li>
            <li><Link to="/projects/h-170-vikaspuri">H-170, Vikaspuri</Link></li>
            <li><Link to="/projects/a-112-dwarka">A-112, Dwarka</Link></li>
            <li><Link to="/projects/c-17-nkp">C-17, New Krishna Park</Link></li>
            <li><Link to="/projects">More...</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><Link to="/turnkey-projects">Turnkey Projects</Link></li>
            <li><Link to="/interior-designing">Interior Designing</Link></li>
            <li><Link to="/collaboration-service">Collaboration</Link></li>
            <li><Link to="/project-management">Project Management</Link></li>
            <li><Link to="/projects">Independent Floors</Link></li>
          </ul>
        </div>
        <div className="footer-column">
        <h3>Product</h3>
          <ul>
            <li>Database</li>
            <li>Auth</li>
            <li>Functions</li>
            <li>Realtime</li>
            <li>Storage</li>
            <li>Vector</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Calculators For You</h3>
          <ul>
            <li><Link to="/far-calculator">FAR Calculator</Link></li>
            <li><Link to="/construction-cost-calculator">Construction Cost Calculator</Link></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

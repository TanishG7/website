import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import logo from "../assets/logo1.png";
import GetInTouch from "./GetInTouch"

const Footer = () => {
  return (
    <>
    <GetInTouch/>
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
          <h3>Resources</h3>
          <ul>
            <li>Support</li>
            <li>System Status</li>
            <li>Become a Partner</li>
            <li>Integrations</li>
            <li>Experts</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Developers</h3>
          <ul>
            <li>Documentation</li>
            <li>Changelog</li>
            <li>Contributing</li>
            <li>Open Source</li>
            <li>SupaSquad</li>
            <li>DevTo</li>
            <li>RSS</li>
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

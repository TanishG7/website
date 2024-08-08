import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-content">
        <h1>About Us</h1>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="feature-text">
              <h3>Quality</h3>
              <p>We deliver top-notch quality in every project we undertake, ensuring durability and excellence.</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <div className="feature-text">
              <h3>Quickness</h3>
              <p>Our team ensures timely completion of projects without compromising on quality.</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="feature-text">
              <h3>Result</h3>
              <p>We guarantee results that meet your expectations and add value to your investment.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-image">
        <img src={`${process.env.PUBLIC_URL}/Screenshot 2024-06-06 at 12.47.48 PM.png`} alt="Construction Planning" />
      </div>
    </section>
  );
};

export default AboutUs;

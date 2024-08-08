import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import '../styles/Drift.css';

const Drift = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="drift-container">
      {isOpen && (
        <div className="drift-expanded">
          <h2>Get in touch with us</h2>
          <div className="drift-option" onClick={() => window.open('https://wa.me/9354858516', '_blank')}>
            <FaWhatsapp size={24} color="#25D366" />
            <span>WhatsApp us</span>
          </div>
          <div className="drift-option" onClick={() => window.open('mailto:onyx.oci@gmail.com', '_blank')}>
            <FaEnvelope size={24} color="#0072C6" />
            <span>Send us an email</span>
          </div>
        </div>
      )}
      <div className="drift-button" onClick={handleToggle}>
        <FaWhatsapp size={30} color="#ffffff" />
      </div>
    </div>
  );
};

export default Drift;

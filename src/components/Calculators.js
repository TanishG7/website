import React from 'react';
import '../styles/Calculators.css';
import interior9 from '../assets/interior7.jpeg'

function Calculators() {
  return (
    <section className="calculator-section">
      <h2>Essential Tools for Your Project</h2>
      <p>Calculate Floor Area Ratio (FAR) and Construction Costs Easily</p>
      <div className="calculator-buttons">
        <div className="calculator-button">
          <img src={interior9} alt="FAR Calculator" />
          <a href="/far-calculator" className="button">FAR Calculator</a>
        </div>
        <div className="calculator-button">
          <img src={interior9} alt="Construction Cost Calculator" />
          <a href="/construction-cost-calculator" className="button">Construction Cost Calculator</a>
        </div>
      </div>
    </section>
  );
}

export default Calculators;

import React from 'react';
import FounderCard from '../components/FounderCard';
import '../styles/Founders.css';

const Founders = () => {
  return (
    <div className="founders">
      <header className="founders-header">
        <h1>Founders</h1>
      </header>
      <section className="founders-content">
        {/* FounderCard components will be inserted here */}
      </section>
    </div>
  );
};

export default Founders;

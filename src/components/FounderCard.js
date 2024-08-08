import React from 'react';
import '../styles/FounderCard.css';

const FounderCard = ({ name, title, bio, image }) => {
  return (
    <div className="founder-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default FounderCard;

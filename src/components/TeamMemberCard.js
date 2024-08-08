import React from 'react';
import '../styles/TeamMemberCard.css';

const TeamMemberCard = ({ name, title, image }) => {
  return (
    <div className="team-member-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{title}</h4>
    </div>
  );
};

export default TeamMemberCard;

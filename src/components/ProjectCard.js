import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={require(`../assets/${project.mainImage}`)} alt={project.name} className="project-image" />
        <div className={`status-box ${project.status.toLowerCase().replace(" ", "")}`}>
          {project.status}
        </div>
      </div>
      <div className="project-details">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>{project.size} sqft</p>
        {project.status !== 'Sold Out' ? 
            <p>{project.available} Floor Available</p>:
            <p>{project.BHK} BHK</p>
        }
        <a href={`/projects/${project.slug}`} className="know-more-button">Know More</a>
      </div>
    </div>
  );
}

export default ProjectCard;

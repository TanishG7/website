import React from 'react';
import { Link } from 'react-router-dom';
import projectsJSON from '../constants/projects.json';

const ProjectList = () => {
  return (
    <div className="project-list">
      <h1>Projects</h1>
      <ul>
        {Object.values(projectsJSON).map((project) => (
          <li key={project.slug}>
            <Link to={`/projects/${project.slug}`}>
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

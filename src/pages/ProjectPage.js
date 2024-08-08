import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectPage.css';
import projectsJSON from '../constants/projects.json';
import home2 from '../assets/home2.jpg';

const Projects = () => {
    const [locationFilter, setLocationFilter] = useState('All');
    const [floorFilter, setFloorFilter] = useState('All');

    const projectsData = Object.values(projectsJSON);

    const filteredProjects = projectsData.filter(project => 
        (locationFilter === 'All' || project.location === locationFilter) &&
        (floorFilter === 'All' || (project.floor.includes(',') ?  project.floor.split(', ').includes(floorFilter):  project.floor === floorFilter))
    );

    const getTitle = () => {
        let title = 'All Projects';
        if (locationFilter !== 'All' && floorFilter !== 'All') {
            title = `All Projects in ${locationFilter} at ${floorFilter} floor`;
        } else if (locationFilter !== 'All') {
            title = `All Projects in ${locationFilter}`;
        } else if (floorFilter !== 'All') {
            title = `All Projects at ${floorFilter} floor`;
        }
        return title;
    };

    return (
        <div className="projects-page">
            <div className="hero-card-projects">
                <img src={home2} alt="Hero" className="hero-imag-projects" />
                <div className="hero-content-projects">
                    <h1>Our Real Estate Projects</h1>
                    <p>Discover the finest properties and homes available in various locations.</p>
                </div>
            </div>
            <h1 className='search-projects-title'>Search Our Projects</h1>
            <div className="search-container-projects">
                <div className="search-location-projects">
                    <h2>By Location</h2>
                    <div className="filter-buttons-loc-projects">
                        <button onClick={() => setLocationFilter('All')}>All</button>
                        <button onClick={() => setLocationFilter('Vikaspuri')}>Vikaspuri</button>
                        <button onClick={() => setLocationFilter('Janakpuri')}>Janakpuri</button>
                        <button onClick={() => setLocationFilter('Dwarka')}>Dwarka</button>
                        <button onClick={() => setLocationFilter('New Krishna Park')}>New Krishna Park</button>
                    </div>
                </div>
                <div className="search-floor-projects">
                    <h2>By Floor</h2>
                    <div className="filter-buttons-floor-projects">
                        <button onClick={() => setFloorFilter('All')}>All</button>
                        <button onClick={() => setFloorFilter('Upper Ground')}>Upper Ground</button>
                        <button onClick={() => setFloorFilter('1st')}>1st</button>
                        <button onClick={() => setFloorFilter('2nd')}>2nd</button>
                        <button onClick={() => setFloorFilter('3rd')}>3rd</button>
                    </div>
                </div>
            </div>
            <div className="title-card-projects">
                <h2>{getTitle()}</h2>
            </div>
            <div className="projects-list">
                {filteredProjects.map(project => (
                    <div className="project-card" key={project.slug}>
                        <div className="project-status" style={{ backgroundColor: getStatusBGColor(project.status) , color: getStatusColor(project.status) }}>
                            {project.status}
                        </div>
                        <img src={require(`../assets/${project.mainImage}`)} alt={`Project ${project.name}`} className="project-image" />
                        <div className="project-details">
                            <h2>{project.name}</h2>
                            <p>{project.type}</p>
                            <p>{project.size} sqft</p>
                            {project.status !== 'Sold Out' ? 
                                <p>{project.available} Floor Available</p>:
                                <p>{project.BHK} BHK</p>
                            }
                        </div>
                        <Link to={`/projects/${project.slug}`} className="know-more-button-projects">
                            See More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

const getStatusBGColor = (status) => {
    switch (status) {
        case 'Completed':
            return 'blue';
        case 'On Sale':
            return 'yellow';
        case 'Sold Out':
            return 'red';
        default:
            return 'orange';
    }
};

const getStatusColor = (status) => {
    switch (status) {
        case 'Completed':
            return 'white';
        case 'On Sale':
            return 'black';
        case 'Sold Out':
            return 'white';
        default:
            return 'black';
    }
};

export default Projects;

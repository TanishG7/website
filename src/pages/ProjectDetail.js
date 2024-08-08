import React, { useState, useEffect, lazy } from 'react';
import { useParams } from 'react-router-dom';
import projectsJSON from '../constants/projects.json';
import '../styles/ProjectDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import BHK from '../assets/project-detail-icons/bed.png';
import type from '../assets/project-detail-icons/home.png';
import status from '../assets/project-detail-icons/loading.png';
import location from '../assets/project-detail-icons/location.png';
import parking from '../assets/project-detail-icons/parking.png';
import size from '../assets/project-detail-icons/reduce.png';
import client from '../assets/project-detail-icons/customer.png';
import park from '../assets/neighbourhood-icons/park.png';
import shopping from '../assets/neighbourhood-icons/shopping.png';
import airport from '../assets/neighbourhood-icons/airport.png';
import wallet from '../assets/neighbourhood-icons/wallet.png';
import petrol from '../assets/neighbourhood-icons/gas-station.png';
import hospital from '../assets/neighbourhood-icons/health.png';
import school from '../assets/neighbourhood-icons/school.png';
import metro from '../assets/neighbourhood-icons/fast-train.png';
import Sidebar from '../components/Sidebar';

const VideoComponent = lazy(() => import('../components/VideoComponent'));
const PhotoGallery = lazy(() => import('../components/PhotoGallery'));
const FAQComponent = lazy(() => import('../components/FAQproject'));

const activityIcons = {
  park,
  shopping,
  airport,
  wallet,
  petrol,
  hospital,
  school,
  metro,
};

const getProjectDetails = (slug) => {
  return Object.values(projectsJSON).find(project => project.slug === slug);
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);

  useEffect(() => {
    const details = getProjectDetails(slug);
    setProject(details);
  }, [slug]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleInterestedClick = () => {
    window.open('/schedule-a-meeting', '_blank');
  };
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9354858516', '_blank');
  };
  
  const handleMailClick = () => {
    window.open('mailto:onyx.oci@gmail.com', '_blank');
  };
  

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.photos.length - 1 : prevIndex - 1
    );
  };

  const handleMapClick = () => {
    window.open(project.maplocation, '_blank');
  };
  

  const handleShareClick = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleTimelineToggle = () => {
    setIsTimelineOpen(!isTimelineOpen);
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  const getImagePath = (image) => {
    try {
      return require(`../assets/${image}`);
    } catch (err) {
      console.error('Image not found:', image);
      return '';
    }
  };

  return (
    <div className="project-detail-page">
      <div className="main-content">
        <div className="left-column">
          <div className="image-carousel">
            <button onClick={handlePrevImage}>&lt;</button>
            <img src={getImagePath(project.photos[currentImageIndex])} alt={project.name} className="main-image" />
            <button onClick={handleNextImage}>&gt;</button>
            <div className="thumbnail-gallery">
              {project.photos.slice(currentImageIndex, currentImageIndex + 4).map((photo, index) => (
                <img key={index} src={getImagePath(photo)} alt={`Thumbnail ${index + 1}`} className="thumbnail" />
              ))}
            </div>
          </div>
          <h1 className="project-title">
            {project.name}
            <FontAwesomeIcon icon={faShareAlt} className="share-icon" onClick={handleShareClick} />
          </h1>
          <div className="tabs">
            <span className={`tab-link ${activeTab === 'details' ? 'active' : ''}`} onClick={() => handleTabClick('details')}>Details</span>
            <span className={`tab-link ${activeTab === 'description' ? 'active' : ''}`} onClick={() => handleTabClick('description')}>Description</span>
            <span className={`tab-link ${activeTab === 'features' ? 'active' : ''}`} onClick={() => handleTabClick('features')}>Features</span>
            <span className={`tab-link ${activeTab === 'video-tour' ? 'active' : ''}`} onClick={() => handleTabClick('video-tour')}>Video Tour</span>
            <span className={`tab-link ${activeTab === 'faq' ? 'active' : ''}`} onClick={() => handleTabClick('faq')}>FAQ</span>
            <span className={`tab-link ${activeTab === 'timeline' ? 'active' : ''}`} onClick={() => handleTabClick('timeline')}>Timeline</span>
            <div className="underline" style={{ left: activeTab === 'details' ? '0%' : activeTab === 'description' ? '8.2%' : activeTab === 'features' ? '20.35%' : activeTab === 'video-tour' ? '30.5%' : activeTab === 'faq' ? '42%':'48.35%' }}></div>
          </div>
          <div className="tab-content">
            {activeTab === 'description' && <p className='description-text'>{project.description}</p>}
            {activeTab === 'details' && (
              <div className="project-info">
                <div className="info-item">
                  <img src={type} alt="Type" className="info-icon" />
                  <p className='info-text-heading'>Property Type</p><br></br><span className="info-text">{project.type}</span>
                </div>
                <div className="info-item">
                  <img src={size} alt="Size" className="info-icon" />
                  <p className='info-text-heading'>Size</p><br></br><span className="info-text">{project.size} sqft</span>
                </div>
                <div className="info-item">
                  <img src={parking} alt="Parking" className="info-icon" />
                  <p className='info-text-heading'>Parking</p><br></br><span className="info-text">{project.parking} sqft</span>
                </div>
                <div className="info-item">
                  <img src={client} alt="Client" className="info-icon" />
                  <p className='info-text-heading'>Client</p><br></br> <span className="info-text">{project.client}</span>
                </div>
                <div className="info-item">
                  <img src={BHK} alt="Location" className="info-icon" />
                  <p className='info-text-heading'>BHK</p><br></br><span className="info-text">{project.BHK} BHK</span>
                </div>
                <div className="info-item">
                  <img src={status} alt="Status" className="info-icon" />
                  <p className='info-text-heading'>Status</p><br></br> <span className="info-text">{project.status}</span>
                </div>
              </div>
            )}
            {activeTab === 'video-tour' && (
              <div className='video-tour-container'>
                <video className="video-tour-pdp" src={getImagePath(project.video)} autoPlay loop muted ></video>
              </div>
            )}
            {activeTab === 'faq' && (
              <div className="faq-content-pdp">
                {project.faqs.map((faq, index) => (
                  <div key={index} className="faq-item-pdp">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="timeline-content">
                <p><strong>Start Date:</strong> {project.startDate}</p>
                <p><strong>End Date:</strong> {project.endDate}</p>
                <button className="timeline-button" onClick={handleTimelineToggle}>
                  <b>{isTimelineOpen ? 'Close Detailed Timeline' : 'Show Detailed Timeline'}</b>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="right-column">
          {project.available ? <div className="alert-box"><h1>{project.available} Floor Available</h1></div>:
          <div className="alert-box"><h1>All Floors Sold</h1></div>
          }
          <div className="neighborhood-activities">
            <h2>Neighbourhood Activities</h2>
            <ul>
              {project.activities.map((activity, index) => (
                <li key={index}>
                  <img src={activityIcons[activity.name]} alt={activity.display} className="nbd-icon" />
                  <p className='nbd-details'>{activity.display}</p> : {activity.distance}
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="map-section">
            <h2>Map</h2>
            <div className="map-container">
              <div id="map"></div>
            </div>
            <div className="map-actions">
              <button className="map-button" onClick={handleMapClick}>View Location</button>
            </div>
          </div> */}

          <div className="button-container">
            <button className="btn-76" onClick={handleInterestedClick}>
              I am interested
              <span class="top"></span>
              <span class="right"></span>
              <span class="bottom"></span>
              <span class="left"></span>
            </button>
            <button className='btn-54' onClick={handleWhatsAppClick}>
              <span class="shadow"></span>
              <span class="depth"></span>
              <span class="content">Whatsapp Us</span>
            </button>
            <button className='btn-54' onClick={handleMailClick}>
              <span class="shadow"></span>
              <span class="depth"></span>
              <span class="content">Mail Us</span>
            </button>
          </div>

        </div>

      </div>
      <Sidebar isOpen={isTimelineOpen} onClose={handleTimelineToggle} timeline={project.timeline} />
    </div>
  );
};

export default ProjectDetail;

import React from 'react';
import Slider from 'react-slick';
import AboutUs from '../components/AboutUs';
import '../styles/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video from '../assets/MyMovie.mp4';
import interior2 from '../assets/interior2.jpeg';
import interior10 from '../assets/interior10.jpeg'
import interior4 from '../assets/interior4.jpeg'
import interior3 from '../assets/interior3.jpeg'
import interior11 from '../assets/interior11.jpeg'
import Cursor from '../components/Cursor.js'
import ProjectCard from '../components/ProjectCard.js';
import Testimonial from '../components/Testimonial.js';
import Calculators from '../components/Calculators.js';
import FAQ from './FAQ.js';
import projectsJSON from '../constants/projects.json';


const services = [
  {
    title: "Turnkey Projects",
    description: "We handle every aspect, from blueprint to finishing touches. Our turnkey solutions guarantee a move-in ready home, letting you enjoy your new space stress-free",
    features: [
    ],
    button: "Know More",
    link: '/turnkey-projects',
    image: interior2
  },
  {
    title: "Interior Designing",
    description: "Elevate your living spaces with our personalized interior design services. Our skilled team crafts tailored interiors, reflecting your style with meticulous attention and creative flair",
    features: [
    ],
    button: "Discover More",
    link: '/interior-designing',
    image: interior10
  },
  {
    title: "Buy Independent Floors",
    description: "Discover our exceptional independent floors, offering unparalleled privacy, luxury, and tranquility. Find the perfect fit for your lifestyle with us today and elevate your living experience",
    features: [
    ],
    button: "Explore available floors",
    link: '/projects',
    image: interior4
  },
  {
    title: "Collaboration Service",
    description: "Partner with us to transform your vision into reality. We handle the entire design and construction of your new home at no cost to you, in exchange for a floor(s) in the newly built property",
    features: [
    ],
    button: "Explore More",
    link: '/collaboration-service',
    image: interior3
  },
  {
    title: "Project Management",
    description: "Ensure the success of your construction project with our comprehensive project management services. We oversee every aspect from start to finish, ensuring timely and on-budget completion",
    features: [
    ],
    button: "See How We Work",
    link: '/project-management',
    image: interior11
  }
];

const Home = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const projectsData = Object.values(projectsJSON);
  const selectedProjectIndices = [0, 1, 2];
  const displayedProjects = selectedProjectIndices.map(index => projectsData[index]);

  return (
    <div className="home">
      <Cursor/>
      <div className="hero-section">
        <div className="hero-video">
          <video autoPlay muted loop className="background-video">
            <source src={Video} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div className="hero-content">
          <h1>Building Dreams<br /> One Floor at a Time</h1>
          <p>Crafting High-Quality Homes and Spaces with Expertise and Passion</p>
          <button onClick={() => window.location.href='/schedule-a-meeting'}>Schedule a Meeting</button>
          <button onClick={() => window.location.href='/projects'}>Explore Our Projects</button>
        </div>
      </div>

      {/* <section className="about-us">
        <h2>Who We Are</h2>
        <div className="about-content">
          <p>
            At Onyx Constructions, we are dedicated to transforming your visions into reality. With a passion for excellence and a commitment to quality, we build high-quality homes and commercial spaces that stand the test of time. Our team of experienced professionals works tirelessly to ensure every project is completed with the utmost precision and attention to detail.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission is to create spaces that not only meet but exceed our clients' expectations. We strive to deliver unparalleled craftsmanship and innovative solutions in every project we undertake.
          </p>
          <h3>Our Vision</h3>
          <p>
            To be the most trusted and respected construction company, known for our quality, reliability, and excellence in service. We aim to build lasting relationships with our clients by consistently delivering superior results.
          </p>
          <h3>Our Values</h3>
          <ul>
            <li><strong>Excellence:</strong> We are committed to delivering the highest quality in every project.</li>
            <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
            <li><strong>Innovation:</strong> We embrace new ideas and technologies to improve our services.</li>
            <li><strong>Customer Satisfaction:</strong> We prioritize our clients' needs and ensure their satisfaction.</li>
          </ul>
          <h3>What Sets Us Apart</h3>
          <p>
            Our dedication to excellence and our customer-centric approach set us apart from other builders. We use only the highest quality materials and employ skilled professionals to ensure every project is completed to the highest standards. Our attention to detail and commitment to timely delivery make us the preferred choice for many.
          </p>
        </div>
        <div className="about-icons">
          {/* Add icons or images representing mission, vision, values, and what sets you apart */}
        {/* </div>
      </section> } */}

      <section className="servicesh">
        <h1>Transform Your Dream Home into Reality with Our Comprehensive Services</h1>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="service-button" onClick={() => window.location.href=service.link}>{service.button}</button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <AboutUs/>
      
      <div class="projecth1">
      <h1>Our Projects</h1>
      </div>
      <div className="project-card-container">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>


      <div class="see-morebutton">
        <a href="/projects" className="see-all-projects-button"><b>View All Projects</b></a>
      </div>

      <Testimonial/>

      <Calculators/>
      
      <FAQ/>

      <section className="blog-news">
        <h2>Latest News & Insights</h2>
        <div className="blog-posts">
          {/* Add links to recent blog posts or articles */}
        </div>
      </section>
      
    </div>
  );
};

export default Home;

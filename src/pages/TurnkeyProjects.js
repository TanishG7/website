import React from 'react';
import '../styles/TurnkeyProjects.css';
import heroImage from '../assets/interior15.jpeg';
import planningIcon from '../assets/decor.jpeg';
import designIcon from '../assets/decor.jpeg';
import procurementIcon from '../assets/decor.jpeg';
import constructionIcon from '../assets/decor.jpeg';
import commissioningIcon from '../assets/decor.jpeg';

import construction from '../assets/icons/construction.png';
import interior from '../assets/icons/interior-designing.png';
import planning from '../assets/icons/planning-design.png';
import procurement from '../assets/icons/procurement.png';
import regulatory from '../assets/icons/regulatory.png';
import timing from '../assets/icons/timing.png';

function TurnkeyProjects() {
  return (
    <div className="turnkey-projects">
      <div className="hero-card">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Turnkey Projects</h1>
          <p>From Concept to Completion, We Handle Every Detail</p>
          <a href="/schedule-a-meeting" className="schedule-meeting-button">Schedule a Meeting</a>
        </div>
      </div>

      <div className='serviceh1'>
        <h1>Our Turnkey Services</h1>
      </div>
      <section className="services-cards">
        <div className="service-card-turnkey">
          <img src={planning} alt="planning" />
          <h3>Planning and Design</h3>
          <p>Creative and functional designs tailored to your needs</p>
        </div>
        <div className="service-card-turnkey">
          <img src={construction} alt="construction" />
          <h3>Construction</h3>
          <p>High-quality construction services ensuring durability and aesthetics</p>
        </div>
        <div className="service-card-turnkey">
          <img src={interior} alt="interior" />
          <h3>Interior Design</h3>
          <p>Expert interior design services to create aesthetically pleasing and functional spaces</p>
        </div>
        <div className="service-card-turnkey">
          <img src={procurement} alt="procurement" />
          <h3>Procurement</h3>
          <p>Efficient sourcing of materials and equipment</p>
        </div>
        <div className="service-card-turnkey">
          <img src={regulatory} alt="regulatory" />
          <h3>Regulatory Compliance</h3>
          <p>Ensuring all aspects of your project meet the latest industry standards and regulations</p>
        </div>
        <div className="service-card-turnkey">
          <img src={timing} alt="timing" />
          <h3>Timing</h3>
          <p>Delivering projects promptly, ensuring fast and on-time completion without compromising on quality</p>
        </div>
      </section>

      <section className="introduction">
        <h2>Welcome to [Your Company Name]</h2>
        <p>At [Your Company Name], we specialize in delivering comprehensive turnkey project solutions. With a rich history of excellence and a commitment to innovation, we transform your vision into reality.</p>
        <h3>What is a Turnkey Project?</h3>
        <p>A turnkey project is a comprehensive service package where we manage every aspect of your project from concept to completion. This ensures a seamless experience and high-quality results, allowing you to focus on your core business while we handle the details.</p>
      </section>

      <section className="project-phases">
        <h2>Our Turnkey Project Process:</h2>
        <ol>
          <li><strong>Initial Consultation:</strong> We discuss your requirements and vision.</li>
          <li><strong>Planning and Design:</strong> Detailed planning and innovative design solutions.</li>
          <li><strong>Procurement and Logistics:</strong> Strategic sourcing and logistics management.</li>
          <li><strong>Construction and Installation:</strong> Expert construction with attention to detail.</li>
          <li><strong>Testing and Commissioning:</strong> Ensuring everything is up to standards before handover.</li>
        </ol>
      </section>

      <section className="portfolio">
        <h2>Our Portfolio</h2>
        <p>Explore our diverse range of completed projects that showcase our expertise and commitment to quality.</p>
        <div className="portfolio-cases">
          <div className="case-study">
            <h3>Project Name 1</h3>
            <p>Detailed description of the project, challenges faced, and solutions provided.</p>
          </div>
          <div className="case-study">
            <h3>Project Name 2</h3>
            <p>Another example with focus on unique aspects and client satisfaction.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>"Working with [Your Company Name] was a seamless experience. Their attention to detail and professionalism are unparalleled." - Client Name, Company</blockquote>
        <blockquote>"Exceptional service and outstanding results. Highly recommend!" - Client Name, Company</blockquote>
      </section>

      <section className="why-choose-us">
        <h2>Why [Your Company Name]?</h2>
        <ul>
          <li>Experience: Over [X] years of industry experience.</li>
          <li>Quality: Commitment to the highest standards of quality.</li>
          <li>Efficiency: Projects delivered on time and within budget.</li>
          <li>Expert Team: Highly skilled and experienced professionals.</li>
        </ul>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is a turnkey project?</h3>
          <p>A turnkey project is a comprehensive solution where we handle every aspect of your project from start to finish.</p>
        </div>
        <div className="faq-item">
          <h3>How long does a typical project take?</h3>
          <p>The duration depends on the project scope, but we ensure timely delivery.</p>
        </div>
      </section>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />
          <label>Message:</label>
          <textarea></textarea>
          <button type="submit">Submit</button>
        </form>
        <p><strong>Phone:</strong> [Your Phone Number]</p>
        <p><strong>Email:</strong> [Your Email Address]</p>
        <p><strong>Office Locations:</strong> [Your Office Locations]</p>
      </section>

      <section className="certifications">
        <h2>Our Certifications</h2>
        <ul>
          <li>ISO 9001: Quality Management</li>
          <li>LEED Certification: Green Building Standards</li>
          <li>Industry-specific accreditations</li>
        </ul>
        <h3>Commitment to Safety and Compliance</h3>
        <p>We adhere to the highest safety standards and regulatory requirements.</p>
      </section>

      <section className="blog">
        <h2>Industry Insights</h2>
        <div className="blog-post">
          <h3>Title 1</h3>
          <p>Brief description and link to the article.</p>
        </div>
        <div className="blog-post">
          <h3>Title 2</h3>
          <p>Another brief description and link.</p>
        </div>
      </section>

      <section className="interactive-elements">
        <h2>Interactive Elements</h2>
        <div className="project-calculator">
          <h3>Project Calculator</h3>
          <p>Use our online calculator to estimate the cost of your project.</p>
        </div>
        <div className="virtual-tours">
          <h3>Virtual Tours</h3>
          <p>Take a 360-degree tour of our completed projects and facilities.</p>
        </div>
      </section>

      <section className="sustainability">
        <h2>Sustainability and Innovation</h2>
        <p>We incorporate sustainable practices and materials to minimize environmental impact.</p>
        <p>Utilizing the latest technologies to enhance efficiency and quality.</p>
      </section>

      <section className="resources">
        <h2>Downloadable Resources</h2>
        <p>Download our detailed brochures and flyers for more information about our services.</p>
        <p>Read our in-depth whitepapers on industry trends and best practices.</p>
      </section>

      <section className="news">
        <h2>Latest News</h2>
        <div className="news-item">
          <h3>News Title 1</h3>
          <p>Brief description and link.</p>
        </div>
        <div className="news-item">
          <h3>News Title 2</h3>
          <p>Another brief description and link.</p>
        </div>
      </section>

      <section className="social-media">
        <h2>Follow Us</h2>
        <p>Stay connected with us on social media for updates and insights.</p>
        <div className="social-icons">
          <a href="/"><img src="images/facebook-icon.png" alt="Facebook" /></a>
          <a href="/"><img src="images/twitter-icon.png" alt="Twitter" /></a>
          <a href="/"><img src="images/linkedin-icon.png" alt="LinkedIn" /></a>
        </div>
      </section>
    </div>
  );
}

export default TurnkeyProjects;

import React, { useState } from 'react';
import '../styles/Testimonial.css';
import interior1 from '../assets/interior1.jpeg'

const testimonials = [
    { id: 1, name: 'John Doe', text: 'Great service!', image: interior1 },
    { id: 2, name: 'Jane Smith', text: 'Amazing experience!', image: interior1},
    { id: 3, name: 'Sam Johnson', text: 'Highly recommend!', image: interior1 },
    { id: 4, name: 'Chris Lee', text: 'Will come back for sure!', image: interior1 },
    { id: 5, name: 'Jack Ray', text: 'Good', image: interior1 },
];

const Testimonial = () => {
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);

  return (
      <div className="testimonial-container">
          <h2>What our Clients are saying...</h2>
          <div className={`testimonial-bubbles ${hoveredTestimonial ? 'blur' : ''}`}>
              {testimonials.map(testimonial => (
                  <div
                      key={testimonial.id}
                      className={`bubble ${hoveredTestimonial === testimonial.id ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredTestimonial(testimonial.id)}
                      onMouseLeave={() => setHoveredTestimonial(null)}
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                  >
                      {hoveredTestimonial === testimonial.id && (
                          <div className="testimonial-card">
                              <h3>{testimonial.name}</h3>
                              <p>{testimonial.text}</p>
                          </div>
                      )}
                  </div>
              ))}
          </div>
      </div>
  );
};

export default Testimonial;

import React from 'react';
import '../styles/Timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-svg-container">
        <svg className="timeline-svg" viewBox="0 0 50 600">
          <line x1="25" y1="0" x2="25" y2="600" stroke="rgb(54,179,126)" strokeWidth="1" />
          {events.map((event, index) => (
            <circle
              key={index}
              cx="25"
              cy={`${(index+0.2) * 40}`} // Adjust spacing as needed
              r="5"
              strokeWidth="4px"
              fill="rgb(255,86,48)"
            />
          ))}
        </svg>
      </div>
      <div className="timeline-events">
        {events.map((event, index) => (
          <div key={index} className="timeline-event" style={{ top: `${(index + 0.2) * 40}px` }}>
            <div className="timeline-horizontal-line" style={{ left: '-21px', top:'-5px' }}></div>
            <p><strong>{event.date}:</strong> {event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

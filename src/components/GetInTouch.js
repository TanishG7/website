import React from 'react';
import '../styles/GetInTouch.css';

function GetInTouch() {

  const handleScheduleMeeting = () => {
    window.location.href='/schedule-a-meeting';
  };

  return (
    <div className="get-in-touch">
      <h2 className="get-in-touch-title">Get in touch with us</h2>
      <p>We would love to hear from you</p>
      <p>Schedule a meeting with us to discuss your project needs and find out how we can help</p>
      <p>ONYX is ready to assist you with expert advice and tailored solutions</p>
      <button className="schedule-meeting-button" onClick={handleScheduleMeeting}>Schedule a Meeting</button>
    </div>
  );
}

export default GetInTouch;

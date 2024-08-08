import React, { useState } from 'react';
import '../styles/ScheduleMeeting.css';
import decor from '../assets/decor.jpeg';

const ScheduleMeeting = () => {

  const initialFormData = {
    service: '',
    meetingMethod: '',
    referralSource: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Remove invalid-input class when the user corrects the input
    if (name === 'email' || name === 'phone') {
      e.target.classList.remove('invalid-input');
    }
  };
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setAlertMessage('Phone number must be exactly 10 digits.');
      setShowAlert(true);
      return;
    }

    console.log(formData);
    setAlertMessage('Your form has been submitted.');
    setShowAlert(true);

    resetFormFields();
  };

  const resetFormFields = () => {
    setFormData(initialFormData);
  };

  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    if (/^\d{0,10}$/.test(phone)) {
      setFormData({
        ...formData,
        phone,
      });
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="schedule-meeting-container">
      <div className="form-container">
        <h1 className="schedule-meeting">Schedule a Meeting</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>What Service are you looking for?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="service"
                  value="Turnkey Services"
                  checked={formData.service === 'Turnkey Services'}
                  onChange={handleChange}
                  required
                />
                Interior Services
              </label>
              <label>
                <input
                  type="radio"
                  name="service"
                  value="Collaboration Services"
                  checked={formData.service === 'Collaboration Services'}
                  onChange={handleChange}
                  required
                />
                Collaboration Services
              </label>
              <label>
                <input
                  type="radio"
                  name="service"
                  value="Buy a Floor Built by Prithu"
                  checked={formData.service === 'Buy a Floor Built by Prithu'}
                  onChange={handleChange}
                  required
                />
                Buy a Floor Built by Onyx
              </label>
              <label>
                <input
                  type="radio"
                  name="service"
                  value="General Information"
                  checked={formData.service === 'General Information'}
                  onChange={handleChange}
                  required
                />
                General Information
              </label>
              <label>
                <input
                  type="radio"
                  name="service"
                  value="Other"
                  checked={formData.service === 'Other'}
                  onChange={handleChange}
                  required
                />
                Other
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>How would you like to meet?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="meetingMethod"
                  value="At our show home in Panchsheel Park"
                  checked={formData.meetingMethod === 'At our show home in Panchsheel Park'}
                  onChange={handleChange}
                  required
                />
                At our office in Janakpuri
              </label>
              <label>
                <input
                  type="radio"
                  name="meetingMethod"
                  value="At our office in Connaught Place"
                  checked={formData.meetingMethod === 'At our office in Connaught Place'}
                  onChange={handleChange}
                  required
                />
                Phone Call
              </label>
              <label>
                <input
                  type="radio"
                  name="meetingMethod"
                  value="Video Call"
                  checked={formData.meetingMethod === 'Video Call'}
                  onChange={handleChange}
                  required
                />
                Video Call
              </label>
              <label>
                <input
                  type="radio"
                  name="meetingMethod"
                  value="Phone Call"
                  checked={formData.meetingMethod === 'Phone Call'}
                  onChange={handleChange}
                  required
                />
                Whatsapp
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>From where did you hear about us?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="referralSource"
                  value="I got your reference from someone"
                  checked={formData.referralSource === 'I got your reference from someone'}
                  onChange={handleChange}
                  required
                />
                I got your reference from someone
              </label>
              <label>
                <input
                  type="radio"
                  name="referralSource"
                  value="I saw your ad on the Internet"
                  checked={formData.referralSource === 'I saw your ad on the Internet'}
                  onChange={handleChange}
                  required
                />
                I saw your ad on the Internet
              </label>
              <label>
                <input
                  type="radio"
                  name="referralSource"
                  value="I got your email or Whatsapp"
                  checked={formData.referralSource === 'I got your email or Whatsapp'}
                  onChange={handleChange}
                  required
                />
                I got your email or Whatsapp
              </label>
              <label>
                <input
                  type="radio"
                  name="referralSource"
                  value="Internet search"
                  checked={formData.referralSource === 'Internet search'}
                  onChange={handleChange}
                  required
                />
                Internet search
              </label>
              <label>
                <input
                  type="radio"
                  name="referralSource"
                  value="I saw your construction site"
                  checked={formData.referralSource === 'I saw your construction site'}
                  onChange={handleChange}
                  required
                />
                I saw your construction site
              </label>
              <label>
                <input
                  type="radio"
                  name="referralSource"
                  value="I have spoken to / met you earlier"
                  checked={formData.referralSource === 'I have spoken to / met you earlier'}
                  onChange={handleChange}
                  required
                />
                I have spoken to / met you earlier
              </label>
              <label>
                <input
                  type="radio"
                  name="referralSource"
                  value="Other"
                  checked={formData.referralSource === 'Other'}
                  onChange={handleChange}
                  required
                />
                Other
              </label>
            </div>
          </div>

          <div className="form-group">
            <div className="name-group">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={formData.email && !isValidEmail(formData.email) ? 'invalid-input' : ''}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              className={formData.phone && formData.phone.length !== 10 ? 'invalid-input' : ''}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="image-container">
        <img src={decor} alt="Meeting" />
      </div>

      {showAlert && (
        <div className="alert-popup show">
          <div className="alert-box">
            <button className='btn' onClick={closeAlert}>&times;</button>
            <h2>{alertMessage === 'Phone number must be exactly 10 digits.' ? 'Error' : 'Thank You!'}</h2>
            <p>{alertMessage}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default ScheduleMeeting;

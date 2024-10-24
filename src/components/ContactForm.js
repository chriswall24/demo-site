import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // Create a separate CSS file for styling

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Use your EmailJS service ID, template ID, and public key
    emailjs.sendForm('service_zemdewl', 'service_zemdewl', e.target, 'O7ZNNnObfXdNtmTzJ')
      .then((result) => {
        alert('Message Sent Successfully!');
      }, (error) => {
        alert('Failed to send the message. Try again.');
      });

    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;

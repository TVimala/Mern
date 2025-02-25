import React, { useState } from "react";
import "./Contacts.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}!`);
  };

  return (
    <div className="contact-page">
      <h1>📞 Get in Touch</h1>
      <p>We would love to hear from you!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" rows="4" onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

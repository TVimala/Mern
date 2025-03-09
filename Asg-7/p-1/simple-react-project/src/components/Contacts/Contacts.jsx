import React, { useState } from "react";
import "./Contacts.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will get back to you soon.`);
  };

  return (
    <div className="contact-page">
      <h1>Contact PVPSIT College</h1>
      <p>Have any queries? Reach out to us, and we’ll be happy to assist.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" rows="4" onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

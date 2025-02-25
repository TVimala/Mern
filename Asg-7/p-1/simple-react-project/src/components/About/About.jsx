import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>ℹ️ About Us</h1>
      <p>
        We are a team of passionate developers creating amazing web experiences.
      </p>
      <div className="about-section">
        <div className="about-card">
          <h3>👩‍💻 Who We Are</h3>
          <p>We build intuitive and user-friendly web applications.</p>
        </div>
        <div className="about-card">
          <h3>🎯 Our Mission</h3>
          <p>To make technology accessible and enjoyable for everyone.</p>
        </div>
      </div>
    </div>
  );
}

export default About;

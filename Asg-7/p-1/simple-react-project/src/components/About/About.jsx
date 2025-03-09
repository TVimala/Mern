import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About PVPSIT College</h1>
      <p>
        Established in 1995, ABC College has been a hub for academic excellence, research, and holistic development.
      </p>
      <div className="about-section">
        <div className="about-card">
          <h3>🏫 Our Institution</h3>
          <p>
            We offer world-class education with cutting-edge technology and expert faculty.
          </p>
        </div>
        <div className="about-card">
          <h3>📚 Our Mission</h3>
          <p>
            To nurture talent, foster innovation, and prepare students for global challenges.
          </p>
        </div>
        <div className="about-card">
          <h3>🎖 Achievements</h3>
          <p>
            Ranked among the top institutions for excellence in engineering, management, and research.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

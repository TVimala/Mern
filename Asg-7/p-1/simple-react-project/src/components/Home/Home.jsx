import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to PVPSIT College</h1>
      <p>Empowering students with knowledge, innovation, and excellence.</p>
      <div className="features">
        <div className="feature-card">
          <h3>🎓 Academics</h3>
          <p>Explore diverse programs and gain industry-relevant skills.</p>
        </div>
        <div className="feature-card">
          <h3>🏛 Campus Life</h3>
          <p>Engage in extracurricular activities, clubs, and sports.</p>
        </div>
        <div className="feature-card">
          <h3>🌍 Placements</h3>
          <p>Get career guidance and top opportunities from leading companies.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

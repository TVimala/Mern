import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <h1>🏡 Welcome Home!</h1>
      <p>Your go-to place for learning and exploration.</p>
      <div className="features">
        <div className="feature-card">
          <h3>📖 Learn</h3>
          <p>Explore new topics and expand your knowledge.</p>
        </div>
        <div className="feature-card">
          <h3>🌎 Connect</h3>
          <p>Meet like-minded people and grow your network.</p>
        </div>
        <div className="feature-card">
          <h3>🚀 Achieve</h3>
          <p>Set goals and track your progress with ease.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

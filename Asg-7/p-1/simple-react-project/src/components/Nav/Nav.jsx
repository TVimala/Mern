import React from "react";
import { Link } from "react-router-dom"; 
import "./Nav.css";
function Nav() {
  return (
    <nav className="navbar">
    <h2>My Website</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contact</Link>
      </div>
    </nav>
  );
}
export default Nav;

import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    
  return (
    <div className="Navbar">
        <div className="header">
          <Link to="/App">
            <div className="icon">Home</div>
          </Link>
          <Link to="/gallery">
            <div className="icon">Portfolio</div>
          </Link>
          <Link to="/travel">
            <div className="icon">Travel Photography</div>
          </Link>
          <Link to="/skills">
            <div className="icon">Skills</div>
          </Link>
          <Link to="/aboutme">
            <div className="icon">About Me</div>
          </Link>
          
        </div>
    </div>
  )
}

export default NavBar
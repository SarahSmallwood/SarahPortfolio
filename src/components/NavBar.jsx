import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    
  return (
    <div className="Navbar">
        <div className="header">
          <Link to="/App">
            <div className="icon">HOME</div>
          </Link>
          <Link to="/gallery">
            <div className="icon">PORTFOLIO</div>
          </Link>
          <Link to="/travel">
            <div className="icon">TRAVEL PHOTOGRAPHY</div>
          </Link>
          <Link to="/skills">
            <div className="icon">SKILLS</div>
          </Link>
          <Link to="/aboutme">
            <div className="icon">ABOUT ME</div>
          </Link>
          
        </div>
    </div>
  )
}

export default NavBar
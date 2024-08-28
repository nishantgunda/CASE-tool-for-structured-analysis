"use client";

import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div>
      <div 
        className="trigger-area" 
        onMouseEnter={handleMouseEnter}
      >
        {/* Empty div just to trigger the hover event */}
      </div>
      <div
        className={`navbar ${visible ? "visible" : "hidden"}`}
        onMouseLeave={handleMouseLeave}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

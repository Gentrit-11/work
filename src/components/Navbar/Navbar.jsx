import React from "react";

import "./navbar.css";
import { DiTechcrunch } from "react-icons/di";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
 
  const [isMobile, setIsMobile] = useState(false);
 
  
  return (
    
    <div className="navbar">
     
      <div className="logo-container">
        <DiTechcrunch className="icon" />
      </div>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="#Home" className="nav-link">
          <li>Home</li>
        </Link>
       
        <Link to="#services" className="nav-link" >
          <li>Services</li>
        </Link>
       
        <Link to="#About" className="nav-link">
          <li>About Us</li>
        </Link>
        <Link to="#blog" className="nav-link">
          <li>Blog</li>
        </Link>
        <Link to="#contactus" className="nav-link">
          <li>Contact us</li>
        </Link>
        
      </ul>
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <AiOutlineClose className="menu-icon-close" />
        ) : (
          <AiOutlineMenu className="menu-icon-open" />
        )}
      </div>
    </div>
  );
};

export default Navbar;

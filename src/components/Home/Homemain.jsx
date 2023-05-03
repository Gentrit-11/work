import React from "react";
import "./Homemain.css";
import { Link } from "react-router-dom";
const Homemain = () => {
  return (
    <div className="background" id="Home">
      <div className="text">
        <h1 className="text-h1">Execute your tech idea with us</h1>
        <p className="p-h">
          We are a creative IT company who loves helping clients grow. We create
          products that you can use to achieve your purposes.
        </p>
        <div className="links-h">
          <Link to="/" className="button-h">
            <span> Work with us</span>
          </Link>
          <div className="bg-h"></div>
        </div>
      </div>
    </div>
  );
};

export default Homemain;

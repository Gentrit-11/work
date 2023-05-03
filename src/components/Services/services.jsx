import React from "react";
import "./services.css";
import { Data1 } from "./data";

import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const services = () => {
  return (
    <div className="main-services" id="services">
      <div className="what-we-offer-component">
        <div className="col col1">
          <h1 className="h1-do">What we do</h1>
          <p className="p">
            We offer extraordinary solutions to transform your business and help
            you grow.
          </p>
          <div className="features">Services</div>
        </div>

        {Data1.map((props) => {
          return (
            <div className="col col2">
              <div className="inner-col">
                <div className="icon-s">{props.icon}</div>
                <h6>{props.title}</h6>
                <p>{props.text}</p>
                <div className="link">
                  <Link to={props.to}>
                    <BsArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default services;

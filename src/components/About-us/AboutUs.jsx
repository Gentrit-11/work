import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us" id="About">
      <div class="about-section">
        <h1 className="about-title">About Us </h1>
        <p className="about-content">
          We are a global team of experts that lives up to its value by setting
          the industries’ future benchmarks today..
        </p>
      </div>
      <div className="display">
        <div className="different">
          <h1 className="h1-dif">What makes us different?</h1>
          <p className="p-dif">
            We are a global IT and digital transformation champion that supports
            our customers in realizing technology’s huge potential for a smarter
            and more sustainable world. We’ve united creativity and innovation
            with the instant impact and execution power of a large IT solution
            provider. Customer experience is the new battleground and Appkonik
            is your partner to master the challenge. Our Leadership is a
            value-driven team of creatives. They work to make a difference.
          </p>
        </div>
        <div className="about-img"></div>
      </div>
    </div>
  );
};

export default AboutUs;

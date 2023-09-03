import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Homemain from "../components/Home/Homemain";
import Services from "../components/Services/services";
import AboutUs from "../components/About-us/AboutUs";
import Blog from "../components/Blog/Blog";
import Contactus from "../components/contactus/Contactus";
import Footer from  "../components/Footer/Footer";
 
const Home = () => {
  return (
    <div>
      <Navbar />
      <Homemain />

      <Services />

      <AboutUs />
      <Blog/>
      <Contactus/>
      <Footer/>
    </div>
  );
};

export default Home;



import React from 'react'
import "./Contactus.css";
import { useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';
const Contactus = () => {
  const [values, setValues] = useState({
    name:'',
    email:''
  });
  const navigate=useNavigate();

  
  const handleinput=(event)=>{
    setValues(prev => ({...prev, [event.target.name]: event.target.value }));
    console.log(event.target.value);
  }
  
    const handleSubmit=(event)=>{
      event.preventDefault();
      axios.post('http://localhost:8081/contactus',values)
      .then(res=>{
        navigate('/');
        const messageElement = document.getElementById('message');
        messageElement.innerText = 'Të dhënat janë dërguar faleminderit do ju kontaktojmë se shspejti';
      })
     .catch(err=>console.log(err));
    }
  
  


  return (
    <div class="container" id='contactus'>
      
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Prishtinë</div>
          <div class="text-two">10000</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+3834955555</div>
          <div class="text-two">+383555555</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">gentritsheremetaj3@gmail.com</div>
          <div class="text-two">info@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any question contact us.</p>
      <form action='' onSubmit={handleSubmit}>
        <div class="input-box">
          <input type="text" placeholder="Enter your name"  name="name" onChange={handleinput} />
        </div>
        <div class="input-box">
          <input type="email" placeholder="Enter your email"  name="email" onChange={handleinput} />
        </div>
        
        <div class="button">
        <button type="submit">Submit</button>
        </div>
        <p id="message"></p>
      </form>
    </div>
    </div>
  </div>
  )
}

export default Contactus


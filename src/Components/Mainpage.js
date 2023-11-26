import React from "react";
import './styles/Mainpage.css';
import Stories from "./Stories";
import Footer from "./footer";
import img1 from "./images/img1.webp"
import img2 from "./images/img2.jpeg"
import img3 from "./images/img3.webp"
import img4 from "./images/img4.webp"
import Navbar from "./Navbar";
import Chatbot from "./Chatbot";
// import { useSelector } from 'react-redux';
import { useState,useEffect } from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll"

import monkey1 from "./images/monkey1.png"
import monkey2 from "./images/monkey2.png"
function MainPage(){  
  


  return(
   
    <div className="main-body">
      <Navbar />
      <div className="main_back">
            <AnimatedOnScroll
                animationIn="bounceInRight"
            >
                <img src={monkey1} style={{float : "right"}}></img>
            </AnimatedOnScroll>
            <AnimatedOnScroll
                animationIn="bounceInLeft"
            >
                <img src={monkey2} style={{float : "left", height : '20%',width : '20%',margin: '-15px 0px 0px 0px' }}></img>
            </AnimatedOnScroll>
            <AnimatedOnScroll
              animationIn="fadeInDownBig"
            >
              <h1 className="anim">"The more that you read, the more things you will know. The more that you learn, the more places you'll go." - Dr. Seuss</h1>
            </AnimatedOnScroll>
     </div>
     <Stories />
     
       <Chatbot />

     <Footer />
    </div>
  );
}
export default MainPage
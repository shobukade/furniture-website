import React from "react";
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.jpeg'


const Hero = () => {
  return (
    <div class='hero'>
      <div class='hero-text'>
      <h1>WE BRING BEAUTY TO EVERY HOME</h1>
      <p> We offer a wide range of quality and affordable furniture for both online and in store shopping in Nigeria.Explore our selection today and transform your living spaces with sylish, comfortable, and durable furniture.</p>
      <button class ='btn'> Explore more <img src={dark_arrow} alt=''/> </button>
      </div>
      
     
    </div>
  )
}
export default Hero
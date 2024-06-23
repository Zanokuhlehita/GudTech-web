

import React, { useState } from 'react';
// import './Hero.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ImageSlider from '../../../../slider/ImageSlider';



const HeroSection = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrevClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  // };

  // const handleNextClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  // };

  return (
    <section className="hero-section">
      {/* <div className='hero'> */}
        <ImageSlider/>
      {/* </div> */}
  
    </section>
  );
};

export default HeroSection;

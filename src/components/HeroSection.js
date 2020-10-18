import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
    <video src='/videos/video_nebula.mp4' autoPlay loop muted />
      <img src='/images/logo.png'/>
    </div>
  );
}

export default HeroSection;
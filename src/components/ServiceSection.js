import React from 'react';
import '../App.css';
import './ServiceSection.css';

function ServiceSection() {
  return (
    <div className='hero-container'>
    <video src='/videos/video_meeting.mp4' autoPlay loop muted />
      <h1>Nos services</h1>
    </div>
  );
}

export default ServiceSection;
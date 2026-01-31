// src/components/GetInTouchButton.jsx
import React from 'react';
import './GetInTouchButton.css';

const GetInTouchButton = () => {
  // This function will scroll to your contact section
  const scrollToContact = () => {
    const section = document.getElementById('contact'); 
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="get-in-touch-container">
      <button className="btn-get-in-touch" onClick={scrollToContact}>
        Get In Touch
      </button>
    </div>
  );
};

export default GetInTouchButton;
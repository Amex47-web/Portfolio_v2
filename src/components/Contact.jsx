// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

// 1. Add your Medium URL here
const mediumProfileUrl = 'https://ameyab014.medium.com/'; // <-- !! Replace with your Medium URL !!

const Contact = () => {
  return (
    <section id="contact" className="contact-section page-container">

      {/* Left Column (your existing content) */}
      <div className="contact-left">
        <h3 className="contact-title">
          Available for select freelance opportunities
        </h3>
        <p className="contact-description">
          Have an exciting project you need help with?
          <br />
          Send me an email or contact me via instant message!
        </p>
        <div className="contact-links">
          <a href="mailto:ameyabalange014@gmail.com" >
            <span>E-mail</span>
          </a>
          <a href="https://x.com/Ameyabalange4" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/in/ameya-balange-0977b7296/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/__ameya___47/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://github.com/Amex47-web" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>

      {/* Right Column (the new Medium card) */}
      <div className="contact-right">
        {/* 2. This is now an <a> tag */}
        <a
          href={mediumProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="medium-card"
        >
          <p className="medium-card-pre-title">Explore more insights</p>
          <h3 className="medium-card-title">See More on Medium</h3>
          {/* 3. This is now a <p> tag */}
          <p className="medium-card-link">
            Read all articles &gt;
          </p>
        </a>
      </div>

    </section>
  );
};

export default Contact;
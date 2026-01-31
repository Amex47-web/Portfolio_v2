// src/components/Education.jsx
import React from 'react';
import './Education.css';

// You can update this data with your own education history
const educationData = [
  {
    degree: 'Bachelor of Technology in Electronics and Communication Engineering(IOT)',
    institution: 'Indian Institute of Information Technology, Nagpur',
    date: '2023 - 2027',
    description: 'Specialized in Machine Learning, Web Development, System Design, and Data Structures, with hands-on experience in the MERN stack and AI integration for intelligent, scalable applications.'
  }

];

const Education = () => {
  return (
    <section id="education" className="education-section page-container">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {educationData.map((item) => (
          <div className="education-card" key={item.degree}>
            <div className="education-header">
              <h3 className="education-degree">{item.degree}</h3>
              <span className="education-date">{item.date}</span>
            </div>
            <h4 className="education-institution">{item.institution}</h4>
            <p className="education-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
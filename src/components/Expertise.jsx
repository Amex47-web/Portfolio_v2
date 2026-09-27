// src/components/Expertise.jsx
import React from 'react';
import './Expertise.css';

// We'll define the expertise data here
const expertiseData = [
  {
    title: 'GTM Strategy & Growth',
    description: 'Experienced in identifying ideal customer profiles, developing positioning and messaging, building acquisition strategies, and executing targeted outreach to drive product growth.',
    icon: '🚀',
    highlightClass: 'highlight-green'
  },
  {
    title: 'Full Stack Dev',
    subtitle: 'React, NextJS, MongoDB',
    description: 'Hands-on experience in HTML, CSS, JavaScript, React, and Next.js frameworks. Strong knowledge of SQL, PostgreSQL, and NoSQL systems.',
    icon: '🎨',
    highlightClass: 'highlight-blue'
  },
  {
    title: 'Machine Learning',
    subtitle: 'AI, LLM',
    description: 'Skilled in developing and training regression and classification models using a variety of machine learning algorithms.',
    icon: '📱',
    highlightClass: 'highlight-yellow'
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="expertise-section page-container">
      <h2 className="section-title">My Expertise</h2>
      <div className="expertise-grid">
        {expertiseData.map((item) => (
          <div className="expertise-card" key={item.title}>
            <div className="card-icon">{item.icon}</div>
            <h5 className="card-title">
              <span className={item.highlightClass}>{item.title}</span>
              {item.subtitle && <br />}
              {item.subtitle}
            </h5>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
// src/components/Experience.jsx
import React, { useState } from 'react';
import './Experience.css';

// 1. Store the job data - NOW WITH 'linkText' AND 'url'
const experienceData = [
  {
    title: 'Lead Event Organizer @ Tantrafiesta',
    date: 'Aug-Oct 2025',
    location: 'IIIT Nagpur, India',
    linkText: 'View on LinkedIn', // Example link text
    url: 'https://www.linkedin.com/posts/ameya-balange-0977b7296_iiitnagpur-tantrafiesta2k25-finix-activity-7384507589717577729-Tv4q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeqXrMB4MsXrxqcX3FyNm53M7GUkq13KIY', // Add your LinkedIn URL
    description: "Organized and led “Finix,” a finance-focused competition as part of the college’s annual Tech Fest, attracting over 250 participants and achieving more than 50,000 online impressions. Oversaw event planning, marketing, and execution, fostering engagement and financial literacy among students.",
    tags: ['Leadership', 'Public Speaking', 'Communication']
  },

  {
    title: 'Tech and Finance Writer @ Medium',
    date: '2024 - Present',
    location: 'Remote',
    linkText: 'View Medium Profile',
    url: 'https://ameyab014.medium.com/', // Add your Medium URL
    description: 'I am a proficient writer in the domains of technology, finance, and philosophy. Through my Medium blogs, I share insights and perspectives that bridge these fields, delivering thought-provoking content and practical knowledge to an engaged audience.',
    tags: ['Tech', 'Finance', 'Blogs']
  }
];

// 2. Create a reusable Accordion Item component
const AccordionItem = ({ job, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onClick}>
        <div className="header-left">
          <span className="job-title">{job.title}</span>
        </div>
        <span className="job-date">{job.date}</span>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="content-inner">
          <div className="job-meta">
            <span>{job.location}</span> |
            {/* THIS IS THE CHANGE: Now a clickable <a> tag */}
            <a href={job.url} target="_blank" rel="noopener noreferrer" className="job-link">
              {job.linkText}
            </a>
          </div>
          <p className="job-description">{job.description}</p>
          <div className="job-tags">
            {job.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Create the main Experience component
const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0); // 0 = first item open by default

  return (
    <section id="experience" className="experience-section page-container">
      <h2 className="section-title">
        Experience
      </h2>
      <div className="accordion-container">
        {experienceData.map((job, index) => (
          <AccordionItem
            key={job.title}
            job={job}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)} // Click to open, click again to close
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
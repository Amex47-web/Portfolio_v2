// src/components/Experience.jsx
import React from 'react';
import './Experience.css';

const experienceData = [
  {
    role: 'GTM Engineer',
    company: 'Helios Solutions',
    date: 'Jul 2026 - Present',
    location: 'Vadodara, India',
    description: [
      "Researched 1,500+ companies and 2,000+ prospects across 6 European countries and 5+ industries, defining ICPs, personas, pain points, and positioning for AI-agent solutions.",
      "Executed 2,500+ LinkedIn/email outreaches, generating 100+ positive responses, 40+ meetings, and 20+ qualified opportunities.",
      "Built 15+ AI/n8n GTM workflows, automating research, enrichment, CRM, content, and sales processes while saving 200+ hours."
    ],
    logo: '/helios.png',
    icon: 'T',
  },
  {
    role: 'Tech and Finance Writer',
    company: 'Medium',
    date: 'Nov 2025 - Present',
    location: 'Remote',
    linkText: 'View Medium Profile',
    url: 'https://ameyab014.medium.com/',
    description: [
      "Author articles in the domains of technology, finance, and philosophy.",
      "Share insights and perspectives that bridge these fields, delivering thought-provoking content and practical knowledge.",
      "Engage an audience with regular high-quality blog posts."
    ],
    logo: '/medium.png',
    icon: 'M',
  }
];

const TimelineItem = ({ job, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
      <div className="timeline-content">
        <h3 className="role-title">{job.role}</h3>
        <p className="company-name">{job.company}</p>
        <ul className="job-description-list">
          {job.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="job-meta-links">
          <a href={job.url} target="_blank" rel="noopener noreferrer" className="job-link">
            {job.linkText}
          </a>
        </div>
      </div>
      <div className="timeline-icon" style={{ overflow: 'hidden' }}>
        {job.logo ? (
          <img src={job.logo} alt={`${job.company} logo`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          job.icon
        )}
      </div>
      <div className="timeline-date">
        {job.date}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section page-container">
      <h2 className="timeline-section-title">
        Work Experience
      </h2>
      <div className="timeline-container">
        {experienceData.map((job, index) => (
          <TimelineItem
            key={index}
            job={job}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
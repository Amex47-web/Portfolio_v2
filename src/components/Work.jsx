// src/components/Work.jsx
import React, { useState } from 'react';
import './Work.css';

// 1. ADD 'projectUrl' and 'linkText' TO YOUR DATA
const allProjects = [

  {
    title: 'Construction_ppe_detection',
    category: 'Machine Learning',
    imageUrl: '/const.jpeg',
    projectUrl: 'https://github.com/Amex47-web/construction_ppe_detection', // <-- IMPORTANT: Add your deployment link here
    linkText: 'View on Github'
  },
  {
    title: 'Smart Stock Management System',
    category: 'Web Development',
    imageUrl: '/dash.png',
    projectUrl: 'https://github.com/Amex47-web/inventory-system', // <-- IMPORTANT: Add your deployment link here
    linkText: 'View on Github'
  },
  {
    title: 'DocuSphere - AI Powered Smart Document Analysis & Routing System',
    category: 'Machine Learning',
    imageUrl: '/docusphere.png',
    projectUrl: 'https://kochi-metro-document.vercel.app/', // <-- IMPORTANT: Add your GitHub/deployment link here
    linkText: 'View Project'
  },

  {
    title: 'Sanskrit Image Text Segmentation',
    category: 'Machine Learning',
    imageUrl: '/sans.png',
    projectUrl: 'https://github.com/Amex47-web/Sanskrit_Image_Segmentation_CNN', // <-- IMPORTANT: Add your GitHub/deployment link here
    linkText: 'View on Github'
  },
  {
    title: 'Can Blockchain Technology Be Used in Elections? A Comprehensive Analysis of Security, Feasibility, and Global Experiments',
    category: 'Medium Blogs',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*z-FhrI1GamXd6BflG4FCpw.png',
    projectUrl: 'https://ameyab014.medium.com/can-blockchain-technology-be-used-in-elections-5a590d85cb4e', // <-- IMPORTANT: Add your article link here
    linkText: 'Read Article'
  },

  {
    title: 'Warren Buffett’s Final Annual Letter (2025): The Last Word on Wealth, Wisdom, and Legacy',
    category: 'Medium Blogs',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*f3aovBx62GnMM-SbcQsDpQ.avif',
    projectUrl: 'https://ameyab014.medium.com/warren-buffetts-final-annual-letter-2025-the-last-word-on-wealth-wisdom-and-legacy-1865f1221f4b', // <-- IMPORTANT: Add your article link here
    linkText: 'Read Article'
  },

  {
    title: 'The Historic 2025–2026 Precious Metals Supercycle: Why Gold, Silver, and Other Metals Are Reaching Never-Before-Seen Price Levels',
    category: 'Medium Blogs',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6vGrD9VYHMr2Vd48Fl2leA.jpeg',
    projectUrl: 'https://ameyab014.medium.com/the-historic-2025-2026-precious-metals-supercycle-why-gold-silver-and-other-metals-are-reaching-3e5cfaebc3ed', // <-- IMPORTANT: Add your article link here
    linkText: 'Read Article'
  },

  {
    title: 'How Hedge Funds Work: Inside the Engines of Modern Finance',
    category: 'Medium Blogs',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*L465FOCvkuLioSscxHOikg.jpeg',
    projectUrl: 'https://ameyab014.medium.com/how-hedge-funds-work-inside-the-engines-of-modern-finance-bb0c865dc990', // <-- IMPORTANT: Add your article link here
    linkText: 'Read Article'
  },
  {
    title: 'Notion Product-Led Growth: Case Study',
    category: 'Case Study',
    imageUrl: '/notion.png',
    projectUrl: 'https://drive.google.com/drive/folders/1nIF0keWymSVNblyed0-pHhCeuw0Ehqis?usp=drive_link', // <-- IMPORTANT: Add your article link here
    linkText: 'Read Case Study'
  },

];

// Helper to get all unique categories
const categories = ['All', ...new Set(allProjects.map(p => p.category))];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="work-section page-container">
      <div className="work-header">
        <div className="work-header-left">
          <h2 className="section-title">
            My
            Work
          </h2>
          <p className="work-description">
            Developed and deployed scalable full-stack, data-driven web applications using React (SPA & PWA) integrated with machine learning components.
            <br />
            Additionally, I write on Medium about technology, finance, and philosophy, sharing insights that connect innovation, strategy, and thought.
          </p>
        </div>
        <div className="work-header-right">
          {/* This space is now empty, which is fine */}
        </div>
      </div>

      <div className="portfolio-filter-bar">
        <ul>
          <li>Filter by</li>
          {categories.map(category => (
            <li key={category}>
              <button
                className={activeFilter === category ? 'active' : ''}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-category">{project.category}</span>

              {/* 2. UPDATE THE <a> TAG TO USE THE NEW DATA */}
              <a
                href={project.projectUrl} // Use the projectUrl
                className="show-project-link"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practice
              >
                {project.linkText} {/* Use the custom linkText */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
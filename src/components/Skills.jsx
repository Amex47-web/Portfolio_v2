// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

// 1. All the skills from your image
const skillsData = [
  'Go-to-Market Strategy', 'Market Research', 'Content Marketing', 'Lead Generation', 'A/B Testing', 'Multi-channel Outreach', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'React.js', 'Next.js 15', 'TailwindCSS',
  'Node.js', 'Express.js', 'REST APIs', 'ML', 'DL',
  'NLP', 'RAG', 'LangChain', 'LLMs', 'AI Agent Workflows'
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section page-container">
      <div className="skills-bg-animation"></div>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div key={skill} className="skill-tag">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
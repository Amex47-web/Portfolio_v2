// src/components/Achievements.jsx
import React from 'react';
import './Achievements.css';

// 1. Inline SVG for LeetCode (This one was fine)
const LeetCodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M13.483 0H10.32L6.858 24H10.02L13.483 0zM21.571 14.229H24v2.463h-2.429L18.665 24h-3.414l2.906-8.308h-4.329l-.919 2.463h-2.429l1.458-3.876h-4.329L7.494 24H4.08L0 14.229h2.429l2.906 8.308h3.414l.919-2.463h4.329l-.919 2.463h3.414L21.571 14.229zM0 9.771h2.429l2.906-8.308h3.414l-.919 2.463h4.329l-.919 2.463h3.414L21.571 9.771H24L19.92 0h-3.414l-2.906 8.308h-4.329l.919-2.463h-3.414L0 9.771z" />
  </svg>
);

// 2. --- THIS IS THE FIXED CODE for CodeChef ---
const CodeChefIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1em" height="1em">
    <path d="M11.968 18.064s.224.016.336.016c.112 0 .304-.016.304-.016s-.08-.016-.304-.016c-.224 0-.336.016-.336.016zm-.336 2.016s.224.016.336.016c.112 0 .304-.016.304-.016s-.08-.016-.304-.016c-.224 0-.336.016-.336.016zm.336 2.016s.224.016.336.016c.112 0 .304-.016.304-.016s-.08-.016-.304-.016c-.224 0-.336.016-.336.016zM12 0C5.376 0 0 5.376 0 12c0 6.624 5.376 12 12 12 6.624 0 12-5.376 12-12C24 5.376 18.624 0 12 0zM7.2 9.696c0-.528.224-.976.576-1.312.368-.336.848-.512 1.44-.512.24 0 .48.032.72.08.24.064.448.128.624.208v2.016c-.208-.128-.416-.24-.624-.32a1.21 1.21 0 0 0-.72-.112c-.288 0-.496.08-.624.24-.128.16-.208.384-.208.688v4.608c0 .304.08.528.208.688.128.16.336.24.624.24.24 0 .48-.048.72-.112.208-.08.416-.192.624-.32v2.016c-.176.08-.384.144-.624.208a2.126 2.126 0 0 1-.72.08c-.592 0-1.072-.176-1.44-.512a2.03 2.03 0 0 1-.576-1.312V9.696zm9.6 0c0-.528.224-.976.576-1.312.368-.336.848-.512 1.44-.512.24 0 .48.032.72.08.24.064.448.128.624.208v2.016c-.208-.128-.416-.24-.624-.32a1.21 1.21 0 0 0-.72-.112c-.288 0-.496.08-.624.24-.128.16-.208.384-.208.688v4.608c0 .304.08.528.208.688.128.16.336.24.624.24.24 0 .48-.048.72-.112.208-.08.416-.192.624-.32v2.016c-.176.08-.384.144-.624.208a2.126 2.126 0 0 1-.72.08c-.592 0-1.072-.176-1.44-.512a2.03 2.03 0 0 1-.576-1.312V9.696z" />
  </svg>
);
// --- END OF FIX ---

// 3. Inline SVG for a simple trophy
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.999-5h2.999v2H10c-1.103 0-2-.897-2-2v-1c0-1.103.897-2 2-2h4c1.103 0 2 .897 2 2v1c0 1.103-.897 2-2 2h-2.001v-2h3V12c0-.551-.449-1-1-1h-4c-.551 0-1 .449-1 1v3z" />
  </svg>
);

// 4. Inline SVG for Google
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M21.35,11.1H12.18V13.83H18.69c-0.32,2.05-1.8,3.57-3.97,3.57c-2.38,0-4.32-1.94-4.32-4.32s1.94-4.32,4.32-4.32c1.09,0,2.1,0.41,2.89,1.13l2.16-2.16C16.2,6.1,14.29,5.2,12.18,5.2C8.28,5.2,5.2,8.28,5.2,12.18s3.08,6.98,6.98,6.98c3.83,0,6.8-2.67,6.8-6.8C18.98,12.01,18.79,11.53,18.57,11.1H21.35V11.1z M21.35,11.1" />
  </svg>
);

// 5. Inline SVG for Medium
const MediumIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M7.45 18.02A9.23 9.23 0 0 1 0 12.27c0-5.1 4.1-9.25 9.17-9.25 5.09 0 9.17 4.15 9.17 9.25 0 5.1-4.08 9.25-9.17 9.25a9.3 9.3 0 0 1-1.72-.23v.02zM15.3 12.27c0 2.2-1.63 3.98-3.63 3.98s-3.63-1.78-3.63-3.98c0-2.2 1.63-3.98 3.63-3.98s3.63 1.78 3.63 3.98zm4.62 0c0 2.1-1.3 3.8-2.9 3.8s-2.9-1.7-2.9-3.8c0-2.1 1.3-3.8 2.9-3.8s2.9 1.7 2.9 3.8zm4.33 0c0 2.02-1.04 3.65-2.33 3.65s-2.33-1.63-2.33-3.65c0-2.02 1.04-3.65 2.33-3.65s2.33 1.63 2.33 3.65z" />
  </svg>
);


// 6. Update the data to use the icon components
const achievementsData = [
  {
    icon: <LeetCodeIcon />,
    text: 'LeetCode - 1602 Rating (Top 22%)',
    url: 'https://leetcode.com/u/ameyabalange/' // Add your LeetCode URL
  },
  {
    icon: <CodeChefIcon />,
    text: 'CodeChef - 3-Star (max rating- 1758)',
    url: 'https://www.codechef.com/users/ameyabalange' // Add your CodeChef URL
  },
  {
    icon: <TrophyIcon />,
    text: 'ML Hackathon - 2nd Position',
    url: 'https://www.linkedin.com/posts/ameya-balange-0977b7296_machinelearning-bioinformatics-hackathon-activity-7384575787347169280-S9G2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeqXrMB4MsXrxqcX3FyNm53M7GUkq13KIY' // Add a link to the hackathon or project
  },
  {
    icon: <GoogleIcon />,
    text: 'Google AI Essentials Certificate',
    url: 'https://www.coursera.org/account/accomplishments/verify/0EOQ99CP4DOM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course' // Add a link to your certificate
  },
  {
    icon: <MediumIcon />,
    text: 'Tech/Finance Writer with 20K+ monthly readers',
    url: 'https://ameyab014.medium.com/' // Add your Medium URL
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section page-container">
      <h2 className="achievements-title">Achievements & Certifications</h2>
      <p className="achievements-subtitle">
        Various Certifications and Achievements
      </p>
      <div className="achievements-grid">
        {achievementsData.map((item) => (
          <a
            key={item.text}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-tag"
          >
            <span className="achievement-icon">{item.icon}</span>
            {item.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
// src/components/Featured.jsx
import React from 'react';
import './Featured.css'; // This CSS file will also be updated

// 1. Add your profile links here
const profileLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Amex47-web',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ameya-balange-0977b7296/',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/ameyabalange/',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/ameyabalange',
  }
  // Add more profiles as needed
];

const Featured = () => {
  return (
    // 2. We're removing the title and the scroll container
    <section className="featured-section page-container">
      {/* 3. This is our new, simple list */}
      <ul className="profile-links-list">
        {profileLinks.map((profile) => (
          <li key={profile.name}>
            <a href={profile.url} target="_blank" rel="noopener noreferrer">
              {profile.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Featured;
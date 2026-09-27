// src/App.jsx
import React from 'react';
import Header from './components/Header';
 import Hero from './components/Hero'; 
import Featured from './components/Featured';

import Expertise from './components/Expertise';
import Skills from './components/Skills'; // 1. Import the new Skills component
import Work from './components/Work';
import Education from './components/Education'; // 1. Import the new component
import Experience from './components/Experience';
import Achievements from './components/Achievements'; // 1. Import the new component
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Hero /> 

      <Featured/>
      <Experience />
      <Expertise />
      <Skills /> {/* 2. Add the new component here */}
      <Work />
      <Achievements /> {/* 2. Add the new component here */}
      <Education /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
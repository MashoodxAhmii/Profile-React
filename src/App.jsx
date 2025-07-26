import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';


const App = () => {
  return (
<div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-green-600 text-white font-inter">
      <Header />
      <About />
      <Skills />
      <Footer />
      <MusicToggle />
    </div>
    
  );
};

export default App;

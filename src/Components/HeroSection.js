/* Rashin Gholijani Farahani */


import React from 'react';

const HeroSection = () => {
  const userName = localStorage.getItem('userName') || 'User';

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-800"></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-4">
          Welcome {userName}!
        </h1>
        <p className="text-lg md:text-2xl drop-shadow-md mb-8">
          Experience the best authentication platform :) 
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-50 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

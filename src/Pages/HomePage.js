/* Rashin Gholijani Farahani */


import { useState, useEffect } from 'react';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';

const HomePage = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
       document.documentElement.classList.add('dark');
    } else {
       document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <HeroSection />
    </div>
  );
};

export default HomePage;

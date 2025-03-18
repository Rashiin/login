/* Rashin Gholijani Farahani */


import { useEffect, useState } from 'react';
import { getUserInfo } from '../utils/api';

const Navbar = ({ toggleTheme, theme }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authId = localStorage.getItem('authId');
    if (authId) {
      getUserInfo(authId)
        .then(setUser)
        .catch(error => console.error("API Error:", error));
    }
  }, []);

  return (
    <nav className="p-4 bg-gradient-to-r from-pink-600 to-indigo-700 text-white shadow-lg flex justify-between items-center">
      <h1 className="text-2xl font-bold">My App</h1>
      <div className="flex items-center gap-4">
    
        {user ? (
          <span className="px-4 py-2 bg-white text-blue-600 rounded-full shadow">
            {user.firstName} {user.lastName}
          </span>
        ) : (
          <a 
            href="/login"
            className="px-4 py-2 bg-white text-blue-600 rounded-full shadow hover:bg-blue-50 transition"
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

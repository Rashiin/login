/* Rashin Gholijani Farahani */


import { useEffect } from 'react';

const Toast = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow-lg">
      {message}
    </div>
  );
};

export default Toast;

// src/components/PromptNotification.js
import React, { useEffect, useState } from 'react';

function PromptNotification({ message }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation
    setVisible(true);
  }, []);

  return (
    <div
      className={`bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-3 rounded-md shadow-sm transition-all duration-500 ease-in-out transform ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
      }`}
      role="alert"
    >
      <p className="text-sm">{message}</p>
    </div>
  );
}

export default PromptNotification;
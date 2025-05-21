// src/components/ThankYouScreen.js
import React from 'react';

function ThankYouScreen() {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md text-center">
      <svg className="mx-auto h-16 w-16 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Thank You!</h1>
      <p className="text-gray-700 mb-6">
        Your participation and insights are greatly appreciated.
        The data you provided will be valuable for our research on the future of education.
      </p>
      <p className="text-sm text-gray-500">You may now close this window.</p>
    </div>
  );
}

export default ThankYouScreen;
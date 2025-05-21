// src/components/ConsentScreen.js
import React from 'react';

function ConsentScreen({ onAgree }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Research Participation Consent</h1>
      <p className="text-gray-700 mb-4">
        Welcome! We are conducting research on future speculative scenarios in education.
        Your participation involves answering a few check-in questions, writing a short story,
        and providing feedback on this tool.
      </p>
      <p className="text-gray-700 mb-4">
        All data collected will be anonymized and used solely for research purposes.
        You can withdraw at any time.
      </p>
      <p className="text-gray-700 mb-6">
        By clicking "Agree and Continue", you consent to participate in this research.
      </p>
      <button
        onClick={onAgree}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Agree and Continue
      </button>
    </div>
  );
}

export default ConsentScreen;
// src/components/CheckInScreen.js
import React, { useState } from 'react';

function CheckInScreen({ onSubmit }) {
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question1 || !question2) {
      alert("Please answer all questions.");
      return;
    }
    onSubmit({ question1, question2 });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">Check-In Questions</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="q1" className="block text-sm font-medium text-gray-700 mb-1">
            How are you feeling today? (e.g., excited, curious, tired)
          </label>
          <input
            type="text"
            id="q1"
            value={question1}
            onChange={(e) => setQuestion1(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="q2" className="block text-sm font-medium text-gray-700 mb-1">
            What are your initial thoughts about the future of education? (1-2 words)
          </label>
          <input
            type="text"
            id="q2"
            value={question2}
            onChange={(e) => setQuestion2(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Proceed to Story Writing
        </button>
      </form>
    </div>
  );
}

export default CheckInScreen;
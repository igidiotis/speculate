// src/components/FeedbackModal.js
import React, { useState } from 'react';

function FeedbackModal({ onSubmit, onClose }) {
  const [toolFeedback, setToolFeedback] = useState('');
  const [researchQuestion1, setResearchQuestion1] = useState('');
  const [researchQuestion2, setResearchQuestion2] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!toolFeedback || !researchQuestion1 || !researchQuestion2) {
      alert("Please fill out all feedback fields.");
      return;
    }
    onSubmit({
      toolFeedback,
      researchQuestion1,
      researchQuestion2,
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg transform transition-all">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Feedback & Research Questions</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="toolFeedback" className="block text-sm font-medium text-gray-700 mb-1">
              How was your experience using this tool? (e.g., helpful, confusing, any suggestions)
            </label>
            <textarea
              id="toolFeedback"
              value={toolFeedback}
              onChange={(e) => setToolFeedback(e.target.value)}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="researchQ1" className="block text-sm font-medium text-gray-700 mb-1">
              After writing your story, what is one key challenge you foresee in the future of education?
            </label>
            <input
              type="text"
              id="researchQ1"
              value={researchQuestion1}
              onChange={(e) => setResearchQuestion1(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
           <div>
            <label htmlFor="researchQ2" className="block text-sm font-medium text-gray-700 mb-1">
              What is one exciting opportunity you envision for education's future?
            </label>
            <input
              type="text"
              id="researchQ2"
              value={researchQuestion2}
              onChange={(e) => setResearchQuestion2(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit All Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackModal;
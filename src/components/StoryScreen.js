// src/components/StoryScreen.js
import React, { useState, useEffect } from 'react';
import PromptNotification from './PromptNotification';

const prompts = [
  "Consider the role of AI teachers...",
  "How might learning spaces change?",
  "What skills will be most valued?",
  "Think about personalized learning paths...",
  "What about equitable access to education?",
  "How will technology impact student collaboration?",
  "Imagine a day in the life of a student in 2050.",
  "What ethical considerations arise with new educational tech?",
];

function StoryScreen({ onSubmit }) {
  const [story, setStory] = useState('');
  const [activePrompts, setActivePrompts] = useState([]);
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (promptIndex < prompts.length) {
        setActivePrompts(prev => [...prev, { id: Date.now(), text: prompts[promptIndex] }]);
        setPromptIndex(prev => prev + 1);
      }
    }, 15000); // Show a new prompt every 15 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [promptIndex]);

  // Remove prompt after a delay
  useEffect(() => {
    if (activePrompts.length > 0) {
      const timer = setTimeout(() => {
        setActivePrompts(prev => prev.slice(1)); // Remove the oldest prompt
      }, 7000); // Keep prompt on screen for 7 seconds
      return () => clearTimeout(timer);
    }
  }, [activePrompts]);


  const handleSubmit = () => {
    if (story.trim() === '') {
      alert("Please write your story before submitting.");
      return;
    }
    onSubmit(story);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-3xl flex flex-col md:flex-row relative">
      {/* Story Writing Area */}
      <div className="flex-grow md:pr-6 mb-6 md:mb-0">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Write Your Future Education Scenario</h2>
        <p className="text-sm text-gray-600 mb-4">
          Imagine it's the year 2050. Describe a scenario related to education.
          What does learning look like? What are the challenges and opportunities?
          Let your imagination guide you.
        </p>
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="Start writing your speculative scenario here..."
          className="w-full h-64 md:h-96 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
        />
        <button
          onClick={handleSubmit}
          className="mt-6 w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Submit Story
        </button>
      </div>

      {/* Prompts Area (Right Side) */}
      <div className="w-full md:w-1/3 md:pl-6 md:border-l border-gray-200 h-auto md:max-h-[500px] overflow-y-auto relative">
        <h3 className="text-lg font-medium mb-3 text-gray-700 sticky top-0 bg-white py-2">Helpful Prompts</h3>
        <div className="space-y-3">
          {activePrompts.map((prompt) => (
            <PromptNotification key={prompt.id} message={prompt.text} />
          ))}
          {activePrompts.length === 0 && promptIndex === 0 && (
            <p className="text-sm text-gray-500">Prompts will appear here as you write...</p>
          )}
           {promptIndex >= prompts.length && activePrompts.length === 0 && (
            <p className="text-sm text-gray-500">No more new prompts.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default StoryScreen;
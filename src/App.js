// src/App.js
import React, { useState } from 'react';
import ConsentScreen from './components/ConsentScreen';
import CheckInScreen from './components/CheckInScreen';
import StoryScreen from './components/StoryScreen';
import FeedbackModal from './components/FeedbackModal';
import ThankYouScreen from './components/ThankYouScreen';
import { db } from './firebase/config'; // Firebase instance
import { collection, addDoc } from "firebase/firestore";

function App() {
  const [currentScreen, setCurrentScreen] = useState('consent'); // consent, checkin, story, feedback, thankyou
  const [userId, setUserId] = useState(null); // To associate data with a user session
  const [storyData, setStoryData] = useState('');

  // --- Data Submission Functions ---
  const handleConsent = async () => {
    const newUserId = `user_${Date.now()}`; // Simple unique ID
    setUserId(newUserId);
    try {
      await addDoc(collection(db, "users"), {
        userId: newUserId,
        consentGiven: true,
        timestamp: new Date()
      });
      setCurrentScreen('checkin');
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Could not save consent. Please try again.");
    }
  };

  const handleCheckInSubmit = async (checkInData) => {
    if (!userId) return;
    try {
      await addDoc(collection(db, `users/${userId}/checkIns`), {
        ...checkInData,
        timestamp: new Date()
      });
      setCurrentScreen('story');
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Could not save check-in data. Please try again.");
    }
  };

  const handleStorySubmit = async (storyText) => {
    if (!userId) return;
    setStoryData(storyText); // Save story text for feedback context if needed
    try {
      await addDoc(collection(db, `users/${userId}/stories`), {
        story: storyText,
        timestamp: new Date()
      });
      setCurrentScreen('feedback');
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Could not save story. Please try again.");
    }
  };

  const handleFeedbackSubmit = async (feedbackData) => {
    if (!userId) return;
    try {
      await addDoc(collection(db, `users/${userId}/feedback`), {
        ...feedbackData,
        storySubmitted: storyData, // Optionally include the story text with feedback
        timestamp: new Date()
      });
      setCurrentScreen('thankyou');
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Could not save feedback. Please try again.");
    }
  };

  // --- Render Logic ---
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {currentScreen === 'consent' && <ConsentScreen onAgree={handleConsent} />}
      {currentScreen === 'checkin' && <CheckInScreen onSubmit={handleCheckInSubmit} />}
      {currentScreen === 'story' && <StoryScreen onSubmit={handleStorySubmit} />}
      {currentScreen === 'feedback' && <FeedbackModal onSubmit={handleFeedbackSubmit} onClose={() => setCurrentScreen('thankyou')} />}
      {currentScreen === 'thankyou' && <ThankYouScreen />}
    </div>
  );
}

export default App;
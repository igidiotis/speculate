// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxROGMAGcC8fPq656sgMpE8FYvDgKp7Nk",
  authDomain: "write-stories-c72f9.firebaseapp.com",
  projectId: "write-stories-c72f9",
  storageBucket: "write-stories-c72f9.firebasestorage.app",
  messagingSenderId: "175374872570",
  appId: "1:175374872570:web:42e780a1ce1f73e2047e43",
  measurementId: "G-QP2FKQEWM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
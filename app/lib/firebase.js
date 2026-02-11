// Import core Firebase
import { initializeApp } from "firebase/app";

// Import Firebase services you want
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB821_l6X2yXwBBIik7nUv5DOXf7h6iLlQ",
  authDomain: "contentgeniai.firebaseapp.com",
  projectId: "contentgeniai",
  storageBucket: "contentgeniai.firebasestorage.app",
  messagingSenderId: "179844259498",
  appId: "1:179844259498:web:89c110a4e7023cf7abfad3",
};

// Initialize Firebase app (connects frontend to Firebase)
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
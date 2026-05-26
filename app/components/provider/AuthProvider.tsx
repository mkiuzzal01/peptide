// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHb8BF6aU4pRrDZ6VjgvSDcpYcFuaiJCM",
  authDomain: "peptide-892d5.firebaseapp.com",
  projectId: "peptide-892d5",
  storageBucket: "peptide-892d5.firebasestorage.app",
  messagingSenderId: "864817595029",
  appId: "1:864817595029:web:4c4795eada74efb58c919c",
  measurementId: "G-3MWNL31VCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

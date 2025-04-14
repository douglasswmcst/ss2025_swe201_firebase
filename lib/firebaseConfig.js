// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5zrCaQv7bWAEqAmvKHSQpziR8L4AlftU",
  authDomain: "uber-bt.firebaseapp.com",
  projectId: "uber-bt",
  storageBucket: "uber-bt.firebasestorage.app",
  messagingSenderId: "167980449468",
  appId: "1:167980449468:web:d1a5addde223cda0549ab9",
  measurementId: "G-HHMHG1PP1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
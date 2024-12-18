// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKFdZQJil-Cw4QexGqGG2QLYFwUtqUpkg",
  authDomain: "firechat-69450.firebaseapp.com",
  projectId: "firechat-69450",
  storageBucket: "firechat-69450.firebasestorage.app",
  messagingSenderId: "777126865854",
  appId: "1:777126865854:web:d763c070cac2a359b727ef",
  measurementId: "G-53CS63PLVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
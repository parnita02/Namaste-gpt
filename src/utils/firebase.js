// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5LlUST6WSqsEbt_xhSCwm3w8HWT8_DyE",
  authDomain: "netflixgpt-16fef.firebaseapp.com",
  projectId: "netflixgpt-16fef",
  storageBucket: "netflixgpt-16fef.appspot.com",
  messagingSenderId: "894787801618",
  appId: "1:894787801618:web:82029dde74da3b74e3becb",
  measurementId: "G-ZH14PN2X4Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

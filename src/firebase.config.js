// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgiyGfAHV0dfU7eh78z-YofNKn5SHKN40",
  authDomain: "house-marketplace-app-636d0.firebaseapp.com",
  projectId: "house-marketplace-app-636d0",
  storageBucket: "house-marketplace-app-636d0.appspot.com",
  messagingSenderId: "804587942026",
  appId: "1:804587942026:web:9d7c110a2a701e2836fd73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

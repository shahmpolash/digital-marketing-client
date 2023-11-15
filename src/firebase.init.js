// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBstJwgZIbUYsdeoscw6jaP6xNmEjxpP_o",
  authDomain: "seowebsite-e7245.firebaseapp.com",
  projectId: "seowebsite-e7245",
  storageBucket: "seowebsite-e7245.appspot.com",
  messagingSenderId: "958381007635",
  appId: "1:958381007635:web:69a92290a401cc1a40f0e6",
  measurementId: "G-VRGVKXHYMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


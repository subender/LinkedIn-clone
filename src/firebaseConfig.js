// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-NooJZQGgtcvoA8NIJNX6k_mH3FMK3Sg",
  authDomain: "linkedin-clone-29b01.firebaseapp.com",
  projectId: "linkedin-clone-29b01",
  storageBucket: "linkedin-clone-29b01.appspot.com",
  messagingSenderId: "422176089317",
  appId: "1:422176089317:web:f300ed4b96dc0f0b75e00c",
  measurementId: "G-W9M3B4TBJK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, app };

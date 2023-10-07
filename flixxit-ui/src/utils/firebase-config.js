//firebase-config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCPxjj2hT0VHbe0Jb2w_tZS8YNFEN9Z_k",
  authDomain: "react-flixxit-ott.firebaseapp.com",
  projectId: "react-flixxit-ott",
  storageBucket: "react-flixxit-ott.appspot.com",
  messagingSenderId: "504519095412",
  appId: "1:504519095412:web:7580fbc0ddb68012314d21",
  measurementId: "G-XCJMBXCRCG",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

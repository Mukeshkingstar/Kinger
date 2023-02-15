// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {useNavigate} from "react-router-dom"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWQMRrqtWrnBpCK082PksAp_1jHAj0JRk",
  authDomain: "kinger-0.firebaseapp.com",
  projectId: "kinger-0",
  storageBucket: "kinger-0.appspot.com",
  messagingSenderId: "460556548889",
  appId: "1:460556548889:web:3e0a9634ab200eff87e388",
  measurementId: "G-44S2HCX80X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

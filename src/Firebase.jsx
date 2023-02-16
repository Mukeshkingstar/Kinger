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
  apiKey: "AIzaSyA754abqMCOfkr2zAMYjxKWnmxJYUQImO0",
  authDomain: "kinger-1.firebaseapp.com",
  projectId: "kinger-1",
  storageBucket: "kinger-1.appspot.com",
  messagingSenderId: "44952366190",
  appId: "1:44952366190:web:7111f3a5ec7d12b9a34a7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

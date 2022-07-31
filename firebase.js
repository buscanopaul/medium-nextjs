// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQfYLs174bRngPshon5asDV9puZnMMbmo",
  authDomain: "medium-clone-replit-14b71.firebaseapp.com",
  projectId: "medium-clone-replit-14b71",
  storageBucket: "medium-clone-replit-14b71.appspot.com",
  messagingSenderId: "417781120346",
  appId: "1:417781120346:web:4fcae786bd99a8dd86c763",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

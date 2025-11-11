// Import the functions you need from the SDKs you need
import {initializeApp, getApp, getApps} from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv47pxhgVYTD3h2HQ8BfgPDgiCUWxu-Fk",
  authDomain: "interviewprep-d62e6.firebaseapp.com",
  projectId: "interviewprep-d62e6",
  storageBucket: "interviewprep-d62e6.firebasestorage.app",
  messagingSenderId: "729883960675",
  appId: "1:729883960675:web:cc3dec78718b864e289f56",
  measurementId: "G-VM2D7FC1VG"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)

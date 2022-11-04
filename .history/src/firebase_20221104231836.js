// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore } from @firebase/firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEMa7ICiDLHiqnuFEO0n2K19-upcxwtFU",
  authDomain: "fir-testing-revision.firebaseapp.com",
  projectId: "fir-testing-revision",
  storageBucket: "fir-testing-revision.appspot.com",
  messagingSenderId: "21558962433",
  appId: "1:21558962433:web:387bca3e4e01a448a1d300",
  measurementId: "G-XY0GXM50SE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
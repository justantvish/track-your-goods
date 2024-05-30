// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmfW6JQVewnr-0TqUuspObxRLbWoimHsE",
  authDomain: "couplendar.firebaseapp.com",
  projectId: "couplendar",
  storageBucket: "couplendar.appspot.com",
  messagingSenderId: "190149647463",
  appId: "1:190149647463:web:d9b50a45a0b7afb21748c2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export {db, auth};
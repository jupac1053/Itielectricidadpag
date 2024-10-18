// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-QOiNqn1UUEmAU5xdp5Ezdjc68iLsFQU",
  authDomain: "iti-electricidad-ae0b5.firebaseapp.com",
  databaseURL: "https:/iti-electricidad-ae0b5-default-rtdb.firebaseio.com",
  projectId: "iti-electricidad-ae0b5",
  storageBucket: "iti-electricidad-ae0b5.appspot.com",
  messagingSenderId: "248405714893",
  appId: "1:248405714893:web:98609ab75ce3feb8a70684",
  measurementId: "G-TBLGPR5066"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
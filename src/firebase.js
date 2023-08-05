// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQrZtNkZgQdcwyQP4wj1llpoPSErPuqYo",
  authDomain: "netflex-clone-4e509.firebaseapp.com",
  projectId: "netflex-clone-4e509",
  storageBucket: "netflex-clone-4e509.appspot.com",
  messagingSenderId: "403265087935",
  appId: "1:403265087935:web:1f5d80b38c00e04783990a",
  measurementId: "G-0PVWZH7CHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
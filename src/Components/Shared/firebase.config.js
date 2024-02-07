// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEPb8BNFFHIZS4eAKRmKHhWJkUgiIf-NA",
  authDomain: "andalibbags.firebaseapp.com",
  projectId: "andalibbags",
  storageBucket: "andalibbags.appspot.com",
  messagingSenderId: "177296447170",
  appId: "1:177296447170:web:be9bd2b959d7609d614d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
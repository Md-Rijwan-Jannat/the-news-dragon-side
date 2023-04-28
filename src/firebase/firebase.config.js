// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcRfsrMtIsO2M3gU2GMRmZ0J06xgKBAQY",
  authDomain: "the-news-dragon-auth.firebaseapp.com",
  projectId: "the-news-dragon-auth",
  storageBucket: "the-news-dragon-auth.appspot.com",
  messagingSenderId: "570533504143",
  appId: "1:570533504143:web:0f88a5eb6e4727dbb13cfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;
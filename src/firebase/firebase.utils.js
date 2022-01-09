// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjTBo1bf7RxMHD9rf63tSor3AdZ8iSTpA",
  authDomain: "react-shop-9c67b.firebaseapp.com",
  projectId: "react-shop-9c67b",
  storageBucket: "react-shop-9c67b.appspot.com",
  messagingSenderId: "398738014061",
  appId: "1:398738014061:web:733fd323930b4461e72464",
  measurementId: "G-6NRYL9ECK8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const auth = app.auth();
export const provider = new GoogleAuthProvider();
export const auth = getAuth();



// src/firebase.js (or wherever you keep it)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4mqUUb-dqahj9eIQc2llOCZkQaoE2V1M",
  authDomain: "evaluation-bd2d0.firebaseapp.com",
  projectId: "evaluation-bd2d0",
  storageBucket: "evaluation-bd2d0.appspot.com",
  messagingSenderId: "113480374618",
  appId: "1:113480374618:web:c7891762a6a42cd2debb63"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const auth = getAuth(App);

export { auth };

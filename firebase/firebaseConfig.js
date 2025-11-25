// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkWkVuLnIXpHIRaB3tsMOaQ8kghCJjEKI",
  authDomain: "daihoisotinhdoan.firebaseapp.com",
  projectId: "daihoisotinhdoan",
  storageBucket: "daihoisotinhdoan.firebasestorage.app",
  messagingSenderId: "661830634490",
  appId: "1:661830634490:web:7ede687234bd6f3d26b243"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

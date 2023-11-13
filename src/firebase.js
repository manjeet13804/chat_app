import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCh2GOiFVTfrHK_E6ULqa9zmI4jx0G3nHY",
  authDomain: "chatapp-d39f6.firebaseapp.com",
  projectId: "chatapp-d39f6",
  storageBucket: "chatapp-d39f6.appspot.com",
  messagingSenderId: "1052560835806",
  appId: "1:1052560835806:web:61b11700d5ca56ee3dee4f",
  measurementId: "G-C2BMEDHH1M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

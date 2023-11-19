import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

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
auth.setPersistence(browserLocalPersistence);
export const storage = getStorage(app);
export const db = getFirestore(app);

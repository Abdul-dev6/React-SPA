import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg-WORTCrEcTfFx1O32Y6ikF-E8zQwc8w",
  authDomain: "react-spa-b3bd7.firebaseapp.com",
  projectId: "react-spa-b3bd7",
  storageBucket: "react-spa-b3bd7.firebasestorage.app",
  messagingSenderId: "615933768412",
  appId: "1:615933768412:web:fa2534b46c9ff0e2fdfa19",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

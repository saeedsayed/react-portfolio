// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_API_KEY,
  authDomain: import.meta.env.PUBLIC_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_MESSAGING_SEDER_ID,
  appId: import.meta.env.PUBLIC_APP_ID,
  measurementId: import.meta.env.PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app);

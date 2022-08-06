import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3eY-lSfYL4NwxNWJF3nrenMYJF9wknzc",
  authDomain: "facebook333.firebaseapp.com",
  projectId: "facebook333",
  storageBucket: "facebook333.appspot.com",
  messagingSenderId: "289035557639",
  appId: "1:289035557639:web:bc511d58141105c40d43a2",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { db, storage, app };

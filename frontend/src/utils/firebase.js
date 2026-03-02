import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-fcf9c.firebaseapp.com",
  projectId: "loginonecart-fcf9c",
  storageBucket: "loginonecart-fcf9c.firebasestorage.app",
  messagingSenderId: "212743738382",
  appId: "1:212743738382:web:00943bc2e0deba4e67d85f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth, provider}

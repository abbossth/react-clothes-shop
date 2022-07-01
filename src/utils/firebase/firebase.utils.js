import { initializeApp } from "firebase/app";
import {
  getAuth,
  //eslint-disable-next-line
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAw9EbWUkUFGzvJO76OcJ2VaGq0C3T0M1Y",
  authDomain: "react-ecommerce-cd705.firebaseapp.com",
  projectId: "react-ecommerce-cd705",
  storageBucket: "react-ecommerce-cd705.appspot.com",
  messagingSenderId: "105857037552",
  appId: "1:105857037552:web:1603c3f6dfe1b31f577e35",
};

//eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

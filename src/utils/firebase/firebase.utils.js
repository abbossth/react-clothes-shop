import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  getFirestore
} from "firebase/firestore"

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

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)


// FIRESTORE
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef);

  console.log(userDocRef);
  console.log(userSnapshot.exists());


  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (err) {
      console.log('Error occured on creating user', err);
    }
  }

  return userDocRef;


  // if user data exists
  // rerurn userDocRef
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
} 
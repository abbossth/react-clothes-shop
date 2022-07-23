import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
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

// create User with Google account
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  // if no user available, just return nothing
  if (!userAuth) return;
  // user document creating
  const userDocRef = doc(db, 'users', userAuth.uid)
  // Getting the User from db by doc()
  const userSnapshot = await getDoc(userDocRef);

  // if user not exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
      alert('User successfully created!')
    } catch (err) {
      console.log('Error occured on creating user', err);
    }
  }

  return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);


// {
// next: (user) => {}
// error: (err) => {}
// complete: () => {}
// }

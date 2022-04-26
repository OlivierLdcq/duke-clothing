import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgB9DSMpQJhqX1q3Jc7H-ggLy2c_oIKlc",
  authDomain: "duke-clothing-89e7e.firebaseapp.com",
  projectId: "duke-clothing-89e7e",
  storageBucket: "duke-clothing-89e7e.appspot.com",
  messagingSenderId: "363632574990",
  appId: "1:363632574990:web:74732a437c3a71a666f25f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//seting up login with Google Account
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//seting up database
export const db = getFirestore();

//here we want to create a document for the new logged user (must be async)
export const createUserDocumentFromAuth = async (userAuth) => {
  //we are checking if there is a document in the database the Id of the logged user
  //userDocRef is just the adress of the document
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  //trying to get the data from userDocRef
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

import { async } from "@firebase/util";
import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/Firebase.js";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div className="SignIn">
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>SignIn with Google Popup</button>
    </div>
  );
};

export default SignIn;

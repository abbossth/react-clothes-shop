import {
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  //   const logGoogleUserWithRedirect = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     createUserDocumentFromAuth(user);
  //   };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      {/* <button onClick={logGoogleUserWithRedirect}>
        Sign In With Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;

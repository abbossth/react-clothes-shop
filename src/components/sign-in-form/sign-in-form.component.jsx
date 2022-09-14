import { useState } from "react";
import { SignInContainer } from "./sign-in.styles.jsx";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES } from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(user);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("This email is not registered yet.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password! Please try again...");
      }
      console.log("ERROR NAME: ", error);
    }
  };

  return (
    <SignInContainer>
      <h2>I already have an account.</h2>
      <p>Sign In With email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type={"email"}
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          label={"Password"}
          type={"password"}
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button type={"submit"} children={"Sign In"} />
          <Button
            type={"button"}
            buttonType={BUTTON_TYPES.google}
            children={"Sign in with google"}
            onClick={signInWithGoogle}
          />
        </div>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

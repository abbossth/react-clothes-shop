import { useState } from "react";
import { SignUpContainer } from "./sign-up.styles.jsx";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName })
            
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create User.... (Email already in use)");
      }
      console.log("User creation encountered an error: ", error);
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an Account?</h2>
      <p>Sign up With email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type={"text"}
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />
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
        <FormInput
          label={"Confirm Password"}
          type={"password"}
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button children={"Sign Up"} />
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;

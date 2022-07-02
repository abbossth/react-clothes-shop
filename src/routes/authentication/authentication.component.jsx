import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Authentication</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "150px",
        }}
      >
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;

import React from "react";
import "./sign-in-and-sign-up.component.scss";
import SignIn from "../../components/sign-in/sign-in.component";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn className="sign-in"/>
    </div>
  );
};

export default SignInAndSignUpPage;

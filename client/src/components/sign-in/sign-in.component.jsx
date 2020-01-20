import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-in.component.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

const SignIn = ({ actions: { googleSignInStart, emailSignInStart } }) => {
  const [userCredenatials, setUserCredenatials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredenatials;

  const handleChange = e => {
    const { value, name } = e.target;

    setUserCredenatials({
      ...userCredenatials,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = userCredenatials;

    emailSignInStart({
      email,
      password
    });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: emailAndPassword =>
      dispatch(emailSignInStart(emailAndPassword))
  }
});

export default connect(null, mapDispatchToProps)(SignIn);

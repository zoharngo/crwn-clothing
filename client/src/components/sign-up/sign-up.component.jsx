import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import "./sign-up.component.scss";

const SignUp = ({ actions: { signUpStart } }) => {
  const [userCredenatials, setUserCredenatials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredenatials;

  const handleChange = e => {
    const { value, name } = e.target;

    setUserCredenatials({
      ...userCredenatials,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = userCredenatials;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    signUpStart({
      displayName,
      email,
      password
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
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

        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: {
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  }
});

export default connect(null, mapDispatchToProps)(SignUp);

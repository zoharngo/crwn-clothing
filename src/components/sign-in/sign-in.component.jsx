import React, { Component } from "react";
import { connect } from "react-redux";
import "./sign-in.component.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    const { emailSignInStart } = this.props.actions;

    emailSignInStart({
      email,
      password
    });
  };

  render() {
    const { googleSignInStart } = this.props.actions;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
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
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: emailAndPassword =>
      dispatch(emailSignInStart(emailAndPassword))
  }
});

export default connect(null, mapDispatchToProps)(SignIn);

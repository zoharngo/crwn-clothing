import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import "./App.css";
import CheckoutPage from "./pages/checkout/checkout.component";


export class App extends Component {
 
  

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route exact path={"/checkout"} component={CheckoutPage} />
          <Route
            exact
            path={"/signin"}
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});


export default connect(mapStateToProps)(App);

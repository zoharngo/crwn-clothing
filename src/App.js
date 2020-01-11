import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";

import { setUserAction } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import "./App.css";
import CheckoutPage from "./pages/checkout/checkout.component";


export class App extends Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { setUserAction } = this.props.actions;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setUserAction({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setUserAction(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

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

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setUserAction: currentUser => dispatch(setUserAction(currentUser))
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

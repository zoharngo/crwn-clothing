import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";
import { setUserAction } from "./redux/user/user.actions";

export class App extends Component {
  unsubscribeFromAuth = null;
  unsubscribeFromOnSnapshot = null;

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

export default connect(mapStateToProps, mapDispatchToProps)(App);

function mapStateToProps({ user }) {
  return {
    currentUser: user.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setUserAction: currentUser => dispatch(setUserAction(currentUser))
    }
  };
}

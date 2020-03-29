import React, { Component } from "react";
import Profile from "./Profile.js";
import Signin from "./Signin.js";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { UserSession, AppConfig } from "blockstack";
import Table from './components/Table';
import Education from './components/Education';


const appConfig = new AppConfig();
const userSession = new UserSession({ appConfig: appConfig });

export default class App extends Component {
  handleSignIn(e) {
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (
      <div>
        <Route
          path="/" exact={true}
          render={() => {
           

            return (
              !userSession.isUserSignedIn() ? (
               <Signin
                  userSession={userSession}
                  handleSignIn={this.handleSignIn}
                />
              ) : (
                <Profile
                  userSession={userSession}
                  handleSignOut={this.handleSignOut}
                />
              )
              )
          }}
        />

        <Route
          path="/transactions"
          exact={true}
          render={() => {
            return <Table />;
          }}
        />

            <Route
          path="/education"
          exact={true}
          render={() => {
            return <Education />;
          }}
        />      

      </div>
    );
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.history.replaceState({}, document.title, "/");
        this.setState({ userData: userData });
      });
    }
  }
}

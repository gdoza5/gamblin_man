import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";


import "./App.css";
import BetslipPage from "../BetslipPage/BetslipPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      fixtures: [],
      
      
    };
  }
  handlelogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignuporLogin = () => {
    this.setState({ user: userService.getUser() });
  };
//----------------------to search-----//

handleOnChange = e => {
  this.setState({
    search: e.target.value
  });
};

handleOnClick = () => {
  getFixtureInfo()
  .then(results => {
    console.log("this is in state maybe", results)
    this.setState({ fixtures: results });

  });
};

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                user={this.state.user}
                handlelogout={this.handlelogout}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignuporLogin={this.handleSignuporLogin}
              />
            )}
          />
          <Route 
          exact path="/betslip"
          render={({ history }) => (
            <BetslipPage
            history={history}
            handleOnChange={this.handleOnChange}
            handleOnClick={this.handleOnClick}
            />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignuporLogin={this.handleSignuporLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;


async function getFixtureInfo() {
  
  let data = await fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/next/10`, {
    headers: {
      "X-RapidAPI-Key": "92794e2d97msh93a9054166a701dp1a219djsnc2fe202d8e66"
    },
    query: "America/Mexico_City"
  }
  );
  let jsonData = await data.json();
  console.log("this is in function", jsonData)
  return await jsonData.api.fixtures
}

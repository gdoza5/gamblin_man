import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";


import "./App.css";
import BetslipPage from "../BetslipPage/BetslipPage";
import FixtureList from "../FixtureList/FixtureList";
import SingleFixture from "../SingleFixture/SingleFixturePage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      fixtures: [],
      odds: [],
      sfix: null,
      ofix: null,
      
      
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

handleOnChange = async e => {
  console.log('ACCCtive------')
  this.setState({
    sfix: e.target.value,
    ofix: e.target.id
  });  
  
  console.log(`${e.target.id}`)
};

handleOnClick = () => {
  getFixtureInfo()
  .then(results => {
    console.log("this is in state maybe", results)
    this.setState({ fixtures: results });

  });
};

oddsOnClick = () => {
  getFixtureodds(this.state.sfix)
  .then(results => {
    console.log("odds api call please work", results)
    this.setState({ odds: results });
  })
}

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
          <Route
          exact
          path="/fixturelist"
          render={({ history }) =>(
            <FixtureList
            history={history}
            fixtures={this.state.fixtures}
            user={this.state.user}
            handleOnChange={this.handleOnChange}
            oddsOnClick={this.oddsOnClick}
            />
          )}
          /><Route
          exact
          path="/singlefixture"
          render={({ history }) =>(
            <SingleFixture
            history={history}
            fixtures={this.state.fixtures}
            user={this.state.user}
            ofix={this.state.ofix}
            odds={this.state.odds}
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


async function getFixtureodds(inpt) {
  
  let data = await fetch(`https://api-football-v1.p.rapidapi.com/v2/odds/fixture/${inpt}`, {
    headers: {
      "X-RapidAPI-Key": "92794e2d97msh93a9054166a701dp1a219djsnc2fe202d8e66"
    },
    
  }
  );
  let jsonData = await data.json();
  console.log("this is is for the odds -------------", jsonData)
  return await jsonData.api.odds[0].bookmakers[0].bets[0].values
}


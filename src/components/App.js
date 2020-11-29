import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "../styles/App.css";
import LocationDisplay from "./locationDisplay";
import Home from "./home";
import About from "./about";
import Other from "./other";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="main">
          <a href="/">Home</a>
          <br />
          <a href="/about">About</a>
          <LocationDisplay />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route path="/" component={Other} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

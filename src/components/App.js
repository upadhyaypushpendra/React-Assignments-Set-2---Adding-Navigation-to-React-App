import React, { Component, useState } from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import "../styles/App.css";

function Home() {
  return <div>You are home.</div>;
}
function About() {
  return <div>You are on the about page.</div>;
}
function Other() {
  return <div>No match</div>;
}
function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}
class App extends Component {
  render() {
    return (
      <div id="main">
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
      </div>
    );
  }
}

export default App;

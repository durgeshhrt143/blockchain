import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "../css/App.css";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";
import Login from "../components/Login";
import Dashboard from "./../components/Dashboard";
class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path={`/dashboard`} component={Dashboard} />
            <Route path={`/login`} component={Login} />
            <Route path={`/`} component={Home} exact />
            <Route path={`/page-not-found`} component={PageNotFound} />
            <Redirect to={`/page-not-found`} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

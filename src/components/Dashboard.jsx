import React, { Component } from "react";
import InnearHeader from "./layout/InnerHeader";
import Pages from "./layout/Pages";
class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Pages />
      </React.Fragment>
    );
  }
}

export default Dashboard;

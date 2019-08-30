import React from "react";
import NavList from "./NavList";
import InnearHeader from "./InnerHeader";
import { Router, Switch } from "react-router-dom";
import Dashboard from "./../dashboard/Dashboard";
const Pages = props => {
  return (
    <React.Fragment>
      <InnearHeader />
      <div className="container is-fluid">
        <div className="columns is-gapless is-fullheight">
          <NavList />

          <div className="column is-10 page-content">page 1</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pages;

import React from "react";
import { NavLink } from "react-router-dom";
const NavList = props => {
  return (
    <div className="column is-2 nav-bar">
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="">Certificates from NABL</NavLink>
          </li>
          <li>
            <NavLink to="">List of Test Reports</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavList;

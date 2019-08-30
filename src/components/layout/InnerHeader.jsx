import React from "react";
import logo from "../../images/nabl.png";
import { Link } from "react-router-dom";
const InnearHeader = props => {
  return (
    <header className="innerHeader">
      <div className="container is-fluid">
        <div className="columns is-gapless">
          <div className="column inner-header-column">
            <Link to={`/`}>
              <img src={logo} alt="logo" />
            </Link>

            <strong className="nabl">Certificate Authentication system</strong>
          </div>
        </div>
      </div>{" "}
    </header>
  );
};

export default InnearHeader;

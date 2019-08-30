import React from "react";
import o from "../images/o.png";
import notfound from "../images/404.svg";
import { Link } from "react-router-dom";
const PageNotFound = props => {
  return (
    <section className="errorPage">
      <div className="container">
        <div className="columns has-text-centered">
          <div className="column">
            <div className="notFoundImages">
              <img src={notfound} className="notFoundImage" alt="not found" />
              <img src={o} className="oImages _2Mx1W" alt="o" />
            </div>
            <h4 className="opps">OOPS!</h4>
            <p>
              We couldn't find the page you were looking for. <br />
              Don't panic or you'll wake up the cat. Press the button below to
              go to homepage.
            </p>
            <Link to="/" className="button is-home is-normal">
              Go to homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;

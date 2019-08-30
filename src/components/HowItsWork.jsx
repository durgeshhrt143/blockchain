import React from "react";
import first from "../images/first.svg";
import second from "../images/second.svg";
import third from "../images/third.svg";
import loader from "../images/loader.svg";
const HowItsWork = props => {
  return (
    <React.Fragment>
      <section className="howItsWorks">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="mainTitle">How Its Work</h2>
              <div id="tabs">
                <div className="tabs1">
                  <div className="columns v-align">
                    <div className="column">
                      <h3 className="subTitle">1. ACCOUNTS</h3>
                      <p>
                        The concerned user, organisation or lab has to contact
                        their parent organisation for their account. The primary
                        details will be their email, phone number, pancard and
                        orgnization name. Other information includes their GST,
                        TAN etc.
                      </p>
                    </div>
                    <div className="column">
                      <div className="graph">
                        <ul className="nodes">
                          <li className="node">
                            <img src={first} alt="first" />
                          </li>
                        </ul>
                        <div className="dot">
                          <img src={loader} alt="loader" />
                        </div>
                        <ul className="nodes">
                          <li className="smallest"></li>
                          <li className="small"></li>
                          <li className="node">
                            <img src={second} alt="second" />
                          </li>
                          <li className="small"></li>
                          <li className="smallest"></li>
                        </ul>
                        <div className="dot"></div>
                        <ul className="nodes">
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs1">
                  <div className="columns v-align">
                    <div className="column">
                      <h3 className="subTitle"> 2. CHILD ACCOUNTS</h3>
                      <p>
                        Once the account has been created bythe parent
                        orgnization, They need to claim their account by
                        entering their phone number and Email for OTPs.
                      </p>
                    </div>
                    <div className="column">
                      <div className="graph">
                        <ul className="nodes">
                          <li className="node">
                            <img src={first} alt="first" />
                          </li>
                        </ul>

                        <ul className="nodes">
                          <li className="smallest"></li>
                          <li className="small"></li>
                          <li className="node">
                            <img src={second} alt="second" />
                          </li>
                          <li className="small"></li>
                          <li className="smallest"></li>
                        </ul>

                        <ul className="nodes">
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs1">
                  <div className="columns v-align">
                    <div className="column">
                      <h3 className="subTitle"> 3. CLAIM ACCOUNTS</h3>
                      <p>
                        The organisations can create thier child account, Child
                        account are limited to see their activity.
                      </p>
                    </div>
                    <div className="column">
                      <div className="graph">
                        <ul className="nodes">
                          <li className="node">
                            <img src={first} alt="first" />
                          </li>
                        </ul>
                        <div className="dot"></div>
                        <ul className="nodes">
                          <li className="smallest"></li>
                          <li className="small"></li>
                          <li className="node">
                            <img src={second} alt="second" />
                          </li>
                          <li className="small"></li>
                          <li className="smallest"></li>
                        </ul>
                        <div className="dot">
                          <div className="dot1">
                            <img src={loader} alt="loader" />
                          </div>
                          <div className="dot2">
                            <img src={loader} alt="loader" />
                          </div>
                        </div>
                        <ul className="nodes">
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs1">
                  <div className="columns v-align">
                    <div className="column">
                      <h3 className="subTitle">4. CREATE CERTIFICATES</h3>
                      <p>
                        Any entity on this platform can create certificates and
                        they can transfer these certificates to any other
                        entity.
                      </p>
                    </div>
                    <div className="column">
                      <div className="graph">
                        <ul className="nodes">
                          <li className="node">
                            <img src={first} alt="first" />
                          </li>
                        </ul>
                        <div className="dot"></div>
                        <ul className="nodes">
                          <li className="smallest"></li>
                          <li className="small"></li>
                          <li className="node">
                            <img src={second} alt="second" />
                          </li>
                          <li className="small"></li>
                          <li className="smallest"></li>
                        </ul>
                        <div className="dot">
                          <div className="dot1">
                            <img src={loader} alt="loader" />
                          </div>
                          <div className="dot2">
                            <img src={loader} alt="loader" />
                          </div>
                        </div>
                        <ul className="nodes">
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs1">
                  <div className="columns v-align">
                    <div className="column">
                      <h3 className="subTitle"> 5. SHARE CERTIFICATES</h3>
                      <p>
                        Any entity can receive certificates from other
                        organisation, Only a parent can deactivate or renew
                        their certificates. Any entity can share their
                        certificates with any other entity within a time bound.
                        Only in this time period the receiving organisation can
                        decrypt these certificates and view them.
                      </p>
                    </div>
                    <div className="column">
                      <div className="graph">
                        <ul className="nodes">
                          <li className="node">
                            <img src={first} alt="first" />
                          </li>
                        </ul>
                        <div className="dot">
                          <img src={loader} alt="loader" />
                        </div>
                        <ul className="nodes">
                          <li className="smallest"></li>
                          <li className="small"></li>
                          <li className="node">
                            <img src={second} alt="second" />
                          </li>
                          <li className="small"></li>
                          <li className="smallest"></li>
                        </ul>
                        <div className="dot"></div>
                        <ul className="nodes">
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                          <li className="node">
                            <img src={third} alt="third" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HowItsWork;

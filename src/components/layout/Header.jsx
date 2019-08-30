import React, { Component } from "react";
import logo from "../../images/nabl.png";
import Modal from "../common/Modal";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="container">
            <div className="columns is-gapless v-align is-mobile">
              <div className="column is-6">
                <img src={logo} alt="logo" />
                <h1 className="headerCon">NABL</h1>
              </div>
              <div className="column is-6">
                <a
                  onClick={this.toggleModal}
                  className="button is-login is-normal is-pulled-right"
                >
                  LOGIN
                </a>
              </div>
            </div>
          </div>
        </header>

        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
          title="Login"
        >
          <div className="columns mainLogin">
            <div className="column loginBox is-6">
              <div className="a-v-align">
                <h2>Login</h2>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
              </div>
            </div>
            <div className="column textBox is-6">
              <form className="a-v-align">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Email/Mobile number"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
                <a className="button popUpLogin">Login</a>
                <Link to={`/`} className="forget-password">
                  Forgot Password ?
                </Link>
              </form>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;

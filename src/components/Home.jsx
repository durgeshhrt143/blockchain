import React, { Component } from "react";
import Slider from "./common/slider";
import HowItsWork from "./HowItsWork";
import BlockChain from "./BlockChain";
import Header from "../components/layout/Header";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sliderContainer">
          <Header />
          <div className="slider">
            <Slider />
          </div>
        </div>
        <BlockChain />
        <HowItsWork />
      </React.Fragment>
    );
  }
}

export default Home;

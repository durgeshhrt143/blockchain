import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import one from "../../images/1.jpg";
import two from "../../images/2.jpg";
class Slider extends Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        swipeable={true}
        interval={6000}
        infiniteLoop={true}
        transitionTime={2000}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        <div className="overlay">
          <img src={one} alt="one" />
          <div className="banner-text container">
            <div className="left">
              <div className="headingB">
                BLOCKCHAIN-BASED CERTIFICATION AUTHENTICATION SYSTEM
              </div>
              <h2>
                Certification authentication system based on decentralize ledger
                technology to check authenticity of the certificates issued and
                consumed by any organisation or party.
              </h2>
            </div>
            <p>
              <a className="btn big knowMore" href="/product-engineering">
                Know More
              </a>
            </p>
          </div>
        </div>
        <div className="overlay">
          <img src={two} alt="two" />
          <div className="banner-text container">
            <div className="left">
              <div className="headingB">VISION & MISSION</div>
              <h2>
                Quality Council of India proposes to prepare a common portal
                which would facilitate the workings of all technical regulations
                at a single window of various industries and sectors. Integrated
                portal, will validate data using blockchain, artificial
                intelligence & machine learning. The portal will be capable of
                maintaining a common database and the dashboard of this portal
                would be helping all the regulatiry organisation in arresting
                the issues and preparing for instant action
              </h2>
            </div>
            <p>
              <a className="btn big knowMore" href="/product-engineering">
                Know More
              </a>
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}

export default Slider;

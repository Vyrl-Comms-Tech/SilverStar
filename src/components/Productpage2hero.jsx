import React from "react";
import "../styles/Homehero.css";
import "../styles/Producthero.css";
import Navbar from "./Navbar";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
// import '../components/Pr'

function Productpage2hero() {
  gsap.registerPlugin(ScrollToPlugin);
  const handleScroll = () => {
    // Get the total height of the page minus the viewport height
    const bottomPosition = document.body.scrollHeight - window.innerHeight;
    
    gsap.to(window, {
      scrollTo: {
        y: bottomPosition,
        autoKill: true,
      },
      duration: 2, // Slightly longer duration since we're going all the way to the bottom
      ease: "power2.inOut",
    });
  };
  return (
    <>
      <div className="homehero">
        {/* Blob images */}
        <img src="/img/about blob.png" alt="" id="abblob" />
        <Navbar />
        <div className="mainhero">
          <div className="herosection1">
            <div className="herotextholder"></div>
            <div className="heroimageholder">
              <img src="/img/product arrow2.png" alt="" />
            </div>
            <div className="bottomrow">
              <div className="scrolldown"  onClick={handleScroll}>
                <img src="/img/arowdown.svg" alt="" />
              </div>
              <div className="scrolltext"  onClick={handleScroll}>
                <p>scroll down for more</p>
              </div>
            </div>
          </div>
          <div className="herosection2" id="producthead">
            <h1>
              Best in class laptops for the modern <br />
              <span id="red">professional</span>
            </h1>
            <div className="herobuttonholder">
              <button id="contactbtn">Contact </button>
            </div>
            <img src="/img/Group 1a.png" alt="" />
          </div>
          <div className="herosection1" id="hero2">
            <div className="herotextholder" id="herotextholder2"></div>
            <div className="heroimageholder" id="heroimageholder2">
              <img src="/img/product arrow1.png" alt="" />
            </div>
            <div className="bottomrow" id="bottomrow2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productpage2hero;
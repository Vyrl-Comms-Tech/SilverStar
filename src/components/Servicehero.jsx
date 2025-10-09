import React from "react";
import "../styles/Homehero.css";
import "../styles/Producthero.css";
import "../styles/Abouthero.css";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Navbar from "./Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Servicehero() {
  useGSAP(() => {
    // Set the delay based on whether preloader is shown
    // const animationDelay = showPreloader ? 8 : 1.5;

    // Create a timeline with the appropriate delay
    const tl = gsap.timeline({ delay: 0.6 });

    // Hide elements initially
    gsap.set(".boundingelem", {
      y: 70,
      opacity: 0,
    });

    // Animate the text elements
    tl.to(".boundingelem", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    tl.to(
      ".herobuttonholder button",
      {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "same2"
    );

    tl.from(
      ".herotextholder",
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "same2"
    );

    tl.from(
      ".herosection2 p",
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "same2"
    );

    tl.from(
      "#gdownarrow",
      {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "same2"
    );

    tl.from(
      "#left",
      {
        x: "-100%",
        duration: 1,
        opacity: 0,
        ease: "power2.out",
      },
      0
    );

    tl.from(
      "#right",
      {
        x: "100%",
        duration: 1,
        opacity: 0,
        ease: "power2.out",
      },
      0
    );

    // Start blob animation after the timeline completes
    tl.call(() => {
      // Start the blob animation after the main animation timeline
      if (blob1Ref.current) {
        animateRandomly(blob1Ref.current);
      }
    });

    // Cleanup function
    return () => {
      if (blob1Ref.current) {
        gsap.killTweensOf(blob1Ref.current);
      }
    };
  }, []); // Include showPreloader in dependencies to re-run when it changes

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
    <div className="homehero">
      {/* Blob images */}
      <Navbar />
      <img src="/img/About blob2.avif" alt="" id="abblob2" />
      <div className="mainhero">
        <div className="herosection1">
          <div className="herotextholder">
            {/* <img src="/img/Ellipse.svg" alt="" /> */}
            {/* <p>
                        Server, Cloud Management,
                        <br /> Network Solutions
                      </p> */}
          </div>
          <div className="heroimageholder">
            <img src="/img/product arrow2.avif" id="left" alt="" />
          </div>
          <div className="bottomrow" id="left">
            <div className="scrolldown" onClick={handleScroll}>
              <img src="/img/arowdown.svg" alt="" />
            </div>
            <div className="scrolltext" onClick={handleScroll}>
              <p>scroll down for more</p>
            </div>
          </div>
        </div>
        <div className="herosection2">
          {/* <h1 id="newtext" className="ab-increasae">
            Know More About <br />
            <span id="red"> Silver Star</span>
          </h1> */}
          <h1>
            Delivering <span id="red">IT.</span> Supporting <br />{" "}
            <span id="red">IT.</span> Securing <span id="red">IT.</span>
          </h1>
          <h4>
            From data centers to desktops Silver Star Electronics provides end{" "}
            <br id="remove-brrr" />
            to end IT services designed to keep your business connected,
            <br id="remove-brrr" /> protected, and performing at its best.
          </h4>
          <div className="herobuttonholder">
            {/* <button id='explorebtn'>Explore <img src="/img/Varrow.svg"></img></button> */}
            <button className="service-hero-btn" id="contactbtn">
              Explore Our Services
            </button>
          </div>
          <img src="/img/Group 1a.avif" id="gdownarrow" alt="" />
          {/* <p>Corporate IT Hardware & Software Suppliers<br/>From All Major Brands</p> */}
        </div>
        <div className="herosection1" id="hero2">
          <div className="herotextholder" id="herotextholder2">
            {/* <img src="/img/Ellipse.svg" alt="" />
                      <p>
                      Maintenance, Security & 
                        <br /> CCTV Installation
                      </p> */}
          </div>
          <div className="heroimageholder" id="heroimageholder2">
            <img src="/img/product arrow1.avif" alt="" id="right" />
          </div>
          <div className="bottomrow" id="bottomrow2">
            {/* <div className="showreel">
                        <img src="/img/reel.svg" alt="" />
                        <p>Show reel</p>
                      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicehero;

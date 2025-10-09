import React, { useRef, useState, useEffect } from "react";
import "../styles/Homehero.css";
import "../styles/Producthero.css";
import "../styles/Abouthero.css";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
export default function Abouthero() {
  const [showPreloader, setShowPreloader] = useState(
    !sessionStorage.getItem("preloaderShown") // Check session storage
  );
  gsap.registerPlugin(ScrollToPlugin);
  const blob1Ref = useRef(null);

  // Function to animate with random values
  const animateRandomly = (element) => {
    if (!element) return; // Safety check

    // Check if screen width is below 992px
    const isMediumScreen = window.innerWidth < 992;

    // Generate random values for movement
    const randomY = -100 - Math.random() * 15; // Random value between -100 and -115

    // Slow down duration for medium/small screens
    const durationFactor = isMediumScreen ? 1.8 : 1; // Increase duration by 80% for smaller screens
    const duration = (1.5 + Math.random() * 2) * durationFactor;

    // Create the animation
    gsap.to(element, {
      y: randomY,
      duration: duration,
      ease: "sine.inOut",
      onComplete: () => {
        // Animate back to original position with different random values
        const returnDuration = (1.5 + Math.random() * 2) * durationFactor;
        gsap.to(element, {
          y: 0,
          duration: returnDuration,
          ease: "sine.inOut",
          onComplete: () => {
            // When complete, start a new random animation
            animateRandomly(element);
          },
        });
      },
    });
  };

  // Use a single useGSAP for both scenarios with different delays
  useGSAP(() => {
    // Set the delay based on whether preloader is shown
    const animationDelay = showPreloader ? 8 : 1.5;

    // Create a timeline with the appropriate delay
    const tl = gsap.timeline({ delay: animationDelay });

    // Hide elements initially
    gsap.set(".boundingelem", {
      y: 70,
      opacity: 0,
    });
    gsap.set(".herosection2 h4", {
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
    tl.to(".herosection2 h4", {
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
  }, [showPreloader]); // Include showPreloader in dependencies to re-run when it changes

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
        <Navbar />
        <img src="/img/About blob2.avif" alt="" id="abblob2" ref={blob1Ref} />
        <div className="mainhero">
          <div className="herosection1">
            <div className="herotextholder">
              {/* <img src="/img/Ellipse.svg" alt="" /> */}
              {/* <p>
                    Server, Cloud Management,
                    <br /> Network Solutions
                  </p> */}
            </div>
            <div className="heroimageholder">
              <img src="/img/product arrow2.avif" id="left" alt="" />
            </div>
            <div className="bottomrow" id="left">
              <div className="scrolldown" onClick={() => handleScroll()}>
                <img src="/img/arowdown.svg" alt="" />
              </div>
              <div className="scrolltext" onClick={() => handleScroll()}>
                <p>scroll down for more</p>
              </div>
            </div>
          </div>
          <div className="herosection2" id="about-hero-section">
            <h1 id="ab-increasae" className="boundingelem ab-increasae">
              {/* Know More About <br /><span id="red"> Silver Star</span> */}
              About us <br id="remove-brrr" />
              doing <span id="red"> IT</span>
            </h1>
            <h4>
              We bridge innovation with expertise combining top tier hardware,{" "}
              <br id="remove-brrr" />
              licensed software, and end to end support to keep your business{" "}
              <br id="remove-brrr" />
              running seamlessly.
            </h4>
            {/* <h4>
              Empowering businesses with reliable IT infrastructure,
              cutting-edge solutions,
              <br id="remove-brrr" /> and seamless support so you can focus on
              what truly matters while we take care of IT.
            </h4> */}
            {/* <h4>One-stop destination for all IT & ELECTRONICS leading it hardware and software <br/> supplies in dubai</h4> */}
            <div className="herobuttonholder">
              {/* <button id='explorebtn'>Explore <img src="/img/Varrow.svg"></img></button> */}
              <button id="contactbtn">Contact</button>
            </div>
            <img src="/img/Group 1a.avif" id="gdownarrow" alt="" />
            <p>
              Because when it comes to technology, we don’t just supply IT <br />{" "} we
              simplify IT, secure IT, and support IT.
            </p>
            {/* <p>
              Corporate IT Hardware & Software Suppliers
              <br />
              From All Major Brands and IT reseller
            </p> */}
          </div>
          <div className="herosection1" id="hero2">
            <div className="herotextholder" id="herotextholder2">
              {/* <img src="/img/Ellipse.svg" alt="" />
                  <p>
                  Maintenance, Security & 
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
    </>
  );
}

// testing

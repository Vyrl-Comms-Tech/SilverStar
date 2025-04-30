import React, { useRef, useState } from "react";
import "../styles/Homehero.css";
import Navbar from "./Navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Heroreel from "./Heroreel";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useNavigate } from "react-router-dom";

export default function Homehero() {
  gsap.registerPlugin(ScrollToPlugin);
  const navigate = useNavigate();
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const [showreel, setshowreel] = useState(false);

  const [showPreloader, setShowPreloader] = useState(
    !sessionStorage.getItem("preloaderShown") // Check session storage
  );
  // Function to animate with random values
  const animateRandomly = (element) => {
    // Check if screen width is below 992px
    const isMediumScreen = window.innerWidth < 992;

    // Generate random values for movement
    const randomY = -100 - Math.random() * 15; // Random value between -10 and -25

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

  // Function to animate with random values in the opposite direction
  const animateRandomlyReverse = (element) => {
    // Check if screen width is below 992px
    const isMediumScreen = window.innerWidth < 992;

    // Generate random values for movement (in opposite direction)
    const randomY = 100 + Math.random() * 15; // Random value between 10 and 25

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
            animateRandomlyReverse(element);
          },
        });
      },
    });
  };

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
  // phone version for blob

  if (showPreloader) {
    const tl = gsap.timeline({ delay: 8 });

    useGSAP(() => {
      gsap.set(".boundingelem", {
        y: 70,
        opacity: 0,
        duration: 1.5,
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

      // Start random animations for both blobs
      animateRandomly(blob1Ref.current);
      animateRandomlyReverse(blob2Ref.current);

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
        "#right,.bottomrow2",
        {
          x: "100%",
          duration: 1,
          opacity: 0,
          ease: "power2.out",
        },
        0
      );

      // Cleanup function
      return () => {
        tl.killTweensOf(blob1Ref.current);
        tl.killTweensOf(blob2Ref.current);
      };
    }, []);
  } else {
    const tl = gsap.timeline({ delay: 1.5 });

    useGSAP(() => {
      gsap.set(".boundingelem", {
        y: 70,
        opacity: 0,
        duration: 1.5,
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

      // Start random animations for both blobs
      animateRandomly(blob1Ref.current);
      animateRandomlyReverse(blob2Ref.current);

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
        "#right ,#bottomrow2",
        {
          x: "100%",
          duration: 1,
          opacity: 0,
          ease: "power2.out",
        },
        0
      );

      // Cleanup function
      return () => {
        tl.killTweensOf(blob1Ref.current);
        tl.killTweensOf(blob2Ref.current);
      };
    }, []);
  }

  return (
    <>
      <Heroreel showreel={showreel} setshowreel={setshowreel} />
      <div className="homehero">
        <Navbar />
        <div className="mainhero">
          <div className="herosection1">
            <div className="herotextholder">
              <img src="/img/Ellipse.svg" alt="" />
              <p>
                Server, Cloud Management,
                <br /> Network Solutions
              </p>
            </div>
            <div className="heroimageholder">
              <img src="/img/arrow1.png" alt="" id="left" />
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
            <div id="newtext" className="boundingelem">
              <h1>
              Empowering Your Business with Innovative 
                <br className="remhead" /> 
                <span id="red">IT Solutions  & Supplies in the UAE</span>
              </h1>
              <h4>
                One-stop destination for all IT & ELECTRONICS leading it
                hardware and software <br /> supplies in dubai
              </h4>
            </div>
            <div className="herobuttonholder">
              <button id="explorebtn" onClick={() => navigate("/about")}>
                Explore <img src="/img/Varrow.svg"></img>
              </button>
              <button id="contactbtn" onClick={() => navigate("/contact-us")}>
                Contact{" "}
              </button>
            </div>
            <img src="/img/group2.png" id="gdownarrow" alt="" />
            <p>
              Corporate IT Hardware & Software Suppliers <br />
              From All Major Brands
            </p>
          </div>
          <div className="herosection1" id="hero2">
            <div className="herotextholder" id="herotextholder2">
              <img src="/img/Ellipse.svg" alt="" />
              <p>
                Maintenance, Security &
                <br /> CCTV Installation
              </p>
            </div>
            <div className="heroimageholder" id="heroimageholder2">
              <img src="/img/arrow2.png" alt="" id="right" />
            </div>
            <div className="bottomrow" id="bottomrow2">
              <div
                className="showreel"
                onClick={() => setshowreel((prev) => !prev)}
              >
                <img src="/img/reel.svg" alt="" />
                <p>Show reel</p>
              </div>
            </div>
          </div>
          {/* Blob images with refs for animation */}
          <img src="/img/Rectangle 2.png" alt="" id="blob1" ref={blob1Ref} />
          <img src="/img/Rectangle 1.png" alt="" id="blob2" ref={blob2Ref} />
        </div>
      </div>
    </>
  );
}

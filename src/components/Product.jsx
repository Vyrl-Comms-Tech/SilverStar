import React, { useRef } from "react";
import "../styles/product.css";
import AnimatedSVG from "./AnimatedSVG";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  productBallData,
  productGlassData,
  aboutUsBallData,
  aboutUsGlassData,
} from "../utils/ballSvgContent";
import Button from "./Button";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Product = ({ isAboutPage = false }) => {
  const linesRef = useRef([]);
  const containerRef = useRef(null);

  // Use the appropriate data based on the page
  const ballData = isAboutPage ? aboutUsBallData : productBallData;
  const glassData = isAboutPage ? aboutUsGlassData : productGlassData;

  useGSAP(() => {
    linesRef.current.forEach((line, index) => {
      gsap.to(line, {
        opacity: () => gsap.utils.random(0.1, 0.5),
        duration: () => gsap.utils.random(0.8, 1.5),
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: () => gsap.utils.random(0, 1),
        repeatRefresh: true,
      });
    });
  }, []);

  // New useGSAP hook for entrance animations with ScrollTrigger
  useGSAP(() => {
    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // Mobile animations
      gsap.fromTo(
        ".product-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );

      gsap.fromTo(
        ".product-para",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power1.inOut", delay: 0.3 }
      );

      gsap.fromTo(
        ".product-glass-div",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.2)",
          delay: 0.5,
        }
      );
    } else {
      // Desktop animations
      gsap.fromTo(
        ".product-heading",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".product-main-div",
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".product-para",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".product-main-div",
            start: "top 65%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".product-glass-div",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.25,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".product-glass-div",
            start: "bottom 50%",
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="product-main-div" ref={containerRef}>
      {/* Heading at the top */}
      {ballData.map((item) => (
        <div className="product-data" key={item.id}>
          <h1 className="product-heading">
            <span>{item.span} </span>
            {item.h1}
          </h1>

          {/* SVG in the background */}
          <div className="product-ball-svg">
            <AnimatedSVG />
          </div>

          {/* Paragraph in the center */}
          <div className="product-para">
            <p>{item.p}</p>
            {/* <button>{item.button}</button> */}
            <Button text="About Us" />
          </div>
        </div>
      ))}

      {/* Dynamic Glass Divs */}
      {glassData.map((item, index) => (
        <div
          key={item.id}
          className={`product-glass-div glass-div${index + 1}`}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="product-glass-img-div">
            <img src="/img/product-arrow.svg" alt="Arrow" />
          </div>
        </div>
      ))}

      {/* product lines - hidden on mobile */}
      <div className="product-line-svg-main-div">
        <div className="product-line-svg1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1899"
            height="245"
            viewBox="0 0 1899 245"
            fill="none"
          >
            <path
              ref={(el) => (linesRef.current[0] = el)}
              d="M0.868748 244.531C1025.68 -395 1092.58 476.886 1898.09 71.7353"
              stroke="url(#paint0_linear_4_48)"
              strokeWidth="2"
              opacity="1"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_48"
                x1="123.982"
                y1="229.444"
                x2="1866.61"
                y2="255.853"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0C0B0B" />
                <stop offset="0.505" stopColor="#E8361E" />
                <stop offset="1" stopColor="#0C0B0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="product-line-svg2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1918"
            height="242"
            viewBox="0 0 1918 242"
            fill="none"
          >
            <path
              ref={(el) => (linesRef.current[1] = el)}
              d="M0.590576 241C1134.84 -288.694 517.8 362.863 1921.45 1.0042"
              stroke="url(#paint0_linear_4_45)"
              strokeWidth="2"
              opacity="1"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_45"
                x1="20.5687"
                y1="137.831"
                x2="1782.05"
                y2="137.543"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0C0B0B" />
                <stop offset="0.512744" stopColor="#E8361E" />
                <stop offset="1" stopColor="#0C0B0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="product-line-svg3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1912"
            height="121"
            viewBox="0 0 1912 121"
            fill="none"
          >
            <path
              ref={(el) => (linesRef.current[2] = el)}
              d="M0.868759 79.4286C1263.05 159.116 634.853 -163.828 1913.87 119.692"
              stroke="url(#paint0_linear_4_47)"
              strokeWidth="2"
              opacity="1"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_47"
                x1="123.983"
                y1="64.3297"
                x2="1866.61"
                y2="90.7395"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0C0B0B" />
                <stop offset="0.505" stopColor="#E8361E" />
                <stop offset="1" stopColor="#0C0B0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="product-last-section">
        <h4>As a leading IT solutions provider in UAE</h4>
        <p>
          We specialize in sourcing, supplying, and seamlessly integrating the
          right products for your business — all while ensuring we stay within
          your defined budget.
        </p>
      </div>
    </div>
  );
};

export default Product;

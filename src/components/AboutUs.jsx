import React from "react";
import "../styles/aboutus.css";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

export default function AboutSection() {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Select all paragraphs in the about-text-content
    const paragraphs = document.querySelectorAll(".about-text-content p");

    // Apply the animation to each paragraph
    paragraphs.forEach((paragraph, index) => {
      let clutter = "";

      paragraph.textContent
        .trim()
        .split(" ")
        .forEach((word) => {
          if (word !== "") clutter += `<span>${word} </span>`;
        });

      paragraph.innerHTML = clutter;

      // Set initial state
      gsap.set(
        `${
          paragraph.classList.contains("textPara")
            ? ".textPara"
            : `.about-text-content p:nth-child(${index + 1})`
        } span`,
        {
          opacity: 0.2,
        }
      );

      // Animate on scroll
      gsap.to(
        `${
          paragraph.classList.contains("textPara")
            ? ".textPara"
            : `.about-text-content p:nth-child(${index + 1})`
        } span`,
        {
          scrollTrigger: {
            trigger: paragraph,
            start: "top 70%",
            end: "bottom 90%",
            scrub: 2,
            markers: false, // Set to false for production
          },
          opacity: 1,
          stagger: 0.03,
          ease: Power4,
        }
      );
    });
  });

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content-wrapper">
          {/* Content (text and button) */}
          <div className="about-content">
            <div className="about-text-content">
              <p className="textPara oxygen-light-font">
                Since 1996, Silver Star Electronics LLC. Have Been Providing
                Seamlessly Operating IT To Business Owners, Procurement Managers
                And IT Buyers Throughout The UAE.
              </p>
              <p>
                Our Passion For Providing The Best Value, Advanced IT Solutions,
                Quality IT Products And 24/7 Service Has Not Only Allowed Our
                Customers To Concentrate On What They Do Best, But Has Helped
                Their Businesses, Whether Start-Up Or Multinational, Go From
                Strength To Strength.
              </p>
              <p>
                By Assisting Our Customers' Growth, We Too Have Grown Over The
                Past 24 Years. With Years Of Experience And A Reputation As The
                Most Reliable IT Products & Solutions Procurement In The MENA
                Region, We've Become One Of The Leaders In The IT Industry.
              </p>
            </div>
            <div className="about-button-container">
              {/* <button className="about-button">About us</button> */}
              <Button text="About Us" />
            </div>
          </div>

          {/* Image Content */}
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img
                src="/img/about-us-img.svg"
                alt="Laptop displaying digital innovation"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

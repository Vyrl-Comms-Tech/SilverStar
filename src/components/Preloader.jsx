import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect, useState } from "react";
import "../styles/Preloader.css";

function Preloader() {
  const [showPreloader, setShowPreloader] = useState(
    !sessionStorage.getItem("preloaderShown") // Check session storage
  );

  const percentageRef = useRef(null);
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const [complete, setComplete] = useState(false);

  useGSAP(() => {
    if (showPreloader) {
      // Create a timeline for the animation
      const tl = gsap.timeline({
        onComplete: () => {
          setComplete(true);
          // Hide the preloader after it reaches 100%
          gsap.to(preloaderRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.3,
            onComplete: () => {
              if (preloaderRef.current) {
                preloaderRef.current.style.scale = 0;
              }
              // Set the sessionStorage flag to indicate preloader has been shown
              sessionStorage.setItem("preloaderShown", "true");
            },
          });
        },
      });

      // Animate the counter from 0 to 100
      tl.to(
        percentageRef.current,
        {
          duration: 5, // Total duration of the count animation
          innerText: "100%", // Target text
          snap: { innerText: 1 }, // Snap to integer values
          ease: "power1.inOut", // Easing function
          onUpdate: () => {
            // This ensures the percentage symbol stays
            const currentText = percentageRef.current.innerText;
            if (!currentText.includes("%")) {
              percentageRef.current.innerText = `${currentText}%`;
            }
          },
        },
        0
      );

      // Animate the progress bar in sync with the counter
      tl.to(
        progressBarRef.current,
        {
          width: "100%",
          duration: 5,
          ease: "power1.inOut",
        },
        0
      ); // The "0" means this animation starts at the same time as the previous one

      tl.to(percentageRef.current, {
        opacity: 0,
        display: "none",
      });
      tl.to(".progress-bar-container", {
        height: "100vh",
        duration: 1,
        ease: "power1.inOut",
      });
      tl.to(".progress-bar-container", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1,
      });
    }
  }, [showPreloader]);

  // If preloader was already shown in a previous visit, don't render it
  if (!showPreloader) {
    return null;
  }

  return (
    <>
      <div ref={preloaderRef} className="preloader">
        <h1 ref={percentageRef}>0%</h1>
        <div className="progress-bar-container">
          <div
            ref={progressBarRef}
            className="progress-bar"
            style={{
              width: "0%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Preloader;
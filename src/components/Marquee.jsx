import React, { useRef, useContext, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LenisContext } from "../context/LenisContext";

const Marquee = ({ images, height, width, direction = "left" }) => {
  const marqueeRef = useRef(null);
  const forwardAnimationRef = useRef(null);
  const reverseAnimationRef = useRef(null);
  const baseSpeed = 1;
  const maxBoostSpeed = 5;
  const scrollTimeout = useRef(null);
  const lenis = useContext(LenisContext);
  const [scrollDirection, setScrollDirection] = useState(direction === "left" ? "right-to-left" : "left-to-right");

  useGSAP(() => {
    const marquee = marqueeRef.current;
    const marqueeContent = marquee.children[0];
    marquee.appendChild(marqueeContent.cloneNode(true));

    // Calculate the width of one set of images (for animation distance)
    const contentWidth = marqueeContent.offsetWidth;

    // Set initial position based on direction
    if (direction === "left") {
      // For right-to-left movement, start at 0
      gsap.set(marquee, { x: 0 });
    } else {
      // For left-to-right movement, start at -contentWidth so images are visible
      gsap.set(marquee, { x: -contentWidth });
    }

    // Create timeline for animation
    const tl = gsap.timeline({ paused: true });

    // Create the animation based on direction prop
    if (direction === "left") {
      // Right to left movement (default)
      tl.to(marquee, {
        x: -contentWidth,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    } else {
      // Left to right movement
      tl.to(marquee, {
        x: 0, // Move to 0 from -contentWidth
        duration: 40,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          // Reset position to -contentWidth when it reaches 0
          gsap.set(marquee, { x: -contentWidth });
        }
      });
    }

    // Start the animation
    tl.play();

    const handleScroll = ({ velocity }) => {
      if (Math.abs(velocity) > 0.1) {
        const speedBoost = Math.min(Math.abs(velocity) * 2, maxBoostSpeed);

        if (velocity > 0) {
          // Scrolling down - move left to right
          if (scrollDirection !== "left-to-right") {
            // Kill previous animation and create new one in opposite direction
            tl.kill();
            gsap.to(marquee, {
              x: "+=" + contentWidth,
              duration: 40 / (baseSpeed + speedBoost),
              ease: "none",
              repeat: -1,
            });
            setScrollDirection("left-to-right");
          } else {
            // Just adjust speed
            gsap.globalTimeline.getChildren().forEach((animation) => {
              if (animation.vars && animation.targets().includes(marquee)) {
                animation.timeScale(baseSpeed + speedBoost);
              }
            });
          }
        } else {
          // Scrolling up - move right to left
          if (scrollDirection !== "right-to-left") {
            // Kill previous animation and create new one in opposite direction
            tl.kill();
            gsap.to(marquee, {
              x: "-=" + contentWidth,
              duration: 40 / (baseSpeed + speedBoost),
              ease: "none",
              repeat: -1,
            });
            setScrollDirection("right-to-left");
          } else {
            // Just adjust speed
            gsap.globalTimeline.getChildren().forEach((animation) => {
              if (animation.vars && animation.targets().includes(marquee)) {
                animation.timeScale(baseSpeed + speedBoost);
              }
            });
          }
        }
      }

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        // Return to base speed in current direction
        gsap.globalTimeline.getChildren().forEach((animation) => {
          if (animation.vars && animation.targets().includes(marquee)) {
            gsap.to(animation, {
              timeScale: baseSpeed,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        });
      }, 100);
    };

    // Add hover pause functionality
    marquee.addEventListener("mouseenter", () => {
      gsap.globalTimeline.getChildren().forEach((animation) => {
        if (animation.vars && animation.targets().includes(marquee)) {
          animation.pause();
        }
      });
    });

    marquee.addEventListener("mouseleave", () => {
      gsap.globalTimeline.getChildren().forEach((animation) => {
        if (animation.vars && animation.targets().includes(marquee)) {
          animation.play();
        }
      });
    });

    lenis?.on("scroll", handleScroll);

    return () => {
      lenis?.off("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
      tl.kill();
    };
  }, [lenis, scrollDirection, direction]);

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        ref={marqueeRef}
        style={{
          display: "flex",
          width: "fit-content",
          height: height || "auto",
        }}
      >
        <div style={{ display: "flex" }}>
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Logo ${index + 1}`}
              style={{ width: width || "100px", marginRight: "150px" }}
            />
          ))}
        </div>
        <div style={{ display: "flex" }}>
          {images.map((imgSrc, index) => (
            <img
              key={index + images.length}
              src={imgSrc}
              alt={`Logo ${index + 1}`}
              style={{  width: width || "100px", marginRight: "150px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
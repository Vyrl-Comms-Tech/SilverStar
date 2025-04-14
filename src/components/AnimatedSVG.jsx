import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedSVG = () => {
  const pathRef = useRef(null); // Reference for the SVG path
  const svgRef = useRef(null); // Reference for the entire SVG

  useEffect(() => {
    const pathLength = pathRef.current.getTotalLength();

    // GSAP Timeline for smoother control
    const tl = gsap.timeline();

    // Stroke animation (path drawing)
    tl.fromTo(
      pathRef.current,
      {
        strokeDasharray: pathLength, // Set initial dash length
        strokeDashoffset: pathLength, // Hide the path initially
        opacity: 0, // Start invisible
      },
      {
        strokeDashoffset: 0, // Animate to full length (path appears)
        opacity: 1, // Fade in
        duration: 2.5, // Animation duration
        ease: "power2.out", // Smooth drawing effect
      }
    );

    // Additional animations for the SVG (scale, rotation, and bounce)
    tl.fromTo(
      svgRef.current,
      {
        opacity: 0, // Initially invisible
        scale: 0.9, // Start smaller
        rotation: 45, // Tilted
      },
      {
        opacity: 1, // Fade in
        scale: 1.1, // Slight overshoot
        rotation: -15, // Straighten up
        duration: 1.5, // Duration
        ease: "elastic.out(1, 0.5)", // Bouncy effect
      },
      "-=1" // Overlap with stroke animation
    );

    // Pulsating glow effect after the animation finishes
    tl.to(
      svgRef.current,
      {
        scale: 1.05,
        repeat: -1,
        rotation: 15, // Straighten up
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      },
      "+=0.5"
    );
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 961 978"
      fill="none"
      style={{
        width: "clamp(300px, 80vw, 761px)", // Min: 392px, Max: 861px
        height: "clamp(400px, 80vw, 778px)", // Min: 400px, Max: 878px
        display: "block",
        margin: "auto", // Center the SVG
      }}
    >
      <g filter="url(#filter0_f_3_10)">
        <path
          ref={pathRef}
          d="M911 489C911 731.453 718.259 928 480.5 928C242.741 928 50 731.453 50 489C50 246.547 242.741 50 480.5 50C718.259 50 911 246.547 911 489Z"
          fill="url(#paint0_linear_3_10)"
          stroke="black"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_3_10"
          x="0"
          y="0"
          width="861"
          height="878"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_3_10"
          />
        </filter>
        <linearGradient
          id="paint0_linear_3_10"
          x1="518.254"
          y1="48.3351"
          x2="518.254"
          y2="926.335"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DDB1B1" />
          <stop offset="0.245" stopColor="#CF503F" />
          <stop offset="0.510381" stopColor="#791E12" />
          <stop offset="0.780558" stopColor="#0C0B0B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedSVG;

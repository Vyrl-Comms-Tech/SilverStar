import React from "react";
import "../styles/Gridsection2.css";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";

export const Gridsection = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gridsection",
        start: "top center", // Animation starts when the top of trigger element hits the bottom of viewport
        end: "bottom top", // Animation completes when center of trigger element is at center of viewport
      },
    });
    gsap.registerPlugin(MotionPathPlugin);
    gsap.to("#movingEllipse", {
      motionPath: {
        path: "#motionPath",
        align: "#motionPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 5,
      repeat: -1,
      ease: "power1.inOut",
    });

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      // MOBILE ANIMATIONS - only animate opacity and scale
      // Animate all grid boxes simultaneously with the same effect
      tl.fromTo(
        ".gridbox1, .gridbox2, .gridbox3, .gridbox4, .gridbox6, .gridbox7, .gridbox8",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          // stagger: 0.1, // Add a small stagger for smoother animation
          ease: "power2.out",
        },
        "same3"
      );

      tl.fromTo(
        ".gridbox5",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: -0.1,

          // stagger: 0.1, // Add a small stagger for smoother animation
          ease: "power2.out",
        },
        "same3"
      );
    } else {
      tl.fromTo(
        ".gridbox5",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          delay: -0.2,
          duration: 1,
          ease: "power2.out",
        }
      );

      // GridBox1 is already in fromTo format
      tl.fromTo(
        ".gridbox1",
        {
          opacity: 0,
          scale: 0,
          x: "400px",
          y: "400px",
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          // delay: "0",
          duration: 1.5,
          ease: "power2.out",
        },
        "same"
      );

      // Convert GridBox2 to fromTo
      tl.fromTo(
        ".gridbox2",
        {
          opacity: 0,
          scale: 0,
          x: "700px",
          y: 0,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          // delay: "-0.5",
          duration: 1.5,
          ease: "power2.out",
        },
        "same"
      );

      // Convert GridBox3 to fromTo
      tl.fromTo(
        ".gridbox3",
        {
          opacity: 0,
          scale: 0,
          x: "500px",
          y: "-400px",
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          // delay: "-0.5",
          duration: 1.5,
          ease: "power2.out",
        },
        "same"
      );

      // Convert GridBox4 to fromTo
      tl.fromTo(
        ".gridbox4",
        {
          opacity: 0,
          scale: 0,
          x: "0px",
          y: "400px",
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          // delay: "-0.5",
          duration: 1.5,
          ease: "power2.out",
        },
        "same"
      );

      // Convert GridBox6 to fromTo
      tl.fromTo(
        ".gridbox6",
        {
          opacity: 0,
          scale: 0,
          x: "0px",
          y: "-400px",
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          // delay: "-0.5",
          duration: 1.5,
          ease: "power2.out",
        },
        "same"
      );

      // Convert GridBox7 to fromTo
      tl.fromTo(
        ".gridbox7",
        {
          opacity: 0,
          scale: 0,
          x: "-400px",
          y: "300px",
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          // delay: "-0.5",
          duration: 1.5,
          ease: "power2.out",
        },
        "same"
      );

      // Convert GridBox8 to fromTo
      tl.fromTo(
        ".gridbox8",
        {
          opacity: 0,
          scale: 0,
          x: "-700px",
          y: "-400px",
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          // delay: "-0.5",
          duration: 1.5,
          ease: "power2.out",
        },
        "same"
      );
    }
  }, []);
  return (
    <div className="gridsection">
      <div className="col1">
        <div className="gridbox1">
          <div className="gridtext">
            <p>
              Lenovo and Dell - Laptops, PC, Monitors, Servers, Storage,
              Workstations, All in One & Care packs
            </p>
          </div>
          <img src="/img/laptop.avif" alt="" />
        </div>

        <div className="gridbox2">
          <img src="/img/Group 6.avif" alt="" />
          <div className="gridtext">
            <p>
              HP - Laptops, Desktops, Monitors, Printers, Workstations, All in
              One, Care packs & Consumables
            </p>
          </div>
        </div>
        <div className="gridbox3">
          <div className="grid3box1">
            <img src="img/Group 11.avif" alt="" />
          </div>
          <div className="grid3box2">
            <p>
              Microsoft Licenses & Cloud Packages - Enterprise, SMB, Government,
              Educational, NPO
            </p>
          </div>
        </div>
      </div>
      <div className="col2">
        <div className="gridbox4">
          <div className="gridbox4text">
            <h4>Software licenses</h4>
            <h5>
              (Microsoft, Adobe, VMware, AutoCAD, <br /> and more)
            </h5>
          </div>
          <img src="/img/Frame 121.avif" id="rectangleimg" alt="" />
        </div>

        <div className="gridbox5">
          {/* Add a gradient overlay div for enhanced glow effect */}
          <div className="glow-overlay"></div>
          <div className="grid5box">
            <h1>Cisco</h1>
            <h5>
              Cisco - Switches, Access points, Routers, Firewall. Telephony &
              Video Conferencing, Software Support Licensing
            </h5>
          </div>
        </div>
        <div className="gridbox6">
          <div className="grid6box">
            <p>
              Apple - iMac, MacBook Laptops, iPhone, iPad, <br /> Workstations &
              Care packs
            </p>
            <img src="/img/circles.avif" alt="" id="circleimg" />
          </div>
        </div>
      </div>
      <div className="col3">
        <div className="gridbox7">
          <img src="img/group14.avif" alt="" />
          <div className="grid7box1">
            <p>HPE</p>
          </div>
          <div className="grid7box2">
            <svg
              id="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="490"
              height="503"
              viewBox="0 0 490 503"
              fill="none"
            >
              <g filter="url(#filter0_d_260_35)">
                <path
                  id="motionPath"
                  d="M21 440C46 509.5 36.5403 485.337 70.5 333.32C104.46 181.303 204.349 620.728 203.5 333.32C202.651 45.9126 269.136 -25.2775 320.5 217C371.864 459.277 405.826 12.4556 469.5 18"
                  stroke="url(#paint0_linear_260_35)"
                  strokeWidth="2"
                />
              </g>

              <circle
                id="movingEllipse"
                cx="21"
                cy="440"
                r="10"
                fill="#E8361E"
              />

              <defs>
                <filter
                  id="filter0_d_260_35"
                  x="0.059082"
                  y="0.94873"
                  width="489.528"
                  height="501.14"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.909804 0 0 0 0 0.211765 0 0 0 0 0.117647 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_260_35"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_260_35"
                    result="shape"
                  />
                </filter>

                <linearGradient
                  id="paint0_linear_260_35"
                  x1="451.955"
                  y1="7.75042"
                  x2="-68.2588"
                  y2="179.925"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.10086" stop-color="#341E1C" />
                  <stop offset="0.45" stop-color="#952C1E" />
                  <stop offset="0.82645" stop-color="#39201D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="grid7box3">
            <h4 id="newh4">
              HPE - Servers, Storage, Switches, Support Licenses & Care packs
            </h4>
          </div>
        </div>
        <div className="gridbox8">
          <h3>Download Brochure</h3>
          <img src="/img/Group 16.avif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gridsection;

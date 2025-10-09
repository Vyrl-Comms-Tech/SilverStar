import React, { useEffect, useRef } from "react";
import "../styles/hover-image-mobile.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const HoverImageMobile = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Project data with matching IDs from DynamicSection

  const projectData = [
    {
      sno: `01`,
      projectname: "Data Centre Solutions",
      projectdetails: `Design, deploy, and optimize high performance data centers built for reliability, scalability, and efficiency.`,
      projectdetails2: `From servers and storage to virtualization and cooling we create environments that keep IT running 24/7.`,
      img: "/img/service-img1.svg",
    },
    {
      sno: `02`,
      projectname: " End User Computing",
      projectdetails: `Empower your workforce with seamless device management, security, and user support.
 We ensure every desktop, laptop, and mobile device performs flawlessly across your organization.`,
      //   projectdetails2: `With an in-house workshop and expert craftsmen, the division produces everything <br/> from doors and wardrobes to decorative panelling and bespoke furniture.`,
      img: "/img/service-img1.svg",
    },
    {
      sno: `03`,
      projectname: "Cybersecurity Solutions",
      projectdetails: `Protect IT with confidence.`,
      projectdetails2: `Our experts deliver multi-layered security including network defense, endpoint protection, firewalls, and threat monitoring to safeguard your digital assets.`,
      img: "/img/service-img1.svg",
    },
    {
      sno: `04`,
      projectname: "IT Infrastructure & Application Services",
      projectdetails: `From network architecture to enterprise software support, we design and maintain IT foundations that enable productivity, agility, and innovation.`,
      //   projectdetails2: `Backed by Jeikor Group’s proven systems and experience, the Iraq team delivers <br/>reliable civil, industrial, and infrastructure projects with efficiency and quality.`,
      img: "/img/service-img1.svg",
    },
    {
      sno: `05`,
      projectname: "Managed IT Services",
      projectdetails: `Focus on your business while we handle IT.`,
      projectdetails2: `Our proactive maintenance, monitoring, and remote support keep your systems optimized and operational round the clock.`,
      img: "/img/service-img1.svg",
    },
    {
      sno: `06`,
      projectname: "Cloud & Virtualization Solutions",
      projectdetails: `Enable smarter operations with hybrid and cloud first setups that improve flexibility, reduce costs, and ensure business continuity.`,
      img: "/img/service-img1.svg",
    },
    {
      sno: `07`,
      projectname: "Annual Maintenance Contracts (AMC)",
      projectdetails: `Comprehensive maintenance and support plans designed to minimize downtime and extend the life of your IT assets — because prevention is better than repair.`,
      img: "/img/service-img1.svg",
    },
    {
      sno: `08`,
      projectname: "IT Consulting & Integration",
      projectdetails: `Get expert guidance on technology strategy, deployment, and optimization.
 We align your IT environment with your business goals from planning to full-scale implementation.`,
      img: "/img/service-img1.svg",
    },
  ];

  useGSAP(() => {
    const items = containerRef.current.querySelectorAll(
      ".hover-image-mobile-item"
    );

    items.forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item, // Trigger animation for each individual card
          start: "top 80%", // Start animation when the card enters the viewport
          end: "top 50%", // End animation when the card is halfway in the viewport
          scrub: 1,
          // markers: true, // Enable markers for debugging
        },
      });

      tl.from(item, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });
    });
  });

  return (
    <>
      <div className="hover-image-mobile-container" ref={containerRef}>
        <div className="op-top">
          <h1>
            Our Services Because
            <br /> <span id="red">IT Needs Experts</span>
          </h1>
        </div>
        {projectData.map((project, index) => (
          <div
            key={index}
            className="hover-image-mobile-item"
            // onClick={() => {
            //     setTimeout(() => {
            //       navigate(`/Projects/${project.id}`);
            //     }, 600);
            //   }}
            // style={{cursor: 'pointer'}}
          >
            <img src={project.img} alt={project.title} />
            <div className="hover-image-mobile-text">
              <h2>{project.projectname}</h2>
              <p>{project.projectdetails}</p>
              <p>{project.projectdetails2}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HoverImageMobile;

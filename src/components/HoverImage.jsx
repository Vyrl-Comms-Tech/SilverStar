import React from "react";
import "../Styles/Companyholder.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function HoverImage() {
  const data = [
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
    // Select all `.gsapholder` elements
    const cards = gsap.utils.toArray(".gsapholder");

    // Loop through each card and create a ScrollTrigger
    cards.forEach((card) => {
      const belowTopRow = card.querySelector(".belowtoprow");
      const cardRightImg = card.querySelector(".cardright img");
      const cardtext = card.querySelector(".cardleft");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card, // Trigger animation when this card enters the viewport
          start: "top 50%", // Start animation when the top of the card is 80% down the viewport
          end: "top 50%", // End animation when the top of the card is 50% down the viewport
          scrub: false, // No smooth scrolling effect
          markers: false, // Set to true for debugging
        },
      });

      // Add animations to the timeline
      tl.fromTo(
        belowTopRow,
        { clipPath: "inset(0 100% 0 0)" }, // Start with the element hidden
        {
          clipPath: "inset(0 0% 0 0)", // Reveal the element
          duration: 1.25,
          ease: "power3.inout",
        }
      )
        .fromTo(
          cardRightImg,
          { clipPath: "inset(0 100% 0 0)" }, // Start with the image hidden
          {
            clipPath: "inset(0 0% 0 0)", // Reveal the image
            duration: 1.25,
            ease: "power3.inout",
          },
          "<" // Start this animation at the same time as the previous one
        )
        .fromTo(
          cardtext,
          { opacity: 0, x: "-10%" },
          {
            opacity: 1,
            x: "0%",
            duration: 0.7,
            delay: 0.2,
            ease: "power3.inout",
          },
          "<"
        ); // Start this animation at the same time as the previous one
    });
  }, []);

  return (
    <>
      <div className="companyholder">
        <h1>
          Our Services Because
          <br /> <span id="red">IT Needs Experts</span>
        </h1>

        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="gsapholder">
                <div className="belowtoprow">
                  <img src="/img/Line 11.png" alt="" />
                  <span>
                    <p className="aboutp">{item.sno}</p>
                  </span>
                </div>
                <div className="companycard">
                  <div className="cardleft">
                    <h1>{item.projectname}</h1>
                    <h5
                      dangerouslySetInnerHTML={{ __html: item.projectdetails }}
                    ></h5>
                    <h5
                      dangerouslySetInnerHTML={{ __html: item.projectdetails2 }}
                    ></h5>
                  </div>
                  <div className="cardright">
                    <img src={item.img} alt="" />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default HoverImage;


import React, { useRef } from "react";
import "../styles/counter.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Counter = () => {
  const counterData = [
    {
      number: 100,
      label: "Buyers",
      description:
        "The most satisfaction we get every day is through helping our clients, because customer service is in our DNA",
      hasImage: false,
    },
    {
      number: 500,
      label: "Buyers",
      description:
        "The most satisfaction we get every day is through helping our clients, because customer service is in our DNA",
      hasImage: true,
    },
    {
      number: 1000,
      label: "Buyers",
      description:
        "The most satisfaction we get every day is through helping our clients, because customer service is in our DNA",
      hasImage: false,
    },
  ];

  const counterRefs = useRef([]);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Counter animation
    counterData.forEach((item, index) => {
      const counterElement = counterRefs.current[index];
      if (counterElement) {
        gsap.fromTo(
          counterElement,
          { innerText: 0 },
          {
            innerText: item.number,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              once: true,
            },
          }
        );
      }
    });

    // Text animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        once: true,
      },
    });

    tl.from(".counter-child-div h1", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.out",
    })
      .from(".counter-child-div h5", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.out",
      })
      .from(".counter-child-div p", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.out",
      });
  }, []);

  return (
    <div className="counter-main-div" ref={containerRef}>
      {counterData.map((item, index) => (
        <React.Fragment key={index}>
          {/* Render div1, div3, div5 for text data */}
          <div className={`counter-child-div div${index * 2 + 1}`}>
            <h1 className="">
              <span ref={(el) => (counterRefs.current[index] = el)}>
                {item.number}
              </span>
              +
            </h1>
            <h5>{item.label}</h5>
            <p>{item.description}</p>
          </div>

          {/* Render div2 and div4 for images on desktop */}
          {index < counterData.length - 1 && (
            <div className={`counter-child-div div${index * 2 + 2}`}>
              <img src="/img/counter-line.svg" alt="counter line" />
            </div>
          )}

          {/* Add horizontal divider for mobile */}
          {index < counterData.length - 1 && (
            <div className="mobile-divider"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Counter;
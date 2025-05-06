import React, { useEffect } from "react";

import "../styles/footer.css";
import AnimatedSVG from "./AnimatedSVG";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".footer-ball-svg", {
      scrollTrigger: {
        trigger: ".footer",
        start: "start bottom",
        scrub: 1,
        // markers:true
      },
      top: "100%",
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  return (
    <footer className="footer">
      <div className="footer-ball-svg">
        <AnimatedSVG />
      </div>
      <div className="footer-content">
        <div className="logo">
          <img src="/img/logo.svg" alt="Silver Star Logo" />
        </div>
        <div className="footer-content-container">
          <div className="footer-main">
            <h1 className="footer-title">
              LEAVE IT TO <br /> <span className="highlight">US.</span>
            </h1>
            <div className="footer-description">
              <a href="mailto:info@ssedubai.com">
                <button>info@ssedubai.com</button>
              </a>
              <p>
                so you can concentrate on growing your <br /> business
              </p>
              <a href="https://api.whatsapp.com/send?phone=971557665761">
              <button>Call : +971 557665761</button>
              </a>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="social-link"
            >
              <p>facebook</p>
              <img src="/img/footer-arrow.svg" alt="arrow icon" />
            </a>
            <a href="https://x.com/" target="_blank" className="social-link">
              <p>twitter</p>
              <img src="/img/footer-arrow.svg" alt="arrow icon" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="social-link"
            >
              <p>linkedin</p>
              <img src="/img/footer-arrow.svg" alt="arrow icon" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="social-link"
            >
              <p>instagram</p>
              <img src="/img/footer-arrow.svg" alt="arrow icon" />
            </a>
          </div>
        </div>

        <div className="copyright">© silver star electronics 2023</div>
      </div>
    </footer>
  );
};

export default Footer;

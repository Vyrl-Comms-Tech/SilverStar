import React, { useEffect } from "react";

import "../styles/footer.css";
import AnimatedSVG from "./AnimatedSVG";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

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
              <a href="mailto:info@ssedubai.com">info@ssedubai.com</a>
              <div className="div">
                <p>
                  so you can concentrate on growing your <br /> business
                </p>
                <div className="footer-menu-linkss">
                  <p onClick={() => navigate("/")}>Home</p>
                  <p onClick={() => navigate("/about")}>About</p>
                  <p onClick={() => navigate("/services")}>Services</p>
                  <p onClick={() => navigate("/offerings")}>Offerings</p>
                  <p onClick={() => navigate("/careers")}>Careers</p>
                </div>
              </div>

              <a href="https://api.whatsapp.com/send?phone=971557665761">
                Call : +971 557665761
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

        <div className="copyright">
          © silver star electronics {new Date().getFullYear()}
        </div>

        <div
          className="vyrl"
          onClick={() => window.open("https://vyrl.ae", "_blank")}
        >
          website by vyrl.ae
        </div>
      </div>
    </footer>
  );
};

export default Footer;

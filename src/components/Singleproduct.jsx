import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import "../styles/Singleproduct.css";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

function Singleproduct({ onClose }) {
  const modalOverlayRef = useRef(null);
  const modalContainerRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Fade in animation
    gsap.set(modalOverlayRef.current, { opacity: 0 });
    gsap.set(modalContainerRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline();
    tl.to(modalOverlayRef.current, {
      opacity: 1,
      duration: 0.3,
    }).to(modalContainerRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline();
    tl.to(modalContainerRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.3,
    }).to(modalOverlayRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: onClose,
    });
  };

  return (
    <div className="modal-overlay" ref={modalOverlayRef}>
      <div className="modal-container" ref={modalContainerRef}>
        <div className="modal-image-section">
          <img src="/img/Rectangle 42.png" alt="" />
        </div>
        <div className="modal-content-section">
          <div className="close-button-container">
            <button className="close-button" onClick={handleClose}>
              <X className="close-icon" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          <div className="content-body">
            <div className="product-specs">
              <div className="product-title">
                <h2 className="product-name">HP ELITEBOOK 840 G8</h2>
              </div>
              <div className="spec-item">
                <p>Processor: 11th Generation IntelÂ® Coreâ„¢ i7 processor</p>
              </div>
              <div className="spec-item">
                <p>Internal Storage: 512 GB PCIeÂ® NVMeâ„¢ M.2 SSD</p>
              </div>
              <div className="spec-item">
                <p>
                  Graphics: IntelÂ® IrisÂ® Xe Graphics Memory: 16 GB DDR4-3200
                </p>
              </div>
              <div className="spec-item">
                <p>OS: Microsoft Windows 10 Professional</p>
              </div>
              <div className="spec-item">
                <p>Warranty: 3 Years Warranty</p>
              </div>
              <p className="stock-warning">limited stock available</p>
            </div>
            <div className="action-button-container">
              <button className="action-button" onClick={() => navigate("/contact-us")}>Get this deal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singleproduct;

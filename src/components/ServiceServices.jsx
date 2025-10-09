import React, { useState, useRef, useEffect } from "react";
import "../styles/service-services.css";
import { FaPlayCircle } from "react-icons/fa";
import Button from "./Button";

const ServiceServices = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const fullscreenVideoRef = useRef(null);

  // Ensure video element maintains aspect ratio and fills container
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.style.width = "100%";
      videoRef.current.style.height = "100%";
      videoRef.current.style.objectFit = "cover";
    }
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause();
      fullscreenVideoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="service-services">
      <div className="service-services-container">
        {/* Left Section (Section 1) */}
        <div className="service-services-section1">
          <div className="service-services-section1-text">
            <h1>
              <span>our service</span> are designed to take your business to
              next level
            </h1>
            <Button text="Products" />
          </div>
          <div className="service-services-section1-img">
            <img src="/img/service-img1.svg" alt="Laptop display" />
          </div>
        </div>

        {/* Middle Section (Section 2) - Video */}
        <div className="service-services-section2">
          <div className="service-services-section2-video">
            <video
              ref={videoRef}
              src="/img/1.mp4"
              poster="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
              preload="metadata"
            ></video>
          </div>
          <div
            className="service-services-section2-video-arrow"
            onClick={handlePlayPause}
          >
            <FaPlayCircle size={85} />
          </div>
        </div>

        {/* Right Section (Section 3) */}
        <div className="service-services-section3">
          <div className="service-services-section3-text">
            <div className="service-services-section3-img">
              <img src="/img/service-img1.svg" alt="Laptop display" />
            </div>
            <div className="service-services-section3-para">
              {/* <p>
                With our experience and access to the most recent technologies,
                we can constantly update your business IT Solutions, implement
                and manage all your IT Infrastructure , Wireless solutions, On
                Premise Solutions as well as utilise emerging technologies such
                as Cloud Computing, Storage and other Cloud Solutions.
              </p> */}
              <p>
                We combine technology, expertise, and support to help
                organizations build and maintain reliable IT ecosystems.
                <br />
                Whether it’s optimizing infrastructure, managing endpoints, or
                fortifying cybersecurity we make IT simple, scalable, and secure
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Overlay */}
      {isPlaying && (
        <div className="fullscreen-video-overlay" onClick={handleCloseVideo}>
          <video
            ref={fullscreenVideoRef}
            src="/img/1.mp4"
            autoPlay
            className="fullscreen-video"
          />
        </div>
      )}
    </div>
  );
};

export default ServiceServices;

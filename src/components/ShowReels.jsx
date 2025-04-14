import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/showreels.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaPlayCircle } from "react-icons/fa";
import { useGSAP } from "@gsap/react";

const ShowReels = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const slidesContainerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const [size, setSize] = useState(116);
  const [arrowSize, setArrowSize] = useState(53);


  useEffect(() => {
    const matchMedia = window.matchMedia("(max-width: 1550px)");
    
    if (matchMedia.matches) {
      setSize(60);
      setArrowSize(40);  // Changed from 30 to 40 for larger mobile arrows
    } else {
      setSize(116);
      setArrowSize(53);
    }
    
  }, []);

  const videos = ["/img/1.mp4", "/img/3.mp4", "/img/4.mp4", "/img/2.mp4"];

  useGSAP(() => {
    gsap.from(".showreels-heading", {
      scrollTrigger: {
        trigger: ".Showreels-container",
        start: "top center",
        // toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSlide = (direction) => {
    setIsPlaying(false);
    const slideWidth = videoRef.current.offsetWidth;
    let newIndex;

    if (direction === "left") {
      newIndex =
        currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1;
    } else {
      newIndex =
        currentVideoIndex === videos.length - 1 ? 0 : currentVideoIndex + 1;
    }

    gsap.to(slidesContainerRef.current, {
      x: -newIndex * slideWidth,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => setCurrentVideoIndex(newIndex),
    });
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`Showreels-container ${isFullscreen ? "fullscreen" : ""}`}
      ref={containerRef}
    >
      <div className="showreels-heading">
        <div className="showreels-dot"></div>
        <h1>Showreel's</h1>
      </div>
      <div className="showreels-video-section">
        <div
          className="videos-container"
          ref={slidesContainerRef}
          onClick={handlePlayPause}
        >
          {videos.map((videoSrc, index) => (
            <video
              key={index}
              ref={index === currentVideoIndex ? videoRef : null}
              src={videoSrc}
              onEnded={() => setIsPlaying(false)}
            />
          ))}
        </div>
        <div
          className="showreels-video-arrow"
          onClick={handlePlayPause}
          style={{
            opacity: isPlaying ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <FaPlayCircle size={size} />
        </div>
        <div className="showreels-video-zoom" onClick={handleFullscreen}>
          <img src="/img/zoom.svg" alt="zoom icon" />
        </div>
      </div>
      <div className="showreels-arrow-section">
        <div className="arrow-left" onClick={() => handleSlide("left")}>
          <GoArrowLeft size={arrowSize} className="arrow" />
        </div>
        <div className="arrow-right" onClick={() => handleSlide("right")}>
          <GoArrowRight size={arrowSize} className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default ShowReels;

import React, { useEffect, useRef, useState } from "react";
import "../styles/Heroreel.css";
import "../styles/showreels.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaPlayCircle } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Heroreel({ showreel, setshowreel }) {
  console.log(showreel);
  useEffect(() => {
    if (showreel) {
      gsap.to(".heroreel", {
          width: "100%",
          height: "100vh",
          opacity: 1,
          duration: 1,
          display: "block",
          ease: "power2.out",
        });
    } else {

      gsap.to(".heroreel", {
        opacity: 0,
        // width: "0%",
        // height: "0vh",
        duration: 1,
        display: "none",
        ease: "power2.out",
      });
    }
  }, [showreel]);

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const slidesContainerRef = useRef(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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
    setshowreel(false);
  };

  const videos = ["/img/1.mp4", "/img/3.mp4","/img/4.mp4", "/img/2.mp4"];
  return (
    <>
      <div className="heroreel">
        <div className="showreels-video-section">
          <div className="videos-container" ref={slidesContainerRef} onClick={handlePlayPause}>
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
            <FaPlayCircle size={85} />
          </div>
          <div className="showreels-video-zoom" id="herozoom" onClick={handleFullscreen}>
            <img src="/img/zoom.svg" alt="zoom icon" />
          </div>
        </div>
        <div className="showreels-arrow-section" id='heroreelbtn'>
          <div className="arrow-left" onClick={() => handleSlide("left")}>
            <GoArrowLeft size={35} className="arrow" />
          </div>
          <div className="arrow-right" onClick={() => handleSlide("right")}>
            <GoArrowRight size={35} className="arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Heroreel;
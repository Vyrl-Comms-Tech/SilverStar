import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "../styles/partners.css";

const partners = [
  "/img/partners.svg",
  "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1ipeQbFseUM_GzxwMoQj45w9HtAnu4eu5w&s",
  "https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
];

export default function Partners() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % partners.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length);
  };

  return (
    <section className="partners-section">
      <div className="partners-content">
        <div className="partners-info">
          <h1 className="partners-title">
            <span>Partners</span> we share it <br /> with
          </h1>
          <p className="partners-description1">
            We are proud to partner with these businesses. By supporting each
            other, we serve our customers better, and expand within the region.
          </p>
        </div>

        <div className="partners-carousel-container">
          <div className="partner-slider-div">
            {/* Left Arrow */}
            <div className="partners-arrow-left" onClick={handlePrev}>
              <GoArrowLeft size={40} className="arrow" />
            </div>

            {/* Image */}
            <img
              src={partners[currentSlide]}
              alt={`Partner ${currentSlide + 1}`}
            />

            {/* Right Arrow */}
            <div className="partners-arrow-right" onClick={handleNext}>
              <GoArrowRight className="arrow" size={40} />
            </div>
          </div>
        </div>
      </div>
      <p className="partners-description2">
        We are proud to partner with these businesses. By supporting each other,
        we serve our customers better, and expand within the region.
      </p>
    </section>
  );
}
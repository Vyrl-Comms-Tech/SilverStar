import React, { useEffect, useRef, useState } from "react";
import "../styles/services.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/clients.css";
import { Keyboard, Scrollbar } from "swiper/modules";

// It's critical to register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  // Create a ref for the entire section
  const sectionRef = useRef(null);
  // Create a ref for the cards container
  const cardsContainerRef = useRef(null);
  // Create an array to store refs for each card
  const cardRefs = useRef([]);
  // State to track window width for responsive adjustments
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const cards = [
    { type: "transparent", text: "" }, // Card 1
    {
      type: "orange-bg",
      border: "border-top-left",
      number: "01",
      line: "white-line",
      text: "IT hardware and software support",
    }, // Card 2
    {
      type: "glassmorphism-orange",
      number: "02",
      line: "orange-line",
      text: "Cloud services and enterprise server management",
    }, // Card 3
    { type: "transparent", text: "" }, // Card 4
    {
      type: "glassmorphism-white",
      number: "03",
      line: "white-line",
      text: "Structured cabling and infrastructure solutions",
    }, // Card 5
    {
      type: "glassmorphism-white",
      number: "04",
      line: "white-line",
      text: "AV and meeting room solutions",
    }, // Card 6
    {
      add:"add"
    },
    {
      type: "glassmorphism-orange",
      number: "05",
      line: "orange-line",
      text: "Data recovery, storage, and cybersecurity",
    }, // Card 7
    { type: "transparent", text: "", remove: "remove" }, // Card 8
    {
      type: "glassmorphism-orange",
      number: "06",
      line: "orange-line",
      text: "Microsoft Volume Licensing and cloud solutions",
    }, // Card 9
    { type: "transparent", text: "" }, // Card 10
    { type: "transparent", text: "", laptop: "hidden-on-laptop" }, // Card 11
    {
      type: "glassmorphism-white",
      number: "07",
      line: "white-line",
      text: "Remote and onsite IT support anytime you need",
    }, // Card 12
    {
      type: "orange-bg",
      border: "border-top-right",
      number: "08",
      line: "white-line",
      text: "From everyday support to future-proofing your tech  we help you thrive, not just survive.",
    }, // Card 13
    { type: "transparent", text: "", laptop: "hidden-on-laptop" }, // Card 14
    { type: "transparent", text: "", laptop: "hidden-on-laptop" }, // Card 15
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Initialize refs array with the right size
  useEffect(() => {
    // Reset the refs array to ensure it's empty
    cardRefs.current = cardRefs.current.slice(0, cards.length);
  }, [cards]);

  // Set up the animation
  useEffect(() => {
    // Make sure the component is mounted and we have access to the DOM
    if (!cardsContainerRef.current) return;

    // Only show non-transparent cards on mobile/tablet
    const filteredCards =
      windowWidth <= 1024
        ? cards.filter((card) => card.type !== "transparent")
        : cards;

    // Get all card elements that are not transparent
    const visibleCards = cardRefs.current.filter(
      (ref, index) => ref && cards[index].type !== "transparent"
    );

    // Reset all cards to initial state (invisible)
    gsap.set(visibleCards, {
      autoAlpha: 0,
      scale: 0,
      y: 30,
    });

    // Create random order for animation
    const randomOrder = [...visibleCards]
      .map((card, index) => ({ card, index }))
      .sort(() => Math.random() - 0.5)
      .map((item) => item.card);

    // Create the scroll trigger for animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainerRef.current,
        start: "top 80%", // Trigger when the top of the container is 80% down the viewport
        toggleActions: "play none none none", // Play animation once when entering
      },
    });

    // Adjust animation based on screen size
    const duration = windowWidth <= 768 ? 0.6 : 0.8;
    const staggerTime = windowWidth <= 768 ? 0.08 : 0.1;

    // Add animations to timeline with staggered delays
    randomOrder.forEach((card, i) => {
      tl.to(
        card,
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: duration,
          ease: "elastic.out(1,0.3)",
        },
        i * staggerTime
      ); // Staggered start times
    });

    // Cleanup function to kill animations when component unmounts
    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [cards, windowWidth]); // Re-run if cards array or window width changes

  // Set up a card element ref
  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  // Determine which cards to render based on screen size
  // In the renderCards function, update the mobile condition:
  const renderCards = () => {
    if (windowWidth <= 768) {
      // Filter out transparent cards for mobile view
      const coloredCards = cards.filter((card) => card.type !== "transparent");

      return (
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{ enabled: true }}
          breakpoints={{
            768: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          scrollbar={true}
          modules={[Keyboard, Scrollbar]}
          className="mySwiper"
        >
          {coloredCards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className={`service-card ${card.type} ${card.border || ""} ${card.laptop || ""
                  }`}
                ref={(el) => setCardRef(el, index)}
              >
                <h1>{card.number}</h1>
                {card.line && <div className={card.line}></div>}
                <h6>{card.text}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
    // On desktop/tablet, show all cards
    return cards.map((card, index) => (
      <div
        key={index}
        className={`service-card ${card.type} ${card.border || ""} ${card.remove || ""} ${card.add} ${card.laptop || ""
          }`}
        ref={(el) => setCardRef(el, index)}
      >
        <h1>{card.number}</h1>
        {card.line && <div className={card.line}></div>}
        <h6>{card.text}</h6>
      </div>
    ));
  };

  return (
    <>
      <section className="service-section-main-div" ref={sectionRef}>
        <div className="service-section-heading">
          <h1>
            Services that <br />
            <span>do IT</span>
          </h1>
          <p>
            At Silver Star Electronics, our services are designed to evolve with
            your business needs. Our expert engineers deliver end-to-end IT
            management
          </p>
        </div>
        <div className="service-cards-section" ref={cardsContainerRef}>
          {renderCards()}
          {windowWidth > 768 && (
            <div className="service-section-background">
              <h1>Services</h1>
            </div>
          )}
        </div>
        <div className="service-blob">
          <img src="/img/service-blob.avif" alt="" />
        </div>
      </section>
    </>
  );
};

export default Services;

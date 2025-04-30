import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/clients.css";
import { Keyboard, Scrollbar } from "swiper/modules";

const clientContent = [
  {
    h3: "Silver Star Electronics streamlined our entire IT infrastructure within days. Professional, responsive, and highly efficient.",
    h4: "- Ahmed R.",
    p: "Procurement Manager, Al Tayer",
  },
  {
    h3: "Fast deliveries, genuine products, and unmatched customer service. They truly handle IT so we can focus on our growth.",
    h4: "- Sarah",
    p: "perations Director, Apparel Group",
  },
  {
    h3: "We've relied on Silver Star for IT support and product supply for years — they've never let us down",
    h4: "- Manager",
    p: "Emirates",
  },
  {
    h3: "Our cloud migration was made seamless and cost-effective thanks to Silver Star's experienced team",
    h4: "- Mujtaba Abdullah",
    p: "Manager, Vyrl Communications",
  },
  {
    h3: "Choosing SSE was one of our best business decisions. Their 24/7 support ensures our operations never stop",
    h4: "Faisal  Head of IT,",
    p: "Sunset Group",
  },
];

export default function Clients() {
  return (
    <div className="clients-main-div">
      <div className="clients-main-heading">
        <h1>
          Clients <br /> <span>that do it</span>
        </h1>
      </div>
      <div className="clients-blob">
        <img src="/img/clients-blob.svg" alt="blob" />
      </div>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{ enabled: true }}
        breakpoints={{
          600: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
          },
          690: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          890: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          1295: {
            slidesPerView: 3.5,
            slidesPerGroup: 1,
          },
          1700: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        modules={[Keyboard, Scrollbar]}
        className="mySwiper"
      >
        {clientContent.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="client-cards">
              <div className="client-cards-text">
                <div className="client-card-section1">
                  <h4>{client.h3}</h4>
                </div>
                <div className="client-card-section2">
                  <div className="client-card-section2-inner">
                    <div className="client-card-section2-inner-div">
                      {/*  */}
                      <div className="client-card-section2-inner-img">
                        <img
                          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                          alt=""
                        />
                      </div>
                      {/*  */}
                      <div className="client-card-section2-inner-text">
                        <h4>{client.h4}</h4>
                        <h6>{client.p}</h6>
                      </div>
                      {/*  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="clients-last-para">
        <p>
          The most satisfaction we get every day is through helping our clients,
          because customer service is in our DNA. As a reliable IT hardware
          supplier, we ensure to give you a cost-effective solution every time
          you buy from us.
        </p>
      </div>
    </div>
  );
}

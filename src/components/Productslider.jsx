import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/clients.css";
import "../styles/Productslider.css";
import { Keyboard, Scrollbar } from "swiper/modules";
import { secondSetOfImages, firstSetOfImages } from "../utils/marqueeImageSets";
import Marquee from "./Marquee";

import Singleproduct from "./Singleproduct";

export default function Productslider() {
  const [showSingleProduct, setShowSingleProduct] = useState(false);

  const handleProductClick = () => {
    setShowSingleProduct(true);
  };

  const closeSingleProduct = () => {
    setShowSingleProduct(false);
  };

  const clientContent = [
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
    {
      img: "/img/laptop2.avif",
      title: "HP ELITEBOOK 840",
      subtitle: "HP ELITEBOOK 840 G8",
      stock: "Limited stock",
      cta: "Get this deal"
    },
  ];

  return (
    <>
      <div className="Productslider">
        <div className="clients-main-div">
          <div className="clients-main-heading">
            <h1>
              <span id="red">2023 </span> business laptop <br />
              <span>sale</span>
            </h1>
          </div>
          <div className="clients-blob">
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
                  <div className="client-cards-text" id="product-card">
                    <div
                      className="client-card-section1"
                      id="productimageholder"
                    >
                      <img src={client.img} alt={client.title} />
                      <h2>{client.title}</h2>
                    </div>
                    <div>
                      {/* onclick function */}
                      <div
                        className="product-hover-div"
                        onClick={handleProductClick}
                      >
                        <div className="productdetail1">
                          <p>{client.subtitle}</p>
                          <p>+ {client.stock}</p>
                        </div>
                        <div className="productdetail2">
                          <p>+ {client.cta}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {showSingleProduct && <Singleproduct onClose={closeSingleProduct} />}
      <div className="productmarqueeholder">
        <div id="hold">
          <div className="circle"></div>
          <p>
            <span id="red">trusted </span>by the top brands and <br />
            companies all over the world
          </p>
        </div>
        {firstSetOfImages && <Marquee images={firstSetOfImages} height="150px" width="150px" />}
        {secondSetOfImages && <Marquee images={secondSetOfImages} height="150px" width="150px"  direction="right"/>}
      </div>
    </>
  );
}
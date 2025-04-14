import React, { useState, useEffect } from "react";
import Homehero from "../components/Homehero";
import Counter from "../components/Counter";
import Product from "../components/Product";
import Services from "../components/Services";
import Clients from "../components/Clients";
import "../styles/Homehero.css";
// import Clients2 from '../components/Clients2'
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import ShowReels from "../components/ShowReels";
import Partners2 from "../components/Partners2.jsx";
import { Gridsection } from "../components/Gridsection.jsx";

import {
  firstSetOfImages,
  secondSetOfImages,
} from "../utils/marqueeImageSets.js";
import Pagetransition from "../components/Pagetransition.jsx";

export default function Home() {
  // Check if the preloader has been shown before
  const [preloaderAlreadyShown, setPreloaderAlreadyShown] = useState(
    sessionStorage.getItem("preloaderShown") === "true"
  );
  
  useEffect(() => {
    if (!preloaderAlreadyShown) {
      sessionStorage.setItem("preloaderShown", "true");
    }
  }, [preloaderAlreadyShown]);
  
  return (
    <>
      {preloaderAlreadyShown && <Pagetransition />}
      
      <Homehero />
      <div className="home-marquee"></div>
      {/* <div className="home-marquee"></div> */}
      <Marquee images={secondSetOfImages} direction="left" />
      <Counter />
      <Product />
      <Gridsection />
      <Services />
      <ShowReels />
      <Clients />
      <Partners2 />
      <div className="home-marquee"></div>
      <Marquee
        images={firstSetOfImages}
        height="150px"
        width="150px"
        direction="right"
      />
      <Footer />
    </>
  );
}
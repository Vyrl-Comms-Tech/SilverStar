// import React from 'react'
import React from "react";
import "../styles/Homehero.css";
import "../styles/Producthero.css";
import "../styles/Abouthero.css";
import '../styles/contacthero.css'

import Navbar from "./Navbar";
import Marquee from "../components/Marquee";
import ContactUsForm from "./ContactUsForm";
import { firstSetOfImages } from "../utils/marqueeImageSets";
function Contacthero() {
  return (
    <>
      <div className="homehero">
        <Navbar />
        <img src="/img/About blob2.avif" alt="" id="abblob2" />
        {/* <div className="mainhero" id="contact-hero"> */}
          <ContactUsForm />
          {/* <Marquee
            images={firstSetOfImages}
            height="150px"
            width="150px"
            direction="right"
            id="contact-marquee"
          /> */}
        {/* </div> */}
      </div>
      <div className="home-marquee-contact"></div>
      {/* <div className="home-marquee"></div> */}
        <Marquee images={firstSetOfImages} height="150px" width="150px" />
        {/* <Footer /> */}
    </>
  );
}

export default Contacthero;

import React from "react";
import Productpageform from "../components/Productpageform";
import Productpage2hero from "../components/Productpage2hero";
import {
  firstSetOfImages,
  secondSetOfImages,
} from "../utils/marqueeImageSets.js";
import Faq from "../components/Faq.jsx";

import Marquee from "../components/Marquee";
import Productslider from "../components/Productslider.jsx";
import Clients from "../components/Clients.jsx";
import Pagetransition from "../components/Pagetransition.jsx";
import Footer from "../components/Footer.jsx";

function Productpage2() {
  return (
    <>
      <Pagetransition />
      <Productpage2hero />

      <Marquee
        images={firstSetOfImages}
        height="150px"
        width="150px"
        direction="right"
      />
      <Productpageform />
      <Productslider />
      <Clients />
      <Faq />
      <Footer />
    </>
  );
}

export default Productpage2;

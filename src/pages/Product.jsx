import React from "react";
import Producthero from "../components/Producthero";
import Productbelowhero from "../components/Productbelowhero";
import Marquee from "../components/Marquee";
import Gridsection from '../components/Gridsection'
import Productslider from "../components/Productslider";
import { secondSetOfImages } from "../utils/marqueeImageSets";
import Footer from "../components/Footer";
import Pagetransition from "../components/Pagetransition";
export default function Product() {
  return (
    <>
    
    <Pagetransition/>
      <Producthero />
      <Marquee images={secondSetOfImages} height="150px" width="150px" />
      <Productbelowhero />
      <Gridsection/>
      <Productslider />
      <Footer />
    </>
  );
}
import React, { useEffect, useState } from 'react'
import ServiceServices from '../components/ServiceServices'
import Servicehero from '../components/Servicehero'
import Marquee from '../components/Marquee'
import { firstSetOfImages, secondSetOfImages } from '../utils/marqueeImageSets'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Pagetransition from '../components/Pagetransition'
// import Companyholder from '../components/HoverImage'
import HoverImageMobile from '../components/HoverImageMobile'
import HoverImage from '../components/HoverImage'

const Service = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1045);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
   <>
   <Pagetransition/>
   <Servicehero/>
   {/* <Marquee images={secondSetOfImages} direction="left" /> */}
   <div className="home-marquee"></div> 
   <Marquee images={firstSetOfImages} height="150px" width="150px" direction="right" />
   <div className="home-marquee"></div> 
   <ServiceServices/>
  
   {isMobile ? <HoverImageMobile /> : <HoverImage />}
   {/* <Companyholder/> */}
   <Services/>
   <Footer/>
   </>
  )
}

export default Service
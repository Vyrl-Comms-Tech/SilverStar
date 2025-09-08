import React from 'react'
import ServiceServices from '../components/ServiceServices'
import Servicehero from '../components/Servicehero'
import Marquee from '../components/Marquee'
import { firstSetOfImages, secondSetOfImages } from '../utils/marqueeImageSets'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Pagetransition from '../components/Pagetransition'

const Service = () => {
  return (
   <>
   <Pagetransition/>
   <Servicehero/>
   {/* <Marquee images={secondSetOfImages} direction="left" /> */}
   <div className="home-marquee"></div> 
   <Marquee images={firstSetOfImages} height="150px" width="150px" direction="right" />
   <div className="home-marquee"></div> 
   <ServiceServices/>
   <Services/>
   <Footer/>
   </>
  )
}

export default Service
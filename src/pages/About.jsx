import React from 'react'
import AboutSection from '../components/AboutUs'
import Counter from '../components/Counter'
import FAQSection from '../components/Faq'
import Abouthero from '../components/Abouthero'
import Marquee from '../components/Marquee'
import { firstSetOfImages } from '../utils/marqueeImageSets'
import Product from '../components/Product'
import Clients from '../components/Clients'
import Partners from '../components/Partners2'
import Pagetransition from '../components/Pagetransition'
import Footer from '../components/Footer'
const About = () => {
  return (
    <>
    <Pagetransition/>
    <Abouthero/>
    <Counter/>
    <Product/>
    <div className="marquee-gap"></div>
    <Marquee images={firstSetOfImages} height="150px" width="150px" direction="right" />
    <div className="marquee-gap"></div>
    <AboutSection/>
    <Clients/>
    <Partners/>
    <FAQSection/>
    <Footer/>
    </>
  )
}

export default About
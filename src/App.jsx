import React, { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
// import About from './pages/About'
import Product from "./pages/Product";
import Productpage2 from "./pages/Productpage2";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";
import Preloader from "./components/Preloader";
import Singleproduct from "./components/Singleproduct";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
function App() {
  const location = useLocation();
  const lenisRef = useRef(null);

  useGSAP(() => {
    lenisRef.current = new Lenis({
      duration: 0.85, // pehle 1.2 thi
      easing: (t) => 1 - Math.pow(1 - t, 2),
      smooth: true,
    });

    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  // This effect runs whenever the location (route) changes
  useEffect(() => {
    // Get the current pathname
    const currentPath = location.pathname;

    // Store the current path in sessionStorage to compare later
    const previousPath = sessionStorage.getItem("previousPath");

    // If the path has changed and it's not the initial load
    if (previousPath && previousPath !== currentPath) {
      // Save the new path before refreshing
      sessionStorage.setItem("previousPath", currentPath);

      // Perform a hard refresh
      window.location.href = currentPath;
    } else {
      // For initial load, just store the path
      sessionStorage.setItem("previousPath", currentPath);
    }
  }, [location.pathname]);
  return (
    <>
      <Preloader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/services" element={<Service />} />
        <Route path="/products2" element={<Productpage2 />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      {/* <Singleproduct/> */}
    </>
  );
}
export default App;
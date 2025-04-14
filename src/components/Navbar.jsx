import React, { useRef, useState, useEffect } from "react";
import "../styles/Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./Button";

export default function Navbar() {
  const navRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const phoneMenuRef = useRef(null);
  const dropdownRef = useRef(null);
  const productTabRef = useRef(null);
  
  const [showPreloader, setShowPreloader] = useState(
    !sessionStorage.getItem("preloaderShown") // Check session storage
  );
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Create GSAP context for dropdown animation
  useEffect(() => {
    // Initialize dropdown as hidden
    if (dropdownRef.current) {
      gsap.set(dropdownRef.current, {
        opacity: 0,
        y: 0,
        display: 'none'
      });
    }
  }, []);

  // Function to handle mouse enter on products tab
  const handleProductTabEnter = () => {
    if (dropdownRef.current) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 10,
        duration: 0.3,
        ease: "power2.out",
        display: 'block'
      });
    }
  };

  // Function to handle mouse leave on products tab
  const handleProductTabLeave = () => {
    if (dropdownRef.current) {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(dropdownRef.current, { display: 'none' });
        }
      });
    }
  };
  
  const animateRandomly = (element) => {
    // Check if screen width is below 992px
    const isMediumScreen = window.innerWidth < 992;

    // Generate random values for movement
    const randomY = -100 - Math.random() * 15; // Random value between -10 and -25

    // Slow down duration for medium/small screens
    const durationFactor = isMediumScreen ? 1.8 : 1; // Increase duration by 80% for smaller screens
    const duration = (1.5 + Math.random() * 2) * durationFactor;

    // Create the animation
    gsap.to(element, {
      y: randomY,
      duration: duration,
      ease: "sine.inOut",
      onComplete: () => {
        // Animate back to original position with different random values
        const returnDuration = (1.5 + Math.random() * 2) * durationFactor;
        gsap.to(element, {
          y: 0,
          duration: returnDuration,
          ease: "sine.inOut",
          onComplete: () => {
            // When complete, start a new random animation
            animateRandomly(element);
          },
        });
      },
    });
  };

  // Function to animate with random values in the opposite direction
  const animateRandomlyReverse = (element) => {
    // Check if screen width is below 992px
    const isMediumScreen = window.innerWidth < 992;

    // Generate random values for movement (in opposite direction)
    const randomY = 100 + Math.random() * 15; // Random value between 10 and 25

    // Slow down duration for medium/small screens
    const durationFactor = isMediumScreen ? 1.8 : 1; // Increase duration by 80% for smaller screens
    const duration = (1.5 + Math.random() * 2) * durationFactor;

    // Create the animation
    gsap.to(element, {
      y: randomY,
      duration: duration,
      ease: "sine.inOut",
      onComplete: () => {
        // Animate back to original position with different random values
        const returnDuration = (1.5 + Math.random() * 2) * durationFactor;
        gsap.to(element, {
          y: 0,
          duration: returnDuration,
          ease: "sine.inOut",
          onComplete: () => {
            // When complete, start a new random animation
            animateRandomlyReverse(element);
          },
        });
      },
    });
  };

  // Toggle mobile menu function
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    
    if (!menuOpen) {
      // Open menu
      gsap.to(phoneMenuRef.current, {
        right: "0%",
        duration: 0.5,
        ease: "power2.Out"
      });
    } else {
      // Close menu
      gsap.to(phoneMenuRef.current, {
        right: "-100%",
        duration: 0.5,
        ease: "power2.Out"
      });
    }
  };

  useGSAP(() => {
    const navItems = navRef.current.querySelectorAll("li");
    if(showPreloader){

      let tl=gsap.timeline(
        {
          delay:8
        }
        
      )
      tl.fromTo(
        navItems,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.15,
          ease: "power2.out",
        },
        "same"
      );
      
      tl.fromTo(
        "#navbtn",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.9,
          duration: 0.6,
          stagger: 0.18,
          ease: "power2.out",
        },
        "same"
      );
      
      tl.fromTo("#navlogo", {
        opacity: 0,
        scale: 0,
      },{
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
  
      },
      "same");
    }else{
      let tl=gsap.timeline(
        {
          delay:1.5
        }
      )
      tl.fromTo(
        navItems,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.15,
          ease: "power2.out",
        },
        "same"
      );
      
      tl.fromTo(
        "#navbtn",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.9,
          duration: 0.6,
          stagger: 0.18,
          ease: "power2.out",
        },
        "same"
      );
      
      tl.fromTo("#navlogo", {
        opacity: 0,
        scale: 0,
      },{
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
  
      },
      "same");
      
    }
   
    
    // Start the blob animations
    if (blob1Ref.current) {
      animateRandomly(blob1Ref.current);
    }
    
    if (blob2Ref.current) {
      animateRandomlyReverse(blob2Ref.current);
    }
    
    // Cleanup function
    return () => {
      gsap.killTweensOf(blob1Ref.current);
      gsap.killTweensOf(blob2Ref.current);
      gsap.killTweensOf(dropdownRef.current);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <a href="/">
          <img src="/img/Logo.png" alt="" id="navlogo" />
        </a>
        <div className="ulholder">
          <ul ref={navRef}>
            <NavLink to="/" >
              <li className="oxygen-light-font" >Home</li>
            </NavLink>
            <NavLink to="/about">
              <li className="oxygen-light-font">About</li>
            </NavLink>
            <NavLink to="/services">
              <li className="oxygen-light-font">Services</li>
            </NavLink>
            <div 
              ref={productTabRef}
              onMouseEnter={handleProductTabEnter}
              onMouseLeave={handleProductTabLeave}
              className="product-tab-container"
            >
              <NavLink to="/products" id="producttab">
                <li className="oxygen-light-font">Products <img src="/img/dropdown.png" alt="" /></li>
              </NavLink>
              <div className="dropdown" ref={dropdownRef}>
                <p  onClick={()=>navigate('/products2')}>Business laptop</p>
                <p onClick={()=>navigate('/products2')}>Apple products</p>
              </div>
            </div>
            <NavLink to="/contact-us">
              <li className="oxygen-light-font">Contact</li>
            </NavLink>
          </ul>
          {/* <button >Let's Talk</button> */}
          <Button id="navbtn" onClick={()=>navigate('/contact-us')} text="Let's talk"/>

          {/* Hamburger Menu */}
          <label className="burger" htmlFor="burger">
            <input 
              type="checkbox" 
              id="burger" 
              checked={menuOpen} 
              onChange={toggleMobileMenu}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
      {/* Phone navbar */}
      <div className="phonemenu" ref={phoneMenuRef}>
        <img
          src="/img/Rectangle 2.png"
          alt=""
          id="blob1"
          ref={blob1Ref}
        />
        <img
          src="/img/Rectangle 1.png"
          alt=""
          id="blob2"
          ref={blob2Ref}
        />
        <div className="phoneholder">
          <NavLink to="/" onClick={toggleMobileMenu} >
            <h1>Home</h1>
          </NavLink>
          <NavLink to="/about" onClick={toggleMobileMenu}>
            <h1>About</h1>
          </NavLink>
          <NavLink to="/services" onClick={toggleMobileMenu}>
            <h1>Services</h1>
          </NavLink>
          <NavLink to="/products" onClick={toggleMobileMenu}>
            <h1>Products</h1>
          </NavLink>
          <NavLink to="/contact-us" onClick={toggleMobileMenu}>
            <h1>Contact</h1>
          </NavLink>
        </div>
      </div>
    </>
  );
}
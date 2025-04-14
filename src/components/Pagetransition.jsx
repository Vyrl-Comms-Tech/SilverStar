import React from 'react';
import '../styles/pagechange.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Pagetransition() {
    const tl = gsap.timeline();
    
    useGSAP(() => {
        // First animation: Reveal the centerpage by animating clipPath from 0% to 100% height
        tl.to('.centerpage', {
            clipPath: 'inset(0 0 0 0)', // Fully visible
            duration: 1,
            ease: 'power2.inOut',
            delay:'-1'
        });
        
        // Second animation: Hide the centerpage by animating clipPath back to 0% height (from bottom)
        tl.to('.centerpage', {
            clipPath: 'inset(0 0 100% 0)', // Clip from bottom, revealing what's behind
            duration: 1.5,
            // delay: 0.2,
            ease: 'power2.inOut',
            onComplete: () => {
                tl.to('.pagetransition', {
                    opacity: 0,
                    scale: 0,
                    display: 'none',
                    duration: 0.5,
                    ease: 'power1.out',
                });
            }
        });
    }, []);
    
    return (
        <>
            <div className="pagetransition">
                <div className="centerpage"></div>
            </div>
        </>
    );
}

export default Pagetransition;
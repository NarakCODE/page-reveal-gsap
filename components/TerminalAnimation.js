"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TerminalAnimation = () => {
    const letterRefs = useRef([]);
    const blockLeftRef = useRef(null);
    const blockRightRef = useRef(null);

    useEffect(() => {
        gsap.from(letterRefs.current, {
            y: -20,
            opacity: 0,
            ease: "power3.inOut",
            stagger: 0.1,
            duration: 0.8,
        });

        gsap.to([".top-left", ".top-right"], {
            top: "0",
            ease: "power3.inOut",
            delay: 2,
            duration: 2,
        });

        gsap.to(".bottom-right", {
            bottom: "0",
            ease: "power3.inOut",
            delay: 2,
            duration: 2,
        });

        gsap.to(".top-left", {
            left: "0",
            ease: "power3.inOut",
            delay: 4,
            duration: 2,
        });

        gsap.to(".top-right", {
            right: "0",
            ease: "power3.inOut",
            delay: 4,
            duration: 2,
        });

        gsap.to(".bottom-right", {
            right: "0",
            ease: "power3.inOut",
            delay: 4,
            duration: 2,
        });

        gsap.to(blockLeftRef.current, {
            left: "-50%",
            ease: "power3.inOut",
            delay: 4,
            duration: 2,
        });

        gsap.to(blockRightRef.current, {
            right: "-50%",
            ease: "power3.inOut",
            delay: 4,
            duration: 2,
        });
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                playsInline
                muted
                loop
                className="w-full h-full object-cover fixed top-0 left-0 -z-10"
            >
                <source src="/video/jennie-beats.mp4" type="video/mp4" />
            </video>

            <div className="absolute top-1/2 w-full h-screen flex justify-around text-white uppercase text-xs">
                <p>
                    LA 3214, <br />
                    TYO 9217
                </p>
                <p>thinking about the future</p>
                <p>
                    enter <br />
                    termuinal®
                </p>
            </div>

            <div className="w-full h-screen">
                <div
                    ref={blockLeftRef}
                    className="fixed w-1/2 h-screen z-10 bg-white left-0"
                ></div>
                <div
                    ref={blockRightRef}
                    className="fixed w-1/2 h-screen z-10 bg-white right-0"
                ></div>
            </div>

            <div className="absolute inset-0 z-20">
                <div className="relative w-full h-full">
                    <div
                        ref={(el) => (letterRefs.current[0] = el)}
                        className="letter top-left absolute z-[1000] text-8xl text-white mix-blend-difference top-[20%] left-[42%]"
                    >
                        T
                    </div>
                    <div
                        ref={(el) => (letterRefs.current[1] = el)}
                        className="letter top-right absolute z-[1000] text-8xl text-white mix-blend-difference top-[20%] right-[42%]"
                    >
                        2
                    </div>
                    <div
                        ref={(el) => (letterRefs.current[2] = el)}
                        className="letter bottom-right absolute z-[1000] text-8xl text-white mix-blend-difference bottom-[32%] right-[42%]"
                    >
                        7
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminalAnimation;

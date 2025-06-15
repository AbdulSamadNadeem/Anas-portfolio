import React, { useRef } from "react";
import { tools } from "../../Constants/app";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Work_Stack = () => {
  const headRef = useRef(null);
  const textRef = useRef(null);
  const iconsRef = useRef([]);

  useGSAP(() => {
    
    gsap.from(headRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
      delay:1
    });

   
    gsap.from(textRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
      delay:0.7
    });

   
    gsap.from(iconsRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      delay: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="flex flex-col items-center mt-12 gap-16 max-w-6xl w-full">
      
        <div>
          <h1
            ref={headRef}
            className="text-3xl md:text-4xl text-white text-center font-semibold"
          >
            Work Experience
          </h1>
          <h2
            ref={textRef}
            className="text-base md:text-lg text-white text-center mt-6 leading-relaxed"
          >
            As a <span className="text-[#7127BA]">digital marketer</span>, I aim to
            create campaigns that not only drive results, but also make a real
            difference by promoting accessibility and user-focused communication.
          </h2>
        </div>

       
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full px-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              ref={(el) => (iconsRef.current[index] = el)}
              className="text-4xl md:text-5xl transition-transform duration-300 hover:scale-110"
              style={{ color: tool.color }}
            >
              {tool.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work_Stack;

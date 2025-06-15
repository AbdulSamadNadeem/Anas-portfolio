import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Aboutme = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const detailRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

    tl.from(containerRef.current, { opacity: 0, y: 40 })
      .from(imageRef.current, { x: -50, opacity: 0 }, "-=0.5")
      .from(contentRef.current, { x: 50, opacity: 0 }, "-=0.8")
      .from(detailRef.current, { opacity: 0, y: 30 }, "-=0.5");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div
        ref={containerRef}
        className="flex flex-col items-center mt-8 md:mt-0 px-4 md:px-8 gap-16 max-w-5xl w-full"
      >
     
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full">
          <div className="w-32 md:w-48" ref={imageRef}>
            <img
              src="/Images/Me.png"
              alt="Anas Irshad"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div
            ref={contentRef}
            className="flex flex-col gap-6 text-center md:text-left"
          >
            <div>
              <h1 className="text-sm md:text-lg text-white">
                Hello! I am{" "}
                <span className="text-[#7127BA] font-bold">Anas Irshad</span>
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-sm md:text-base text-white font-light">
                A Digital Marketer who{" "}
              </h1>
              <h1 className="text-2xl md:text-4xl text-white font-bold leading-snug">
                who sells the story <br /> before the{" "}
                <span className="text-[#7127BA]">product</span>
              </h1>
              <h1 className="text-sm md:text-lg text-white">
                Because attention is currency{" "}
                <span className="font-bold text-2xl md:text-3xl text-[#7127BA]">
                  • • • • • •
                </span>
              </h1>
            </div>
          </div>
        </div>

     
        <div
          ref={detailRef}
          className="flex flex-col items-start w-full text-left text-white px-4 md:px-0"
        >
          <h1 className="text-3xl font-semibold">
            I am a{" "}
            <span className="text-[#7127BA] font-bold">Digital Marketer</span>
          </h1>
          <h2 className="text-sm mt-2">
            Currently, I'm working as a freelance Digital Marketer.
          </h2>
          <p className="mt-4 text-base max-w-xl leading-relaxed">
            A certified Digital Marketer with nearly 1 year of hands-on
            experience. I help businesses grow online by crafting strategies
            that connect with the right audience and drive real results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

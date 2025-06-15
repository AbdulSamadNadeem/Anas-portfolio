import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { FaInstagram, FaDribbble, FaGoogle, FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import gsap from 'gsap'

const Project = () => {
    const project=  useRef(null)
  
  const projects = [
    {
      title: "Google Ads Campaign",
      desc: "A result-driven Google Ads campaign crafted to maximize ROI through targeted keywords, smart bidding, and compelling ad copy. Focused on driving qualified traffic and increasing conversions across search and display networks.",
      file: "/public/Work/google ads project.pdf",
      image: "/Images/Screenshot (75).png",
      reverse: false,
    },
    {
      title: "Social Media Posts",
      desc: "Creative and engaging social media content tailored for brand awareness and audience engagement. Designed to align with platform trends while maintaining consistent brand voice and visual identity..",
      file: "/Work/social media posts.pdf",
      image: "/Images/Screenshot (77).png",
      reverse: true,
    },
  ];
 

  return (
    <>
      <div className="flex flex-col items-center mt-12 px-4 md:px-8 gap-20">
        <div className="text-center">
          <h1 className="text-lg text-[#7127BA]">Featured Project</h1>
          <h1 className="text-3xl text-[#CCD6F6]">Example Projects</h1>
        </div>

        {projects.map((project, index) => (
          <div
          ref={project}
            key={index}
            className={`flex flex-col md:flex-row ${
              project.reverse ? "md:flex-row-reverse" : ""
            } items-center gap-8 w-full`}
          >
            <div className="md:w-1/2">
              <h2 className="text-xl text-[#CCD6F6] mb-4">{project.title}</h2>
              <p className="text-sm text-gray-300 bg-[#1a0b2e]/20 p-4 rounded-lg shadow-md shadow-[#7127BA]/30">
                {project.desc}
              </p>
            </div>

            <div className="md:w-1/2 group cursor-pointer relative">
              <a href={project.file} download>
                <img
                  src={project.image}
                  alt="Project preview"
                  className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-white text-sm font-light">
                  Click to Download
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <footer className=" text-white px-6 py-12 text-center flex flex-col items-center gap-6">
        <h2 className="text-xl font-bold font-text_font">Contact</h2>

        <p className="max-w-xl text-sm font-light leading-relaxed text-gray-300">
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design. Or have a project
          in mind? Let's connect.
        </p>

        <p className="text-sm text-gray-400 font-light">
        anusirshad917@gmail.com
        </p>

        <div className="flex gap-6 mt-2 text- text-white">
          <a
            href="https://www.instagram.com/shasmedia.official?igsh=MWJ2Ym9reDZmemFoZA==
"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="hover:text-[#E1306C] transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/company/sha-s-media/"
            target="_blank"
            rel="noreferrer"
          >
            <LiaLinkedin className="hover:text-blue-600 transition duration-300" />
          </a>
          <a
            href="https://www.facebook.com/share/15gF2cZYxk/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="hover:text-blue-600 transition duration-300" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Project;

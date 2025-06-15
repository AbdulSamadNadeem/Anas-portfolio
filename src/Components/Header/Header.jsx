import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const logo = useRef(null);
  const header_ref = useRef(null);
  const navs_ref = useRef(null);
  const tagline = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.from(header_ref.current, {
      y: -100,
      duration: 1,
    });
    timeline.from(logo.current, {
      opacity: 0,
      duration: 1,
    });
    const navItems = gsap.utils.toArray(navs_ref.current?.children || []);
    timeline.from(navItems, {
      y: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.3,
    });
    timeline.from(tagline.current, {
      opacity: 0,
      duration: 0.4,
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div
        ref={header_ref}
        className="bg-[#1A0B2E] text-white flex items-center justify-between px-6 py-4 shadow-md fixed w-full top-0 z-50"
      >
        
        <div className="flex flex-col gap-1">
          <h1 ref={logo} className="text-2xl font-light">
            Anas Irshad
          </h1>
          <p ref={tagline} className="text-red-900 font-light text-sm">
            Built Different
          </p>
        </div>

       
        <ul
          ref={navs_ref}
          className="hidden md:flex gap-12 text-white font-light text-lg"
        >
          <li className="cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("about")}>About</li>
          <li className="cursor-pointer" onClick={() => scrollToSection("lab")}>Lab</li>
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-[#1A0B2E] text-white px-6 py-4 z-40">
          <ul className="flex flex-col gap-6 text-lg">
            <li className="cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("about")}>About</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("lab")}>Lab</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

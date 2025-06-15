import React, { useRef } from "react";
import Header from "../Components/Header/Header";
import Aboutme from "../Components/AboutMe/Aboutme";

const Home = () => {
  const home = useRef(null)
  const about = useRef(null)
  return (
    <div className="">
      <div ref={home}>
        <Header />
      </div>
      <div ref={about}>
        <Aboutme />
      </div>
    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import { ShowScreen } from "./Context/LoaderContext";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import './index.css'
import Work_Experience from "./Pages/Work_Experience"
const App = () => {
  const { isloader, setisloader } = useContext(ShowScreen);
  console.log(isloader);
  return (
    <div
      className="h-screen w-screen overflow-x-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse at top left, #0A0415 , #1A0B2E , #0A0415 )",
      }}
    >
      {!isloader && 
     <>
      <Home/>
      <Work_Experience/>
     </>
      }
      <LandingPage />
    </div>
  );
};

export default App;

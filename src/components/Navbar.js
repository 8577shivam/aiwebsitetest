import React, { useState } from "react";
import Menubar from "./Menubar";
import Popupitem from "./Popupitem";
import menudata from "../data/Navbarmenu.json";

const Navbar = () => {
  const [randomTranslateX, setRandomTranslateX] = useState(0);
  const [randomTranslateY, setRandomTranslateY] = useState(0);

  const getRandomValue = () => {
    return Math.floor(Math.random() * 100) - 10;
  };

  const handleHover = () => {
    setRandomTranslateX(getRandomValue());
    setRandomTranslateY(getRandomValue());
  };

  const navmenudata = menudata.menu1;
  const navmenudata2 = menudata.menu2;

  return (
    <div className="navbar">
      <h2
        onMouseEnter={handleHover}
        style={{
          transform: `translate(${randomTranslateX}px, ${randomTranslateY}px)`,
          transition: "transform 0.4s ease-in",
        }}
      >
        AiPatrn
      </h2>
      <div className="rightnav">
        <Menubar navmenudata={navmenudata} />
        <Menubar navmenudata={navmenudata2} />
        <Popupitem />
      </div>
    </div>
  );
};

export default Navbar;

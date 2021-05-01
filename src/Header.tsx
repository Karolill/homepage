import React from "react";
import bled from "./other-files/bled.jpg";
import ljubljana from "./other-files/ljubljana.jpg";
import trondheim from "./other-files/trondheim.jpg";
import london from "./other-files/london.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div id="header">
      <div id="writing">
        <h2 id="welcome">Welcome</h2>
      </div>
      <img id="bled" src={bled} alt="Bled" />
      <img id="ljubljana" src={ljubljana} alt="ljubljana" />
      <img id="trondheim" src={trondheim} alt="trondheim" />
      <img id="london" src={london} alt="london" />
      <svg className="arrows">
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  );
};

export default Header;

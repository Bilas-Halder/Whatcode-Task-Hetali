import React, { useEffect, useState } from "react";
import "./HRLine.css";
import logo from "../../images/logo.png";
import whiteLogo from "../../images/whiteLogo.png";

const HRLine = ({ color = "#4cbeea93", size = 100 }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setMatches(e.matches);
      console.log(e.matches);
    });
  }, []);

  const gradient =
    color === "white"
      ? `linear-gradient(95deg, #004a74 0%, ${color} 50%, #004a74 100%)`
      : `linear-gradient(95deg, #ffffff 0%, ${color} 50%, #ffffff 100%)`;

  return (
    <div className="hr_line">
      <div className="sqr_logo">
        <div
          className="before_sqr_logo"
          style={{
            width: !matches ? "100px" : size,
            background: gradient,
          }}
        ></div>
        <img src={color === "white" ? whiteLogo : logo} alt="logo" />
        <div
          className="after_sqr_logo"
          style={{
            width: !matches ? "100px" : size,
            background: gradient,
          }}
        ></div>
      </div>
    </div>
  );
};

export default HRLine;

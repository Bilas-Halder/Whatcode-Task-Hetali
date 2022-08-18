import React, { useEffect, useState } from "react";
import "./HRLine.css";
import logo from "../../images/logo.png";

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

  return (
    <div className="hr_line">
      <div className="sqr_logo">
        <div
          className="before_sqr_logo"
          style={{
            width: !matches ? "100px" : size,
            background: `linear-gradient(95deg, #ffffff 0%, ${color} 50%, #ffffff 100%)`,
          }}
        ></div>
        <img src={logo} alt="logo" />
        <div
          className="after_sqr_logo"
          style={{
            width: !matches ? "100px" : size,
            background: `linear-gradient(95deg, #ffffff 0%, ${color} 50%, #ffffff 100%)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default HRLine;

import React from "react";
import "./AboutCard.css";

const AboutCard = ({ img, children }) => {
  return (
    <div className="about_card">
      <div className="about_card_img">
        <img src={img} alt="" />
      </div>
      <div className="about_card_text">{children}</div>
    </div>
  );
};

export default AboutCard;

import React from "react";
import "./Vision.css";
import backgroundImg from "../../images/visionBG.jpg";

const Vision = (props) => {
  return (
    <>
      <div className="vision">
        <div className="vis_bg_img">
          <img src={backgroundImg} alt="" />
        </div>
        <div className="vis_content">
          <h1>Vision</h1>
          <p>
            <div className="container d-flex justify-content-center">
              <p className="vis_text">
                We aim to ensure top-class service to our stakeholders &
                diversify our business to other service-oriented sectors with
                the ultimate goal of achieving customer satisfaction & end-user
                interaction.
              </p>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default Vision;

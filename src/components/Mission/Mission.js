import React, { useState } from "react";
import HRLine from "../HRLine/HRLine";
import "./Mission.css";
import missionImg from "../../images/missionImg.jpg";

const Mission = (props) => {
  const [activeBox, setActiveBox] = useState(0);
  const active = "expendable_box active_box";
  const inactive = "expendable_box";

  const handleClick = (index) => {
    setActiveBox(index);
  };

  return (
    <>
      <div className="sec_title w-100 text-center my-4">Mission</div>
      <HRLine />
      <div className="mission_gird">
        <div className="mission_img">
          <img src={missionImg} alt="mission" />
        </div>
        <div className="mission_content">
          {/* expendable box can be optimized using separate component */}
          <div
            className={activeBox === 0 ? active : inactive}
            onClick={() => handleClick(0)}
          >
            <div className="box_title">Personalized</div>
            <div className="box_content">
              <p>
                Our core idealogy is to provide personalised homes to meet the
                very specific needs of residents.
              </p>
            </div>
          </div>

          <div
            className={activeBox === 1 ? active : inactive}
            onClick={() => handleClick(1)}
          >
            <div className="box_title">Committed</div>
            <div className="box_content">
              <p>
                Our core idealogy is to provide personalised homes to meet the
                very specific needs of residents.
              </p>
            </div>
          </div>
          <div
            className={activeBox === 2 ? active : inactive}
            onClick={() => handleClick(2)}
          >
            <div className="box_title">Quality & Service Oriented</div>
            <div className="box_content">
              <p>
                Our core idealogy is to provide personalised homes to meet the
                very specific needs of residents.
              </p>
            </div>
          </div>
          <div
            className={activeBox === 3 ? active : inactive}
            onClick={() => handleClick(3)}
          >
            <div className="box_title">Timely </div>
            <div className="box_content">
              <p>
                Our core idealogy is to provide personalised homes to meet the
                very specific needs of residents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;

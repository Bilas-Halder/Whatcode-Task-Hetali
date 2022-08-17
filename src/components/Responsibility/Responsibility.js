import React, { useState } from "react";
import HRLine from "../HRLine/HRLine";
import "./Responsibility.css";
import resImg from "../../images/resImg.jpg";

const Responsibility = (props) => {
  const [activeBox, setActiveBox] = useState(0);
  const active = "expendable_box res_active_box active_box";
  const inactive = "expendable_box";

  const handleClick = (index) => {
    setActiveBox(index);
  };
  return (
    <>
      <div className="responsibility">
        <div className="sec_title w-100 text-center my-4">
          Corporate Social Responsibility
        </div>
        <HRLine />

        <div className="res_gird">
          <div className="res_content">
            {/* expendable box can be optimized using separate component */}
            <div
              className={activeBox === 0 ? active : inactive}
              onClick={() => handleClick(0)}
            >
              <div className="box_title">
                Education for the under-privileged
              </div>
              <div className="box_content">
                <p>
                  We believe that our future lies in the holistic educational
                  foundation of the youth and we have nurtured that cause by
                  providing the necessary books and monetary support to the
                  under-privileged children of Mumbai & also at several villages
                  in Gujarat. As the Trustees of the H A Desai Boarding School
                  in Matunga, Mumbai, we have been providing living and
                  hospitality services to the academically bright students from
                  the weaker monetary sections of the society.
                </p>
              </div>
            </div>

            <div
              className={activeBox === 1 ? active : inactive}
              onClick={() => handleClick(1)}
            >
              <div className="box_title">Support for Rural Farmers</div>
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
              <div className="box_title">Spiritual</div>
              <div className="box_content">
                <p>
                  Our core idealogy is to provide personalised homes to meet the
                  very specific needs of residents.
                </p>
              </div>
            </div>
          </div>

          <div className="res_img">
            <img src={resImg} alt="responsibility" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Responsibility;

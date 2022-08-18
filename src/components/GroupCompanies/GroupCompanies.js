import React from "react";
import "./GroupCompanies.css";
import HRLine from "../HRLine/HRLine";
import img1 from "../../images/grp1.png";
import img2 from "../../images/grp2.png";
import img3 from "../../images/grp3.png";

const GroupCompanies = (props) => {
  return (
    <>
      <div className="grp">
        <div className="sec_title w-100 text-center my-4">Group Companies</div>
        <HRLine />
        <div className="grp_grid">
          <div className="grp_grid_item">
            <div className="grp_grid_item_img">
              <img src={img1} alt="img1" />
            </div>
            <div className="grp_grid_item_title">Agriculture</div>
          </div>
          <div className="grp_grid_item">
            <div className="grp_grid_item_img">
              <img src={img2} alt="img2" />
            </div>
            <div className="grp_grid_item_title">Fuel</div>
          </div>
          <div className="grp_grid_item">
            <div className="grp_grid_item_img">
              <img src={img3} alt="img3" />
            </div>
            <div className="grp_grid_item_title">Foods</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupCompanies;

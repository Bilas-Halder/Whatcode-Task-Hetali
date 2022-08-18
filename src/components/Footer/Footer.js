import React from "react";
import "./Footer.css";
import HRLine from "../HRLine/HRLine";
import whiteLogo from "../../images/whiteLogoWithName.png";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer_grid">
        <div className="footer_logo">
          <img src={whiteLogo} alt="logo" />
        </div>
        <div className="footer_links">
          <table>
            <tr>
              <th>Quick Links </th>
              <th>Flats in Mumbai </th>
              <th>Projects in Mumbai</th>
            </tr>
            <tr>
              <td>Contact Us</td>
              <td>1BHK Andheri West</td>
              <td>Ongoing</td>
            </tr>
            <tr>
              <td>About Us</td>
              <td>2 BHK Andheri West </td>
              <td>Upcoming</td>
            </tr>
            <tr>
              <td>Testimonial</td>
              <td>3 BHK Andheri West</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Gallery</td>
              <td>1BHK Goregaon East</td>
              <td>Hetali Blessings</td>
            </tr>
            <tr>
              <td>Site Map</td>
              <td>2BHK Goregaon East</td>
              <td>Hetali Anuchhaya</td>
            </tr>
          </table>
        </div>
      </div>
      <HRLine size={600} color={"white"} />
      <div className="footer_text">
        Copyright © 2022 Hetali Enterprises - All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;

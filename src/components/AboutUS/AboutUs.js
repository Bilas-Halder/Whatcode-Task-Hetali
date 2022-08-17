import React from "react";
import HRLine from "../HRLine/HRLine";
import "./AboutUs.css";
import aboutBanner from "../../images/aboutBanner.jpg";
import clock from "../../images/clock.png";
import star from "../../images/star.png";
import handShake from "../../images/handShake.png";
import home from "../../images/home.png";
import AboutCard from "./AboutCard";

const AboutUs = (props) => {
  return (
    <>
      <div className="about w-100 text-center my-4">About Us</div>
      <HRLine />
      <div className="about_banner">
        <img src={aboutBanner} alt="" />
      </div>
      <div className="about_content">
        <div className="container d-flex justify-content-center">
          <p className="about_text">
            We endeavour to build homes which make it's residents happy and
            proud of their address. Residents are at heart of everything we do,
            we build homes to live in, not houses to stay in.
          </p>
        </div>
        <HRLine size={500} />

        <div className="container d-flex justify-content-center">
          <div className="grid_system">
            <AboutCard img={clock}>
              Our track record has been impeccable with project completion on
              time and have surpassed expectations many a time, society members
              have positively received our redevelopment plans and encourage our
              modern and urbane designs to their neighbours.
            </AboutCard>

            <AboutCard img={star}>
              The Hetali Group is a redeveloper like no other with a profound
              focus on quality and long term satisfaction of its residents.
            </AboutCard>
            <AboutCard img={handShake}>
              They just don't endeavour but build homes which make it's
              residents proud of their address by putting home-owners at the
              heart and soul of everything they do from start to finish and post
              completion.
            </AboutCard>
            <AboutCard img={home}>
              Hetali Group lives by the ethos of building homes to live and not
              houses to stay in.
            </AboutCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

import React from "react";
import "./Message.css";
import founder from "../../images/founder.png";
import HRLine from "../HRLine/HRLine";

const Message = (props) => {
  return (
    <>
      <div className="msg_container">
        <div className="msg_container_light">
          <div className="sec_title w-100 text-center my-4">
            Founder’s Message
          </div>
          <div className="founders_img">
            <img src={founder} alt="" />
          </div>
          <HRLine />
          <div className="founders_name">Mr. Jayesh H. Pandya</div>
          <div className="w-100 px-0 px-lg-5 mx-0 mx-lg-5">
            <div className="founders_quote">
              “When a customer buys a home, he is giving up a major chunk of his
              life's savings to do so. It is imperative to give him exactly what
              he looks for in his home.”
            </div>
          </div>
          <div className="founders_msg container px-0 px-lg-5 mx-0 mx-lg-5">
            We bring to our clients much wanted human values, integrity, trust
            and an assurance of responsibility all coupled with our expertise in
            construction, engineering & management. Our biggest assets have
            always been our small but highly trained team of professional
            managers and engineers who are backed by a very able team of
            administrators. We have a clear vision about building on our
            strengths and our achievements while holding dear to us our basic
            principles
          </div>
        </div>
        <HRLine size={600} />
      </div>
    </>
  );
};

export default Message;

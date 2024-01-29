import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
import CoachRegister from "../../../pages/CoachRegister/CoachRegister";

const Join = () => {
  const form = useRef();

  const handleJoin = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_extzqa9",
        "template_5fbt3fr",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log("done");
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div className="Join mb-12" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>Our Club</span>
          <span className="stroke-text">as Coach?</span>
        </div>
      </div>
      <div className="right-j">
        <CoachRegister />
      </div>
    </div>
  );
};

export default Join;

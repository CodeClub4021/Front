import React from "react";
import image1 from "../../../assets/gym-win/image1.png";
import image2 from "../../../assets/gym-win/image2.png";
import image3 from "../../../assets/gym-win/image3.png";
import image4 from "../../../assets/gym-win/image4.png";
import nb from "../../../assets/gym-win/nb.png";
import adidas from "../../../assets/gym-win/adidas.png";
import nike from "../../../assets/gym-win/nike.png";
import tick from "../../../assets/gym-win/tick.png";
import "./Reasons.css";
const Reasons = ({ data }) => {
  console.log(data);
  return (
    <div className="Reasons px-8 py-10">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">How to </span>
          <span>reach us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <div className="flex items-center gap-2">
              <span className="">phone :</span>
              {data[0]?.phone_number ? (
                <span>{data[0]?.phone_number}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <img src={tick} alt="" />
            <div className="flex items-center gap-2">
              <span className="">City :</span>
              {data[0]?.city ? <span>{data[0]?.city}</span> : ""}
            </div>
          </div>
          <div>
            <img src={tick} alt="" />
            <div className="flex items-center gap-2">
              <span className="">Address :</span>
              {data[0]?.address ? <span>{data[0]?.address}</span> : ""}
            </div>
          </div>
          <div>
            <img src={tick} alt="" />
            <div className="flex items-center gap-2">
              <span className="">Work Hours :</span>
              {data[0]?.address ? <span>{data[0]?.work_hours}</span> : ""}
            </div>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;

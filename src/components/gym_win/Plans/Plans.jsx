import React from "react";
import "./Plans.css";
import { plansData } from "../../../assets/gym-win/data/plansData";
import whiteTick from "../../../assets/gym-win/whiteTick.png";

const Plans = ({ data }) => {
  return (
    <div className="plans-container px-8 py-10">
      <div className="plans-blur-1 blur"></div>
      <div className="plans-blur-2 blur"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">now withus</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>

            <span>
              ${/* {plan.price} */}
              {i === 0 && data[0]?.tier1_tuition && data[0]?.tier1_tuition}
              {i === 1 && data[0]?.tier2_tuition && data[0]?.tier2_tuition}
              {i === 2 && data[0]?.tier3_tuition && data[0]?.tier3_tuition}
            </span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits </span>
            </div>
            <button className={"btn"}>Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;

import React from "react";
import gym from "../../assets/videos/gym.mp4";
import "./landing.css";

function Land() {
    return (
        <div className="land">
            {/* <div className="overlay"></div> */}
            <div className="wrapper">
                <video src={gym} autoPlay loop muted />
            </div>
            <div className="content">
                <div className="comment">
                    <div className="motto">THE PATH TO BETTER LIFE</div>
                    <br/>
                    <h2 className="no1">Community of code club</h2>
                    <br/>
                    <p className="no2">
                        Welcome to the ultimate destination for fitness enthusiasts and sports lovers! <br/>
                        Dive into a world of cutting-edge workouts, expert training advice and a community <br/>
                        that shares your passion for a healthier lifestyle.
                    </p>
                    <div className="start">
                        <button className="button" target="_self" href="/map">
                            learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Land;
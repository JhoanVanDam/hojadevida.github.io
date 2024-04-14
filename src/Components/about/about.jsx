import React from "react";
import "./about.css";
import avatar from "../assets/avatar (6).webp";
import { Button, Tooltip } from "keep-react";

const About = () => {
    return (
        <div className="about-main" id="sobremi">
            <div className="about-description">
                <Tooltip
                    content="Me gusta programar :)"
                    trigger="hover"
                    placement="right"
                    animation="duration-300"
                    style="dark"
                >
                    <img src={avatar} alt="jhoan-ico" className="hover-avatar" />
                </Tooltip>
            </div>
        </div>
    );
};

export default About;

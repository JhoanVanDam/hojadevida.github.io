import React, { Component } from "react";
import style from "./about.css";
import jhoan from "./jhoan.jpg";
class about extends Component {
    render() {
        return (
            <div className="about-main">
                <div className="about-img">
                    <img src={jhoan} alt="logo" />
                </div>
                <div className="about-description">

                </div>
            </div>
        );
    }
}
export default about;
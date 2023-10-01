import React from "react";
import "./App.css";
import me from './images/me.png';

const SideNavResume = () => {
    return (
        <div className="side-nav">
            <img src={me} alt="me" id="me-image" width={125} height={125}></img>
            <br></br>
            <div className="resume-content-wrapper">
                <div id="first-name">Martin</div>
                <div id="last-name">Tulala</div>
                <div className="resume-side-text" id="job-title">Business Analyst II</div>
                <div className="resume-side-spacer"></div>
                <div id="resume-side-header">Contact</div>
                <div className="resume-side-text" id="email">
                    <b>Email:</b> m2tk16@gmail.com
                </div>
                <div className="resume-side-text" id="phone">
                    <b>Phone:</b><br></br>609.234.4377
                </div>
                <div className="resume-side-text" id="address">
                    <b>Address:</b><br></br>400 Forest Park Lane, Old Bridge, NJ, 08857
                </div>
            </div>
        </div>
    )
};


export default SideNavResume;
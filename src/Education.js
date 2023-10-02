import React from "react";
import "./App.css";


const Education = (props) => {
    return (
        <div className="resume-content">
            <div className="education-box-container">
                <div className="education-title">
                    Education
                </div><hr className="hr"></hr>
                <div className="education-box-wrapper">
                    {props.education.map((row) => {
                        return (
                            <div className="education-grouper left">
                                <div className="education-box header">{row.start_year}{" - "}{row.end_year}</div>
                                <div className="education-box row"><b>{row.major}</b></div>
                                <div className="education-box row">{row.school}</div>
                            </div>
                        )
                    })}
                    <div className="education-grouper right">
                        <div className="education-box experience">{"Experience"}</div>
                        <div className="education-box row">
                            {"After graduating from Pemberton in 2006, I attended a community college. While a degree was never earned, the fundamentals were learned."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Education;
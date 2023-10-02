import React from "react";
import "./App.css";


const JobHistory = (props) => {
    return (
        <div className="job-history-content">
            <div className="job-history-box-container">
                <div className="job-history-title">
                    Job History
                </div><hr className="hr"></hr>

                <div className="job-history-box-wrapper">
                    {props.jobHistory.map((row) => {
                        return (
                            <div className="job-history-grouper left">
                                <div className="job-history-box header">{row.business_title}</div>
                                <div className="job-history-box row"><b>{row.start_date}</b></div>
                                <div className="job-history-box row">{row.end_date}</div>
                            </div>
                        )
                    })}
                    <div className="job-history-grouper right">
                        <div className="job-history-box experience">{"Experience"}</div>
                        <div className="job-history-box row">
                            {"After starting Aamazon in the summer of 2014, I was able to learn the fundamental basic about warehouseing. During my tenure at amazon of almost 10 years, I have learned how to understand, analaysize and create comprehensive visuals and data taylored to the business needs"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default JobHistory;
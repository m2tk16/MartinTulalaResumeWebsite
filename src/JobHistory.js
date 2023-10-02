import React from "react";
import "./App.css";


const JobHistory = (props) => {
    return (
        <div className="job-history-content">
            <div className="job-history-box-container">
                <div className="job-history-title">
                    Job History
                </div><hr className="hr"></hr>

                <div className="education-box-wrapper">
                    {props.education.map((row) => {
                        return (
                            <div className="job-history-grouper left">
                                <div className="job-history-box header">{row.start_year}{" - "}{row.end_year}</div>
                                <div className="job-history-box row"><b>{row.major}</b></div>
                                <div className="job-history-box row">{row.school}</div>
                            </div>
                        )
                    })}
                    <div className="job-history-grouper right">
                        <div className="job-history-box experience">{"Experience"}</div>
                        <div className="job-history-box row">
                            {"After graduating from Pemberton in 2006, I attended a community college. While a degree was never earned, the fundamentals were learned."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default JobHistory;
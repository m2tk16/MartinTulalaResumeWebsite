import React, { useEffect, useState} from "react";
import "./App.css";
import me from './images/me.png';

const Resume = () => {
    const [history, setHistory] = useState([]);

   
    useEffect(() => {
        const fetchJobHistory = async () => {
            // Need to give permissoin to url
            const response = await fetch('https://7wrtgtu4c8.execute-api.us-east-1.amazonaws.com/default/getSchoolHistory');
            const data = await response.json();
            setHistory(data.Items)
            console.log(data.Items);
            return data.Items
        };
        fetchJobHistory()
    }, []);
   


    return (
        <div className="body">
            <div className="side-nav">
                <img src={me} alt="me" id="me-image" width={175} height={175}></img>
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
                    <div className="resume-side-text" id="address">
                        <b>Address:</b><br></br>400 Forest Park Lane, Old Bridge, NJ 08857
                    </div>
                </div>
            </div>
            <div className="resume-content">
                <div className="school-box-conatiner">
                    <div className="education-title">
                        Education
                    </div>
                    {history.map((row) => {
                        return (
                            <div className="school-box-wrapper">
                                <div className="school-box header">{row.start_year}{" - "}{row.end_year}</div>
                                <div className="school-box row"><b>{row.major}</b></div>
                                <div className="school-box row">{row.school}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};


export default Resume;
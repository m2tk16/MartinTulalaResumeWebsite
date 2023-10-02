import React, { useEffect, useState} from "react";
import "./App.css";
import Education from './Education';
import JobHistory from './JobHistory';
import SideNavResume from './SideNavResume';


const Resume = () => {
    const [education, setEducation] = useState([]);
    useEffect(() => {
        const fetchEducation = async () => {
            // Need to give permissoin to url
            const response = await fetch('https://7wrtgtu4c8.execute-api.us-east-1.amazonaws.com/default/getSchoolHistory');
            const data = await response.json();
            setEducation(data.Items)
            console.log(data.Items);
            return data.Items
        };
        fetchEducation()
    }, []);

    return (
        <div className="resume-body">
            <SideNavResume />
            <div className="resume-wrapper">
                <JobHistory education={education} />
                <Education education={education} />
            </div>
        </div>
    )
};


export default Resume;
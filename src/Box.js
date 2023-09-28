import React from "react";
import "./App.css";

const Box = (props) => {
    return ( 
        <div className="box-class">
            {props.data}
        </div>
    )
}

export default Box;
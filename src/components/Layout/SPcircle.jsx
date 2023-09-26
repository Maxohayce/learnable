import React from "react";
import "./Layout.css";

const circle = ({ header, background, text }) => {
    return(
        <div className={`circle ${background}`}>
            <h5 className={text}>{header}</h5>
            <p className={text}>What to expect</p>
        </div>
    );
}

export default circle;
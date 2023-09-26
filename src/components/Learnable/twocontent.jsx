import React from "react";

import "./content.css";

const Twocontent = ({ header, firstpara, secondpara}) => {
    return(
        <div className="two-content">
            <h4>{header}</h4>
            <p>{firstpara}</p>
            <p>{secondpara}</p>
        </div>
    );
}


export default Twocontent;
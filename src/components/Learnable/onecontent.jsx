import React from "react";

import "./content.css";

const Onecontent = ({ title, content }) => {
    return(
        <div className="One-content">
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
}

export default Onecontent;
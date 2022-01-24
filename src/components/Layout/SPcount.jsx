import { counter } from "@fortawesome/fontawesome-svg-core";
import React from "react";

const Count = ({number, title}) => {
    return(
        <div className="count">
            <h3>{number}</h3>
            <p>{title}</p>
        </div>
    );
}

export default Count;
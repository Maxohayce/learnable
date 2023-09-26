import React from "react";
import { Link } from "react-router-dom";
import Twocontent from "./twocontent";

import "./content.css";



const Linkcontent = ({ title, firstText, secondText, path, headText }) => {
    return(
        <div className="link-content">
            <p>{title}</p>
            <Twocontent 
                header={headText}
                firstpara={firstText}
                secondpara={secondText}
            />
            <Link className="link" to={path}>learn more</Link>
        </div>
    );
}

export default Linkcontent;
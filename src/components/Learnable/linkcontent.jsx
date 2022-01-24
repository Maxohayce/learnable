import React from "react";
import { Link } from "react-router-dom";
import Twocontent from "./twocontent";



const Linkcontent = ({ title, firstText, secondText, path, headText }) => {
    return(
        <div className="">
            <p>{title}</p>
            <Twocontent 
                header={headText}
                firstpara={firstText}
                secondpara={secondText}
            />
            <Link to={path}>learn more</Link>
        </div>
    );
}

export default Linkcontent;
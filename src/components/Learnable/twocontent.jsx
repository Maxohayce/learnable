import React from "react";

const Twocontent = ({ header, firstpara, secondpara}) => {
    return(
        <div>
            <h4>{header}</h4>
            <p>{firstpara}</p>
            <p>{secondpara}</p>
        </div>
    );
}


export default Twocontent;
import React from "react";
import "./Feature.css";


const Features = ({src}) => {
    return(
        <div className="Feature">
            <img  src={src} alt="Feature"/>
            <a href="www.inspiration.com" >Inspiration</a>
            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
            <p>David Mong, Apr 9, 2020</p>
        </div>
    );
}


export default Features;
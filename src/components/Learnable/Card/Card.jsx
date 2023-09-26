import React from "react";
import "./Card.css"


const Card = ({background, title, key, text}) => {
    return(
        <div key={key} className={`card ${background}`}>
            <h4 className={text}>{title}</h4>
        </div>
    );
}

export default Card;
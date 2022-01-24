import React from "react";


const Card = ({cName, title, key}) => {
    return(
        <div key={key} className={cName}>
            <h4>{title}</h4>
        </div>
    );
}

export default Card;
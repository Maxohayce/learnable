import React from "react";


import Card from "../Card/Card";
import "../devcards/Devcards.css";


const descards = [
    {
        title: "Design user interfaces",
        textColor: "whiteText",
        backColor: "firstBg",
    },
    {
        title: "craft user experiences",
        textColor: "whiteText",
        backColor: "orangeBg",
    },
    {
        title: "apply design thinking",
        textColor: "blueText",
        backColor: "yellowBg",
    },
    {
        title: "Build Information architecture",
        textColor: "defaultText",
        backColor: "ashBg",
    },
    {
        title: "Copy write for projects",
        textColor: "whiteText",
        backColor: "redBg",
    },
    {
        title: "Brand products",
        textColor: "whiteText",
        backColor: "greenBg",
    },
]




const DesCards = () => {
    return(
        <div className="cards">
            {descards.map((item) => {
                return(
                    <Card 
                        title={item.title}
                        background={item.backColor}
                        text={item.textColor}
                        key={item.i}
                    />
                );
            })}
        </div>
    );
}

export default DesCards;
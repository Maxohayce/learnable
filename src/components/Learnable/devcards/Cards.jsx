import React from "react";
import Card from "../Card/Card";

import "./Devcards.css";



const devcards = [
    {
        title: "Program with javascript",
        textColor: "whiteText",
        backColor: "firstBg",
    },
    {
        title: "Version Control with git",
        textColor: "whiteText",
        backColor: "greenBg",
    },
    {
        title: "Web Development with React",
        textColor: "whiteText",
        backColor: "yellowBg",
    },
    {
        title: "Building APIs with NodeJs",
        textColor: "defaultText",
        backColor: "apiBg",
    },
    {
        title: "Managing Data with mongoDB",
        textColor: "whiteText",
        backColor: "ashBg",
    },
    {
        title: " Deploying with Heroku",
        textColor: "whiteText",
        backColor: "orangeBg",
    },
]




const DevCards = () => {
    return(
        <div className="cards">
            {devcards.map((item) => {
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


export default DevCards;
import React from "react";
import "./Learngrid.css";

import Rectangle21 from "../../Images/Rectangle21.png";
import Rectangle22 from "../../Images/Rectangle22.png";
import Rectangle23 from "../../Images/Rectangle23.png";
import Rectangle24 from "../../Images/Rectangle24.png";
import Rectangle25 from "../../Images/Rectangle25.png";
import Rectangle26 from "../../Images/Rectangle26.png";
import Rectangle27 from "../../Images/Rectangle27.png";
import Rectangle28 from "../../Images/Rectangle28.png";
import Rectangle29 from "../../Images/Rectangle29.png";
import Rectangle30 from "../../Images/Rectangle30.png";
import Rectangle31 from "../../Images/Rectangle31.png";
import Rectangle32 from "../../Images/Rectangle32.png";
import Rectangle33 from "../../Images/Rectangle33.png";
import Rectangle34 from "../../Images/Rectangle34.png";
import Rectangle35 from "../../Images/Rectangle35.png";
import Rectangle36 from "../../Images/Rectangle36.png";


const learnImages = [
    { 
        image: Rectangle21,
        id: "j4yam"
    },
    {
        image: Rectangle22,
        id: "sa92n"
    },
    { 
        image: Rectangle23,
        id: "nmd9i"
    },
    {
        image: Rectangle24,
        id: "n3sja"
    },
    { 
        image: Rectangle25,
        id: "an8dn"
    },
    {
        image: Rectangle26,
        id: "a9db2"
    },
    { 
        image: Rectangle27,
        id: "r0zux"
    },
    {
        image: Rectangle28,
        id: "que7w"
    },
    { 
        image: Rectangle29,
        id: "jhe2r"
    },
    {
        image: Rectangle30,
        id: "a9i8d"
    },
    { 
        image: Rectangle31,
        id: "aoi4d"
    },
    {
        image: Rectangle32,
        id: "hdy7w"
    },
    { 
        image: Rectangle33,
        id: "khd73"
    },
    {
        image: Rectangle34,
        id: "pao3e"
    },
    { 
        image: Rectangle35,
        id: "jhu21"
    },
    {
        image: Rectangle36,
        id: "kje3i"
    },
]

const LearnGrid = () => {


    return(
        <div>
            {learnImages.map((item) =>
                <img src={item.image} alt="fun" key={item.id}/>
            )}
        </div>
    );
}

export default LearnGrid;
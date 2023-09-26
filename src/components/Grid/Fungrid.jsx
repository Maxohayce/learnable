import React from "react";
import "./Fungrid.css";

import Rectangle1 from "../../Images/Rectangle1.png";
import Rectangle2 from "../../Images/Rectangle2.png";
import Rectangle3 from "../../Images/Rectangle3.png";
import Rectangle4 from "../../Images/Rectangle4.png";
import Rectangle5 from "../../Images/Rectangle5.png";
import Rectangle6 from "../../Images/Rectangle6.png";
import Rectangle7 from "../../Images/Rectangle7.png";
import Rectangle8 from "../../Images/Rectangle8.png";
import Rectangle9 from "../../Images/Rectangle9.png";
import Rectangle10 from "../../Images/Rectangle10.png";
import Rectangle11 from "../../Images/Rectangle11.png";
import Rectangle14 from "../../Images/Rectangle14.png";
import Rectangle15 from "../../Images/Rectangle15.png";
import Rectangle16 from "../../Images/Rectangle16.png";
import Rectangle17 from "../../Images/Rectangle17.png";
import Rectangle18 from "../../Images/Rectangle18.png";


const funImages = [
    { 
        image: Rectangle1,
        id: "jhu21"
    },
    {
        image: Rectangle2,
        id: "kje3i"
    },
    { 
        image: Rectangle3,
        id: "j4yam"
    },
    {
        image: Rectangle4,
        id: "sa92n"
    },
    { 
        image: Rectangle5,
        id: "nmd9i"
    },
    {
        image: Rectangle6,
        id: "n3sja"
    },
    { 
        image: Rectangle7,
        id: "an8dn"
    },
    {
        image: Rectangle8,
        id: "a9db2"
    },
    { 
        image: Rectangle9,
        id: "r0zux"
    },
    {
        image: Rectangle10,
        id: "que7w"
    },
    { 
        image: Rectangle11,
        id: "jhe2r"
    },
    {
        image: Rectangle14,
        id: "a9i8d"
    },
    { 
        image: Rectangle15,
        id: "aoi4d"
    },
    {
        image: Rectangle16,
        id: "hdy7w"
    },
    { 
        image: Rectangle17,
        id: "khd73"
    },
    {
        image: Rectangle18,
        id: "pao3e"
    }
]

const FunGrid = () => {


    return(
        <div>
            {funImages.map((item) =>
                <img src={item.image} alt="fun" key={item.id}/>
            )}
        </div>
    );
}

export default FunGrid;
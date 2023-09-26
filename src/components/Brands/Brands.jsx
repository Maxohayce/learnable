import React from "react";
import "./Brands.css";


import interact from "../../Images/interact.png";
import mentioned from "../../Images/Mentioned.png";
import ux from "../../Images/ux.png";
import post from "../../Images/post.png";
import web from "../../Images/web.png";
import wired from "../../Images/wired.png";


const Brands = () => {
    return(
        <section className="brands">
            <img  src={mentioned} alt="mentioned in" />
            <img src={post} alt="post-company" />
            <img src={ux} alt="ux-magazine" />
            <img src={wired} alt="wired" />
            <img src={web} alt="web" />
            <img src={interact} alt="interact" />
        </section>
    );
}

export default Brands;
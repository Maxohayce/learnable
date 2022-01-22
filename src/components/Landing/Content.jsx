import React from "react";
import { Link } from "react-router-dom";
import "./Content.css";



const Content = ({ title, content, link, type }) => {
    return (
                <div className="landingSectionContent">
                    <h3 className={type}>{title}</h3>
                    <p className={type}>{content}</p>
                    <Link to="/learnable"><p>{link}</p></Link>
                </div>
    )
}

export default Content;
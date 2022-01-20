import React from "react";
import { Link } from "react-router-dom";
import "./Content.css";



const Content = ({ title, content, link }) => {
    return (
                <div className="landingSectionContent">
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <Link to="/learnable"><p>{link}</p></Link>
                </div>
    )
}

export default Content;
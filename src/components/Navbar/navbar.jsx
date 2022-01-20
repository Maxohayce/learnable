import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Logo from "../../Images/GenesysLogo.png";


const Menu = [
    
    {
        title: "Learnable",
        path: "/learnable",
        id: 12,
    },
    {
        title: "Agora",
        path: "/agora",
        id: 13,
    },
    {
        title: "Startzone",
        path: "/startzone",
        id: 14,
    },
    {
        title: "About",
        path: "/about",
        id: 15,
    },
    {
        title: "Contact",
        path: "/contact",
        id: 16,
    },
]

const Navbar = () => {
    return (
        <div className="Nav">
            <Link to="/"><img src={Logo} alt="genesysLogo" className="Logo" /></Link>
            <ul className="NavItems">
                {Menu.map((item) => {
                    const { id, path, title} = item;
                    return (
                        <li key={id} >
                            <Link className="navLink" to={path}>
                                {title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className="devNav">
                <p>build a product with</p>
                <Link to="/devstudio"><button>DEVSTUDIO</button></Link>
            </div>
        </div>
    )
};

export default Navbar;
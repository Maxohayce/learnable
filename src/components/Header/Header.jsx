import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const headerMenu = [
    
    {
        title: "Home",
        path: "/learnable",
        id: 12,
    },
    {
        title: "Software Developers",
        path: "/developer",
        id: 13,
    },
    {
        title: "Product Designers",
        path: "/designer",
        id: 14,
    },
    {
        title: "Apply",
        path: "/apply",
        id: 15,
    },
    {
        title: "Journal",
        path: "/journal",
        id: 16,
    },
    {
        title: "Faq",
        path: "/faq",
        id: 17,
    },
]

const Header = () => {
    return (
        <div className="Header">
            <ul className="HeaderItems">
                {headerMenu.map((item) => {
                    const { id, path, title} = item;
                    return (
                        <li key={id} >
                            <Link className="HeaderLink" to={path}>
                                {title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default Header;
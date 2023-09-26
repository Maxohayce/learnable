import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

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
    const [navBar, setNavBar] = useState(false);



    const handleToggle = () => {
        if(navBar === false) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    const closeMenu = () => {
        setNavBar(false)
    }

    return (
        <div className="Nav">
            <Link to="/"><img src={Logo} alt="genesysLogo" className="Logo" /></Link>
            <ul className="NavItems">
                {Menu.map((item) => {
                    const { id, path, title} = item;
                    return (
                        <li key={id} >
                            <Link onClick={() => closeMenu()} className="navLink" to={path}>
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
            <button className="hamburger" onClick={() => handleToggle()}><FontAwesomeIcon icon={navBar ? faXmark : faBars} /></button>
        </div>
    )
};


export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin, faVimeo } from "@fortawesome/free-brands-svg-icons";

import footer from "../../Images/footer.png";

    const icons = [
        {
            title: faTwitter,
            link: "",
            cName: "twitter-social"
        },
        {
            title: faFacebook,
            link: "",
            cName: "facebook-social"
        },
        {
            title: faLinkedin,
            link: "",
            cName: "linkedin-social"
        },
        {
            title: faInstagram,
            link: "",
            cName: "instagram-social"
        },
        {
            title: faYoutube,
            link: "",
            cName: "youtube"
        },
        {
            title: faVimeo,
            link: "",
            cName: "vimeo-social"
        }
    ]
const Footer = () => {
    return (
        <section className="Footer">
            <div>
                <div>
                    <Link to="/developer">BUILD SOFTWARE</Link>
                    <Link to="/designer">DESIGN DIFFERENT</Link>
                    <Link to="/apply">APPLY YOUR KNOWLEDGE</Link>
                    <Link to="/faq">FAQ</Link>
                </div>
                <div>
                    <p>Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria</p>
                    <Link to="/contact">GET IN TOUCH</Link>
                </div>
                <div>
                    <img src={footer} alt="footer"/>
                    <span>
                        <p>Learnable is proud to be a collaborative effort of all the arms of our product team</p>
                        <Link to="devstudio">HEAD TO DEVSTUDIO</Link>
                    </span>
                </div>
            </div>
            <div>
                <span>
                    {icons.map((item, i) => {
                        const { link, cName, title } = item;
                        return(
                            <a key={i} href={link} className={cName}>
                                <FontAwesomeIcon icon={title} />
                            </a>
                        );
                    })}
                </span>
                <p>©GENESYS 2020 PRIVACY STATEMENT</p>
            </div>
        </section>
    )
};

export default Footer;


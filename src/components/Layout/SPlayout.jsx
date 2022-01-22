import React from "react";
import "./Layout.css";

import Avatar from "../../Images/Avatar.png";


const Layout = ({quote, header, headerText, picture}) => {
    return(
        <div className="Layout">
            <section className="Layout-top">
                <div>
                    <h1>{header}</h1>
                    <p>{headerText}</p>
                </div>
                <img src={Avatar} alt="avatar" />
            </section>
            <h3>{quote}</h3>
            <section className="Layout-bottom">
                <img src={picture}/>
                <div className="Expectations">
                    <h5>We expect you to</h5>
                    <p>Play nice with other people.</p>
                    <p>Be an actively engaging person. That means you are present, motivated, and social. You know how to communicate effectively with your teammates.</p>
                    <p>Love to code. You understand the basics of programming and object-oriented design and development.</p>
                    <p>Have an eye for detail. Your keen observation helps you catch discrepancies and fix them quickly.</p>
                    <p>Be innately curious. Your love for technology is insatiable, so you’re always researching and experimenting. Learning new technical skills while on the job is something you look forward to.</p>
                    <p>Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing.</p>
                </div>
            </section>
        </div>
    );
}

export default Layout;
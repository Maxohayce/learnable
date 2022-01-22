import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import skip from "../../Images/Skip.png";
import landing from "../../Images/Landing.jpg";
import learn from "../../Images/learn.jpg";
import Agora from "../../Images/Agora.jpg";
import startZone from "../../Images/startzone.jpg";
import ignite from "../../Images/ignite.jpg";
import codeVille from "../../Images/codeville.jpg";
import Pink from "../../Images/pink.jpg";
import team from "../../Images/team.jpg";
import Content from "../../components/Landing/Content";
import { Subscribe } from "../../components";




const Home = () => {
    return (
        <div>
            <section className="landing">
                <div className="landingContent">
                    <h3>Genesys provides opportunities for young Nigerian techies and opportunities to grow and innovate.</h3>
                    <p>We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.</p>
                </div>
                <div className="landingImage">
                    <img src={skip} alt="skip" />
                    <img src={landing} alt="landingImage" />
                </div>
            </section>
            <section className="Learn">
                <div className="landingSection">
                    <img src={learn} alt="learn" />
                    <Content title="Learnable"
                        content="Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it."
                        link="learn more"
                    />
                </div>
            </section>
            <section className=" Agora">
                <div className="landingSection">
                    <Content title="Agora"
                        content="We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work that you do."
                        link="learn more"
                    />
                    <img src={Agora} alt="agora" />
                </div> 
            </section>
            <section className="startZone">
                <div className="landingSection">
                    <img src={startZone} alt="startZone" />
                    <Content title="Startzone"
                        content="The business environment is harsh for early-stage businesses. We can help you rise above it all."
                        link="learn more"
                    />
                </div>
            </section>
            <section className="Others">
                <div className="otherSection">
                    <div className="other-left">
                        <span className="other-left-top">
                            <img src={ignite} alt="Genesys-Ignite" />
                            <Link to="ignite"><h5>Genesys Ignite</h5></Link>
                        </span>
                        <div className="other-left-bottom">
                            <span>
                                <img src={codeVille} alt="CodeVille" />
                                <Link to="CodeVille"><h4>CodeVille</h4></Link>
                            </span>
                            <span>
                                <img  src={Pink} alt="pink" />
                                <Link to="Pink"><h4>Pink summer of code</h4></Link>
                            </span>
                        </div>
                    </div>
                    <div className="other-right">
                        <h2>Other things we do</h2>
                    </div>
                </div>
            </section>
            <section className="Team">
                <div className="landingSection">
                <img  src={team} alt="team" />
                <Content title="The best team in the world"
                    content="We work with the most amazing people our industry has to offer. They are really passionate about making a difference"
                    link="See Team"
                    type="white"
                />
                </div>
            </section>
            <Subscribe  type="greenBg" />
        </div>
    )
};

export default Home;
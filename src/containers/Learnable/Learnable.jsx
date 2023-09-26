import React from "react";
import { Link } from "react-router-dom";

import { Brands, Circle, DesCards, DevCards, Features, Header, Linkcontent, Subscribe } from "../../components";
import "./Learnable.css";

import Count from "../../components/Layout/SPcount";
import Experts from "../../components/Learnable/Experts/Expert";


import skip from "../../Images/Skip.png";
// import play from "../../Images/play.png";
import learnable from "../../Images/learnable.png";
import Avatar from "../../Images/Avatar.png";
import unUsual from "../../Images/unusual.png";
import eligible from "../../Images/eligible.png";
import culture from "../../Images/culture.png";
import apply from "../../Images/learnapply.png";

import journal1 from "../../Images/journal1.png";
import journal2 from "../../Images/journal2.png";
import journal3 from "../../Images/journal3.png";
import journal4 from "../../Images/journal4.png";
import FunGrid from "../../components/Grid/Fungrid";
import LearnGrid from "../../components/Grid/Learngrid";



const features = [
    journal1, journal2, journal3, journal4
]




const count = [
    {
        number: "305",
        title: "Young software developers trained"
    },
    {
        number: "2100",
        title: "tech enthusiast"
    },
    {
        number: "8",
        title: "startups included"
    },
    {
        number: "250",
        title: "small businesses supported"
    },
]

const Questions = [
    {
        title: "How many people can attend a course?",
        id: "fhn5j3i"
    },
    {
        title: "What's the learning experience like?",
        id: "jka8d8h"
    }, 
    { 
        title: "Who are the coaches",
        id: "asn5mh9"
    }, 
    {
        title: "How far in Advance should we book?",
        id: "lk2s7jn"
    }, 
    {
        title: "Can you customize your courses",
        id: "dk1nfi6"
    },
]





const Learnable = () => {
    return (
        <div>
            <Header />
            <div>
                <section className="brochure">
                    <div className="brochure-left">
                        <h4>Coming soon: Learnable ‘20</h4>
                        <p>We've started taking in applications for the next batch of learnable interns. Applications are on till the 21st of Febuary</p>
                    </div>
                    <div className="brochure-right">
                        <p>Click link to download...</p>
                        <h4>Learnable ‘20 Brochure</h4>
                    </div>
                </section>
                <section className="isLearnable">
                    <div className="isLearnable-top">
                        <div className="isLearnable-top-left">
                            <h1>Everything is Learnable</h1>
                            <p>Learnable is the perfect product development internship program brought to you by Genesys.</p>
                        </div>
                        <div className="isLearnable-top-right">
                                <Circle
                                    header="Development"
                            
                                />
                                <Circle
                                    header="Product Design"
                                    background="firstBg"
                                    text="whiteText"
                                />
                        </div>
                    </div>
                    <div className="isLearnable-bottom" >
                        <div className="isLearnable-images">
                            <img src={skip} alt="skip" />
                            <img src={learnable} alt="learnable" />
                            {/* <img src={play} alt="play" /> */}
                        </div>
                        <div className="count-list">
                            {count.map((item) => {
                                return(
                                    <Count
                                        number={item.number}
                                        title={item.title}
                                        key={item.i}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section className="great">
                    <div className="great-content">
                        <h3>We Make People Great</h3>
                        <p>As part of our calculated efforts to contribute to the emerging knowledge and skills driven economy of Nigeria, Learnable is a 6-month product development training program with an emphasis on software programming and product design. It is for outstanding young individuals who are passionate about building a career in the software industry. </p><br/>
                        <p>We primarily educate and groom software developers and designers, preparing them for the industry.</p>
                    </div>
                    <img  src={Avatar} alt="avatar"/>
                </section>
                <section className="unusual">
                    <img  src={unUsual} alt="unusual"/>
                    <div className="unusual-content">
                        <h3>An unusual learning experience</h3>
                        <p>At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.</p><br/>
                        <p>Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn.</p>
                    </div>
                </section>
                <section className="card-layout">
                    <Linkcontent 
                        title="FOR DEVELOPER"
                        headText="Learn to build software the right way"
                        firstText="We love to build stuff. Really awesome stuff. That’s why we have developed a learning program that will empower you to create amazing software the right way."
                        secondText="We believe in learning through experimentation. Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive."
                        path="/developer"
                    />
                    <DevCards />
                </section>
                <section className="card-layout">
                    <DesCards />
                    <Linkcontent
                        title="FOR DESIGNER"
                        headText="Design different"
                        firstText="We love to make things work perfectly. That’s why our design learning path exposes you to the science of user-oriented design."
                        secondText="Design is at the heart of everything we do at Genesys. Right from the start of the program, you’ll get your hands dirty as you get practically involved in the world’s most modern design concepts. At Genesys, we’re building designers who put the users first."
                        path="/designer"    />
                </section>
                <section className="Eligible">
                    <div className="eligible-content">
                        <h3>Who is Eligible</h3>
                        <p>To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.</p>
                        <p>To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express the ability to produce quality stuff in good time with high consistency.</p>
                    </div>
                    <img src={eligible} alt="eligible"/>
                </section>
                <section className="culture">
                    <img src={culture} alt="culture"/>
                    <div className="culture-content">
                        <h3>our culture</h3>
                        <p>Our culture are the unspoken things that make us who we are at Genesys. To become one of us, you need to be like the rest of us. We believe that excellence is a culture, and we are committed to a philosophy of consistent improvement in everything we do. We are passionate, candid and we trust in the power of collaboration.</p>
                    </div>
                </section>
                <section className="fun">
                    <div className="fun-content">
                        <h3>Learning can be fun</h3>
                        <p>We believe learning should be a fun experience. For this reason, we don’t do all the learning in the classroom.</p>
                        <p>The Learnable experience can not be complete without the bag of fun times which you’ll have. To us, every task is an opportunity to have some fun. But we do well to throw in a good number of activities to add to this. You will find yourself partaking in a lot of healthy activities such as cooking, sports, music, hangouts, and even random dates.</p>
                        <p>Trust us when we say we know how to have fun.</p>
                    </div>

                    <FunGrid />
                </section>
                <section className="experts-section">
                    <Experts />
                    <div className="expert-content">
                        <h2>Learn from the Experts</h2>
                        <p>As a learnable intern, you will be learning from the best software developers and product designers our industry has to offer. You will spend the first 3 months in the classroom with industry experts who have a wealth of experience from developing amazing products for various customers in our industry.</p>
                    </div>
                </section>
                <section className="learnable-fun">
                    <div className="fun-left">
                        <h3>Learning doesn’t always have to be in the classroom</h3>
                        <p>We have designed other learning activities that aren’t classroom-based. You will learn how to be a better person, how to have good conversations, how to work better with people and most importantly, how to lead other people. Hey! We’ll even teach you how to run a business during the Learnable Business Sessions.</p>
                    </div>
                    <LearnGrid />
                </section>
                <section className="learn-apply">
                    <img src={apply} alt="apply" />
                    <div className="learn-apply-content">
                        <h3>Apply Your Knowledge</h3>
                        <p>Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone.</p>
                        <Link className="link" to="/apply">get started</Link>
                    </div>
                </section>
                <section className="learn-faq">
                    <h2>FAQ</h2>
                    <ul>
                        {Questions.map((item) => {
                            return(
                                <li key={item.id}>{item.title}<hr/></li>
                            )
                        })}
                        <Link className="link" to="/faq"> See all</Link>
                    </ul>
                </section>
                <section className="learn-journal">
                    <div className="learn-journal-header">
                    <h2>Journal</h2>
                    <Link className="link" to="/journal">view all</Link>
                    </div>
                    <div className="Features">
                        {features.map((item, i) => {
                            return(        
                                <Features ashBg="journal-feature" src={features[i]} />
                            );
                        })}
                    </div>
                </section>
                <Brands />
            </div>
            <Subscribe />
        </div>
    );
}

export default Learnable;
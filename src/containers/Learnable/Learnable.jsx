import React from "react";
import { Card, Circle, DesCards, DevCards, Header, Linkcontent, Onecontent, Twocontent } from "../../components";
import Count from "../../components/Layout/SPcount";





import skip from "../../Images/Skip.png";
import play from "../../Images/play.png";
import learnable from "../../Images/learnable.png";
import Avatar from "../../Images/Avatar.png";
import unUsual from "../../Images/unusual.png";
import eligible from "../../Images/eligible.png";
import culture from "../../Images/culture.png";
import apply from "../../Images/learnapply.png";




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





const Learnable = () => {
    return (
        <div>
            <Header />
            <div>
                <section className="brochure">
                    <div className="brochure-left">
                        <h3>Coming soon: Learnable ‘20</h3>
                        <p>We've started taking in applications for the next batch of learnable interns. Applications are on till the 21st of Febuary</p>
                    </div>
                    <div>
                        <p>Click link to download...</p>
                        <h3>Learnable ‘20 Brochure</h3>
                    </div>
                </section>
                <section className="isLearnable">
                    <div className="isLearnable-top">
                        <div className="isLearnable-top-left">
                            <h1>Everything is Learnable</h1>
                            <p>Learnable is the perfect product development internship program brought to you by Genesys.</p>
                        </div>
                        <div className="isLearnable-top-right">
                            <div>
                                <Circle
                                    header="Development"
                                />
                                <Circle
                                    header="Product Design"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="isLearnable-bottom" >
                        <div className="isLearnable-images">
                            <img src={skip} alt="skip" />
                            <img src={learnable} alt="learnable" />
                            <img src={play} alt="play" />
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
                <section>
                    <div>
                        <h3>We Make People Great</h3>
                        <p>As part of our calculated efforts to contribute to the emerging knowledge and skills driven economy of Nigeria, Learnable is a 6-month product development training program with an emphasis on software programming and product design. It is for outstanding young individuals who are passionate about building a career in the software industry. We primarily educate and groom software developers and designers, preparing them for the industry. </p>
                    </div>
                    <img  src={Avatar} alt="avatar"/>
                </section>
                <section>
                    <img  src={unUsual} alt="unusual"/>
                    <div>
                        <h3>An unusual learning experience</h3>
                        <p>At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.</p>
                        <p>Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn.</p>
                    </div>
                </section>
                <section>
                    <Linkcontent 
                        title="FOR DEVELOPER"
                        headText="Learn to build software the right way"
                        firstText="We love to build stuff. Really awesome stuff. That’s why we have developed a learning program that will empower you to create amazing software the right way."
                        secondText="We believe in learning through experimentation. Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive."
                        path="/developer"
                    
                    />
                    <DevCards />
                </section>
                <section>
                    <DesCards />
                    <Linkcontent
                        title="FOR DESIGNER"
                        headText="Design different"
                        firstText="We love to make things work perfectly. That’s why our design learning path exposes you to the science of user-oriented design."
                        secondText="Design is at the heart of everything we do at Genesys. Right from the start of the program, you’ll get your hands dirty as you get practically involved in the world’s most modern design concepts. At Genesys, we’re building designers who put the users first."
                        path="/designer"    />
                </section>
                <section>
                    <Twocontent />
                    <img src={eligible} alt="eligible"/>
                </section>
                <section>
                    <img src={culture} alt="culture"/>
                    <Onecontent />   
                </section>
                <section>

                </section>
                <section>
                    
                </section>
            </div>
        </div>
    )
};

export default Learnable;
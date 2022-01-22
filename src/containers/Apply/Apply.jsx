import React from "react";
import { ApplyContent, Header, Subscribe } from "../../components";

import "./Apply.css";

import apply from "../../Images/apply.png";
import designThink from "../../Images/design-thinking.png";



const content = [
    {
        title: "How To Get In",
        text: "We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people.",
    },
    {
        title: "Online Application",
        text: "Introduce yourself to us by filling out our application form. When you’re done filling out the form, proceed to download our prep curriculum that contains everything you need to prepare for the physical and technical assessment.",
    },
    {
        title: "Phone Call Interviews",
        text: "We will reach out to you to discuss possible opportunities, ascertain where you fit in with us, and answer any questions you might have about the program. It’s supposed to be a chat, getting nervous defeats the aim.",
    },
    {
        title: "Final Assessment",
        text: "At this stage, well get to meet you in person for the first time. You’ll be invited to the hub for a physical assessment that includes a technical assessment, a psychometric test and a face-to-face chat with our team.",
    },
    {
        title: "Get In",
        text: "If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. We will join you on your journey to build that career of your dreams and provide all the help, support and love that we can muster along the way!",
    },
]


const Apply = () => {
    return (
        <div>
            <Header />
            <div className="Apply">
                <div className="Apply-top">
                    <span>
                        <h1>Apply Your Knowledge</h1>
                        <p>Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone.</p>
                    </span>
                    <img src={apply} alt="apply"/>
                </div>
                <div className="Apply-bottom">
                    <img src={designThink} alt="design-thinking"/>
                    {
                        content.map(item => {
                            return(
                                <ApplyContent title={item.title} content={item.text}/>
                            );
                        })
                    }
                </div>
            </div>
            <Subscribe />
        </div>
    )
};

export default Apply;
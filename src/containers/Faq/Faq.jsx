import React from "react";

import "./Faq.css";


import { Header, Subscribe } from "../../components";
import faq from "../../Images/faq.jpg";

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
    {
        title: "Can you customize your courses",
        id: "dk1nfi6"
    },
    {
        title: "Can you customize your courses",
        id: "dk1nfi6"
    },
]


const Faq = () => {
    return (
        <div>
            <Header />
            <section className="faq">
                <div className="faq-top">
                    <h1>FAQ</h1>
                    <img src={faq} alt="faq"/>
                </div>
                <ul className="faq-bottom">
                    {Questions.map((item) => {
                        return(
                            <li key={item.i}>
                               {item.title}
                               <hr />
                            </li>
                        );
                    })}
                </ul>
                </section>
            <Subscribe />
        </div>
    )
};

export default Faq;
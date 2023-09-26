import React from "react";
import "./Expert.css";
import Profile from "./profile/profile";

import expert1 from "../../../Images/expert1.png";
import expert2 from "../../../Images/expert2.png";
import expert3 from "../../../Images/expert3.png";
import expert4 from "../../../Images/expert4.png";
import expert5 from "../../../Images/expert5.png";
import expert6 from "../../../Images/expert6.png";


const profiles = [
    {   
        picture: expert1,
        profileName: "Nnamdi",
        title: "Managing Director",
        id: "11",
    },
    {
        picture: expert2,
        profileName: "Osita",
        title: "Learnable Coordinator",
        id: "12"
    },
    {
        picture: expert3,
        profileName: "Idowu",
        title: "Scrum Professional",
        id: "13"
    },
    {
        picture: expert4,
        profileName: "Ezra",
        title: "Ass. Learnable Coordinator",
        id: "14"
    },
    {
        picture: expert5,
        profileName: "David",
        title: "Design Lead",
        id: "15"
    },
    {
        picture: expert6,
        profileName: "Emmanuel",
        title: "Software Lead",
        id: "16"
    },
]

const Experts = () => {
    return(
        <div className="experts">
            {profiles.map((profile) => {
                const { profileName, title, id, picture } = profile;
                return(
                    <Profile
                        name={profileName}
                        title={title}
                        pic={picture}
                        key={id}
                    />
                );
            })}
        </div>
    );
}

export default Experts;
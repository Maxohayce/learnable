import React from "react";

import "./profile.css";


const Profile = ({ name, title, pic, key }) => {
    return(
        <div className="profile" key={key}>
            <img src={pic} alt="expert-profile" />
            <div>
                <h6>{name}</h6>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default Profile;
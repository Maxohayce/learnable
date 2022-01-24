import React from "react";


const Profile = ({ name, title, pic }) => {
    return(
        <div>
            <img src={pic} alt="expert-profile" />
            <div>
                <h6>{name}</h6>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default Profile;
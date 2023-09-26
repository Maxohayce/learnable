import React from "react";
import previous from "../../Images/previous.png";

import "../../containers/Home/Home.css"

  const Subscribe = ({type}) => {
    return(
        <section className="Subscribe">
                <div></div>
            <img  src={previous} alt={previous} />
            <div className={`Subscribe-container ${type}`}>
                <div className="Subscribe-left">
                <h4>Stay up to date on what we are doing and new learning opportunities</h4>
                </div>
                <div className="Subscribe-right">
                    <span>
                        <input  placeholder="YOUR EMAIL" style={{color:"#273043"}}></input>
                        <p>View Privacy Policy</p>
                    </span>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
import React from "react";
import { Features, Header, Subscribe } from "../../components";

import "./Journal.css"
import designThink from "../../Images/design-thinking.png";
import circle from "../../Images/circle.png";
import journal1 from "../../Images/journal1.png";
import journal2 from "../../Images/journal2.png";
import journal3 from "../../Images/journal3.png";
import journal4 from "../../Images/journal4.png";



const features = [
    journal1, journal2, journal3, journal4
]

const Journal = () => {
    return (
        <div>
            <Header />
            <div className="journal">
                <section className="journal-landing">
                    <h1>Journal</h1>
                    <button>categories</button>
                </section>
                <section className="design-thinking">
                    <img src={designThink} alt="design-thinking" />
                    <div className="design-thinking-right">
                        <div className="design-thinking-content">
                            <a href="www.inspiration.com">Inspiration</a>
                            <h3>Learn Design Thinking like a Pro and Build Projects that People will care about</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sapien arcu vitae orci at molestie. Pharetra quisque donec accumsan rhoncus risus. Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus. Vulputate euismod commodo donec tincidunt et, aliquam. Eget scelerisque netus habitant dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper. Lacus.</p>
                            <span>
                                <img src={circle} alt="circle" />
                                <p>David Mong, Apr 9, 2020</p>
                            </span>
                        </div>
                    </div>
                </section>
                <section className="Features">
                    {features.map((item, i) => {
                        return(
                            <Features src={features[i]}/>    
                        )
                    })}
                </section>
            </div>
            <Subscribe />
        </div>
    );
}

export default Journal;
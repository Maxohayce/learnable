import React from "react";
import { Header, Layout } from "../../components";

import developer from "../../Images/developer.png";


const Developer = () => {
    return (
        <div>
            <Header />
            <Layout
                header="The Learnable Software Developer"
                headerText="Creativity means a lot to us. So we look for people who can think both logistically and artistically, and who know that limits are made to be pushed. We value skill and aptitude, but we honor those who care about working with their team to add the Genesys flavour to every project.
                As a developer, being part of the team exposes you to a range of diverse, like-minded talented people who are sure to make the experience fun for you. You’ll get a shot at building amazing things, developing yourself, learning on the job, while exchanging healthy jokes and having random hangouts once in a while."
                quote='" You are someone people can count on. Every day, you come in ready to make great things happen."'
                picture={developer}
                color="greenText"
                background="greenBg"
            />
        </div>
    );
}

export default Developer;
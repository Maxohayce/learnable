import React from "react";
import { Header, Layout } from "../../components";

import designer from "../../Images/designer.png";


const Designer = () => {
    return (
        <div>
            <Header />
            <Layout
                headerText="At Genesys, you'll be exposed to every discipline in our creative process – UX, UI, interaction design, and copywriting. You’ll be part of a dynamic team that's made up of like-minded, talented people. You'll work hard with them to create things that will amaze everyone everywhere.
                In addition to your team projects, you’ll be lending a hand to the creative team. Participating in brainstorm sessions, building winning pitches, preparing assets, and design scriptures for productions, you'll be in the thick of it all.
                Oh, and you’ll make amazing friends while you're at it!"
                header="The Learnable Product Designer"
                quote="“The greats weren’t great because at birth they could paint. The greats were great because they painted a lot.” - Macklemore"
                picture={designer}
                color="orangeText"
                background="orangeBg"
            />
        </div>
    )
};

export default Designer;
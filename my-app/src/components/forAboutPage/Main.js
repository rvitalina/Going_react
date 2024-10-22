import React from "react";
import FirstAbout_Section from './FirstAbout_Section';
import SecondAbout_Section from './SecondAbout_Section';
import ThirdAbout_Section from './ThirdAbout_Section';
import ForthAbout_Section from './ForthAbout_Section';


export default function Main() {
    return(
        <main>
            <FirstAbout_Section />
            <SecondAbout_Section />
            <ThirdAbout_Section />
            <ForthAbout_Section />
        </main>
    );
}
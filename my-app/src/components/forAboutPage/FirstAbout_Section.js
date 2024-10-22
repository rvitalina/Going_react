import React from "react";
import about1 from "./../../images/about-1.png";

export default function FirstAbout_Section() {
    return(
        <section class="first-about">
            <div class="container">
                <div>
                    <h1 data-i18="117">We exist to reveal a world of greater travel possibility</h1>
                    <button class="sign-up-btn">
                        <a href="./../html/sign-up.html" data-i18="4">sign up</a>
                    </button>
                </div>
                <img src={about1} alt=""  />
            </div>
        </section>
    );
}
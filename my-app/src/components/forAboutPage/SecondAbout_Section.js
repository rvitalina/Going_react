import React from "react";
import about2 from "./../../images/about-2.png";

export default function SecondAbout_Section() {
    return(
        <section class="second-about">
            <div class="container">
                <img src={about2} alt="" />
                <div>
                    <h2 data-i18="118">We're Going. You've Arrived.</h2>
                    <p data-i18="119">Close out all those tabs. Turn off your incognito window. At Going, the most exciting flight opportunities find you. Here, we lean into the unexpected possibilities of a really good deal. You’ll be amazed by how much further you go (and how much money you save). Celebrate the destinations that surprise you and the trips that don’t break the bank. Let’s get Going, together.</p>
                    <p data-i18="120">We’re ready when you are.</p>
                </div>
            </div>
        </section>
    );
}
import React from "react";
import about3 from "./../../images/about-3.png";

export default function SecondAbout_Section() {
    return(
        <section class="third-about">
            <div class="container">
                <div class="our-story">
                    <h2 data-i18="121">Our story</h2>
                    <p data-i18="122">One jaw-dropping flight deal started it all. In 2013 Scott Keyes found the best deal he'd ever seen from NYC to Milan.</p>
                    <p data-i18="123">When he returned from that trip, his friends all begged him to let them know the next time he found an amazing deal. Scott's Cheap Flights (now Going) was born.</p>
                    <p data-i18="124">Today, Going is a team of more than 50 people serving more than 2 million travelers.</p>
                    <button data-i18="125">read full story</button>
                </div>
                <img src={about3} alt="" />
            </div>
        </section>
    );
}
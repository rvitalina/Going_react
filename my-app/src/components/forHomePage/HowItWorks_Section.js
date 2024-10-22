import { React } from 'react';
import { Component } from 'react';
import plane from "./../../images/plane.svg";
import binocle from "./../../images/binocl.svg"
import tick from "./../../images/tick.svg"

class HowItWorks_Section extends Component {
    render() {
        return (
            <section id="how-it-works" className="second-section">
                <div className="container">
                    <h2 data-i18="9">How Going ™ Works</h2>
                    <div className="steps-box">
                        <div className="step-elem">
                            <img src={plane} alt=""/>
                            <div className="step-card">
                                <h3 data-i18="10">Start with your airport.</h3>
                                <p data-i18="11">Choose US departure airports like your biggest airport, closest airport, and maybe even your parent’s.</p>
                            </div>
                        </div>
                        <div className="step-elem">
                            <img src={binocle} alt=""/>
                            <div className="step-card">
                                <h3 data-i18="12">Watch the deals roll in.</h3>
                                <p data-i18="13">We keep a close eye on airfare to over 900 destinations around the world. When the prices drop, you know.</p>
                            </div>
                        </div>
                        <div className="step-elem">
                            <img src={tick} alt=""/>
                            <div className="step-card">
                                <h3 data-i18="14">Then book it.</h3>
                                <p data-i18="15">With flight details, booking links, and timeline estimates, all that’s left for you is to say, “Let’s go!”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowItWorks_Section;
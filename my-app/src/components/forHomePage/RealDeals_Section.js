import { React } from 'react';
import { Component } from 'react';
import chicago from "./../../images/chicago.png";
import la from "./../../images/la.png";
import baltimore from "./../../images/baltimore.png";
import boston from "./../../images/boston.png";
import ny from "./../../images/ny.png";



class RealDeals_Section extends Component {
    render() {
        return (
            <section className="third-section">
                <div className="container">
                    <h2 data-i18="19">Real deals members booked</h2>
                    <div className="wrapper">
                        <button className="prev-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M19.826 12.3899H3.13037" stroke="var(--color-font-white)" stroke-width="2"/>
                                <path d="M3.13037 12.3899C7.74074 12.3899 11.4782 16.2972 11.4782 21.1172" stroke="var(--color-font-white)" stroke-width="2"/>
                                <path d="M3.13037 12.3899C7.74075 12.3899 11.4782 8.48254 11.4782 3.6626" stroke="var(--color-font-white)" stroke-width="2"/>
                            </svg>
                        </button>

                        <div className="carousel">
                            <div className="slider">
                                <div className="slide">
                                    <img src={chicago} alt="Image 1" />
                                    <div className="price"><span>$</span>166</div>
                                    <span data-i18="20">( 67% off normally $500+ )</span>
                                    <div className="from-to">
                                        <span data-i18="21">Chicago</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M4.22998 12H20.23" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        <path d="M20.23 12C15.8117 12 12.23 8.41828 12.23 4" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        <path d="M20.23 12C15.8117 12 12.23 15.5817 12.23 20" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        </svg>
                                        <span data-i18="22">Cancun</span>
                                    </div>
                                </div>
                                <div className="slide">
                                    <img src={la} alt="Image 2" />
                                    <div className="price"><span>$</span>460</div>
                                    <span data-i18="23">( 46% off normally $850+ )</span>
                                    <div className="from-to">
                                        <span data-i18="24">Los Angeles</span> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M4.22998 12H20.23" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        <path d="M20.23 12C15.8117 12 12.23 8.41828 12.23 4" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        <path d="M20.23 12C15.8117 12 12.23 15.5817 12.23 20" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        </svg>
                                        <span data-i18="25">Athens</span>
                                    </div>
                                </div>
                                <div className="slide">
                                    <img src={baltimore} alt="Image 3" />
                                    <div className="price"><span>$</span>260</div>
                                    <span data-i18="26">( 71% off normally $900+ )</span>
                                    <div className="from-to">
                                        <span data-i18="27">Baltimore</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M4.22998 12H20.23" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        <path d="M20.23 12C15.8117 12 12.23 8.41828 12.23 4" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        <path d="M20.23 12C15.8117 12 12.23 15.5817 12.23 20" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        </svg>
                                        <span data-i18="28">Paris</span>
                                    </div>
                                </div>
                                <div className="slide">
                                    <img src={boston} alt="Image 4" />
                                    <div className="price"><span>$</span>100</div>
                                    <span data-i18="29">( 88% off normally $800+ )</span>
                                    <div className="from-to">
                                        <span data-i18="30">Boston</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M4.22998 12H20.23" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        <path d="M20.23 12C15.8117 12 12.23 8.41828 12.23 4" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        <path d="M20.23 12C15.8117 12 12.23 15.5817 12.23 20" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        </svg>
                                        <span data-i18="31">Reykjaivik</span>
                                    </div>
                                </div>
                                <div className="slide">
                                    <img src={ny} alt="Image 5" />
                                    <div className="price"><span>$</span>282</div>
                                    <span data-i18="32">( 65% off normally $800+ )</span>
                                    <div className="from-to">
                                        <span data-i18="33">New York City</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M4.22998 12H20.23" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M20.23 12C15.8117 12 12.23 8.41828 12.23 4" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                            <path d="M20.23 12C15.8117 12 12.23 15.5817 12.23 20" stroke="#004449" stroke-width="2" stroke-linecap="square"/>
                                        </svg>
                                        <span data-i18="34">Barcelona</span>
                                    </div>
                                </div>
                            </div>
                            <div className="dots">
                                <button className="dot active"></button>
                                <button className="dot"></button>
                                <button className="dot"></button>
                                <button className="dot"></button>
                                <button className="dot"></button>
                            </div>
                        </div>
                        
                        <button className="next-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M4 12.3899H20" stroke="var(--color-font-white)" stroke-width="2" stroke-linecap="square"/>
                                <path d="M20 12.3899C15.5817 12.3899 12 8.80817 12 4.38989" stroke="var(--color-font-white)" stroke-width="2" stroke-linecap="square"/>
                                <path d="M20 12.3899C15.5817 12.3899 12 15.9716 12 20.3899" stroke="var(--color-font-white)" stroke-width="2" stroke-linecap="square"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default RealDeals_Section;
import React from "react";
import FirstCF_Section from "./FirstCF_Section";
import SecondCF_Section from "./SecondCF_Section";
import ThirdCF_Section from "./ThirdCF_Section";
import ForthCF_Section from "./Flights/ForthCF_Section";

export default function Main() {
    return(
        <>
            <FirstCF_Section/>
            <SecondCF_Section/>
            <ThirdCF_Section/>
            <ForthCF_Section/>
        </>        
    );
}
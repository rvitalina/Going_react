import { React } from 'react';
import { Component } from 'react';
import FirstSection from './FirstSection';
import HowItWorks_Section from './HowItWorks_Section';
import Booked_Div from './Booked_Div';
import RealDeals_Section from './RealDeals_Section';
import GoingApp_Section from './GoingApp_Section';
import CheapFlights_Section from '../common/CheapFlights_Section';
import FreeFlightAlerts_Section from './FreeFlightAlerts_Section';


class Main extends Component {
    render() {
        return(
            <>
            <FirstSection></FirstSection>
            <HowItWorks_Section></HowItWorks_Section>
            <Booked_Div></Booked_Div>
            <RealDeals_Section></RealDeals_Section>
            <GoingApp_Section></GoingApp_Section>
            <CheapFlights_Section></CheapFlights_Section>
            <FreeFlightAlerts_Section></FreeFlightAlerts_Section>
            </>
        );
    }
}

export default Main;
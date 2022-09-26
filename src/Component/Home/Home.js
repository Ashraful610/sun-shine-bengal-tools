import React from 'react';
import Banner from './Banner/Banner';
import Tools from './Tools/Tools';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Reviews from './Reviews/Reviews';
import ExtraSectionOne from './ExtraSectionOne/ExtraSectionOne'
import ExtraSectionTwo from './ExtraSectionTwo/ExtraSectionTwo'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ExtraSectionOne></ExtraSectionOne>
           <Tools></Tools>
           <BusinessSummary></BusinessSummary>
           <ExtraSectionTwo></ExtraSectionTwo>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;
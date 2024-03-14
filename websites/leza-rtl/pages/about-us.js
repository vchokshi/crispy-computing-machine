import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import WhyPeopleChooseUsTwo from '../components/Common/WhyPeopleChooseUsTwo';
import Feedback from '../components/Common/Feedback';
import TeamMember from '../components/Common/TeamMember';
import PartnerStyleTwo from '../components/Common/PartnerStyleTwo';
import CallUsStyleTwo from '../components/Common/CallUsStyleTwo';
import Footer from '../components/_App/Footer';

const AboutUs = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="About Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About Us" 
                imgClass="item-bg-1" 
            /> 

            <AboutUsContent />

            <WhyPeopleChooseUsTwo />

            <Feedback />

            <TeamMember />

            <PartnerStyleTwo />

            <CallUsStyleTwo />
            
            <Footer />
        </>
    )
}

export default AboutUs;
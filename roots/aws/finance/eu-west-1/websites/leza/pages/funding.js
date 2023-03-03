import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutFunding from '../components/Funding/AboutFunding';
import WhyPeopleChooseUsTwo from '../components/Common/WhyPeopleChooseUsTwo';
import HowItWork from '../components/Funding/HowItWorks';
import ApplyForFunding from '../components/Funding/ApplyForFunding';
import Footer from '../components/_App/Footer';

const Funding = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Funding"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Funding"
                imgClass="item-bg-5"
            />

            <AboutFunding />

            <WhyPeopleChooseUsTwo />

            <HowItWork />

            <ApplyForFunding />

            <Footer />
        </>
    )
}

export default Funding;

import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import AboutCompany from '../components/HomeOne/AboutCompany';
import WhyPeopleChooseUs from '../components/Common/WhyPeopleChooseUs';
import OurCompanyValues from '../components/HomeOne/OurCompanyValues';
import Services from '../components/HomeOne/Services';
import ApplyForLoanStyleOne from '../components/Common/ApplyForLoanStyleOne';
import ProjectsSlider from '../components/Projects/ProjectsSlider';
import Feedback from '../components/Common/Feedback';
import Partner from '../components/Common/Partner';
import RecentNews from '../components/Common/RecentNews';
import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <AboutCompany />

            <WhyPeopleChooseUs />

            <OurCompanyValues />

            <Services />

            <ApplyForLoanStyleOne />

            <ProjectsSlider />

            <Feedback />

            <Partner />

            <RecentNews />

            <Footer />
        </>
    )
}

export default Index;

import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectsSlider from '../components/Projects/ProjectsSlider';
import ProfessionalServices from '../components/HomeThree/ProfessionalServices';
import Partner from '../components/Common/Partner';
import Footer from '../components/_App/Footer';

const Projects = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Projects"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Projects"
                imgClass="item-bg-4"
            />

            <ProjectsSlider />

            <ProfessionalServices />

            <Partner />

            <Footer />
        </>
    )
}

export default Projects;

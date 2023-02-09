import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/Faq/FaqContent';
import CallUsStyleTwo from '../components/Common/CallUsStyleTwo';
import Footer from '../components/_App/Footer';

const Faq = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="FAQ" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ" 
                imgClass="item-bg-4" 
            /> 

            <FaqContent />

            <CallUsStyleTwo />
            
            <Footer />
        </>
    )
}

export default Faq;
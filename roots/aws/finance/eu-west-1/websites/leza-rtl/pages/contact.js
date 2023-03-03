import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';

const Contact = () => {
    return (
        <>
            <Navbar />
            
            <PageBanner 
                pageTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact Us" 
                imgClass="item-bg-3" 
            /> 
            
            <ContactForm />

            <div className="map">
                <div className="container-fluid">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1594738801148!5m2!1sen!2sbd"></iframe>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact;
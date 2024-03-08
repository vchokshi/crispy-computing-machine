import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Partner from '../components/Common/Partner';
import Footer from '../components/_App/Footer';

const Testimonials = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Testimonials"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Testimonials"
                imgClass="item-bg-1"
            />

            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="clients-item">
                                <div className="info">
                                    <img src="/images/clients/client1.png" alt="image" />
                                    <h4>Markus Twain</h4>
                                    <span>React Developer</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                <div className="icon">
                                    <i className="flaticon-right-quote"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="clients-item">
                                <div className="info">
                                    <img src="/images/clients/client2.png" alt="image" />
                                    <h4>Jessica Molony</h4>
                                    <span>Angular Developer</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                <div className="icon">
                                    <i className="flaticon-right-quote"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="clients-item">
                                <div className="info">
                                    <img src="/images/clients/client3.png" alt="image" />
                                    <h4>James</h4>
                                    <span>Web Designer</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                <div className="icon">
                                    <i className="flaticon-right-quote"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="clients-item">
                                <div className="info">
                                    <img src="/images/clients/client4.png" alt="image" />
                                    <h4>Michael</h4>
                                    <span>Vue Developer</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                <div className="icon">
                                    <i className="flaticon-right-quote"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="clients-item">
                                <div className="info">
                                    <img src="/images/clients/client5.png" alt="image" />
                                    <h4>William</h4>
                                    <span>Web Developer</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                <div className="icon">
                                    <i className="flaticon-right-quote"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="clients-item">
                                <div className="info">
                                    <img src="/images/clients/client6.png" alt="image" />
                                    <h4>Christopher</h4>
                                    <span>TF Developer</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                <div className="icon">
                                    <i className="flaticon-right-quote"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Partner />

            <Footer />
        </>
    )
}

export default Testimonials;

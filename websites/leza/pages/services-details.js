import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceSidebar from '../components/Services/ServiceSidebar';
import CallUsStyleTwo from '../components/Common/CallUsStyleTwo';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const ServicesDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Services Details"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Services Details"
                imgClass="item-bg-6"
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <ServiceSidebar />
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <div className="image">
                                    <img src="/images/services-details.jpg" alt="image" />
                                </div>

                                <div className="content">
                                    <h3>About business loan and how does it work</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                </div>

                                <div className="services-details-features">
                                    <div className="content">
                                        <h3>Features of business loan</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="features-item">
                                                <div className="icon">
                                                    <i className="flaticon-approval"></i>
                                                </div>
                                                <h3>Quick <br /> approval</h3>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="features-item">
                                                <div className="icon">
                                                    <i className="flaticon-personal"></i>
                                                </div>
                                                <h3>Easy loan <br /> Repayment</h3>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="features-item">
                                                <div className="icon">
                                                    <i className="flaticon-transparency"></i>
                                                </div>
                                                <h3>100% <br /> Transparency</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="services-details-others">
                                    <h3>You deserve a better business loan</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                </div>

                                <div className="deserve-item">
                                    <h3>We usually follow 4 steps to get a better business loans.</h3>

                                    <div className="deserve-content">
                                        <span>1</span>
                                        <h4>Apply in 10 minutes</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>

                                    <div className="deserve-content">
                                        <span>2</span>
                                        <h4>Hear from us in 1 hour</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>

                                    <div className="deserve-content">
                                        <span>3</span>
                                        <h4>A decision in 24 hours</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>

                                    <div className="deserve-content">
                                        <span>4</span>
                                        <h4>Your loan is funded</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>

                                    <div className="deserve-btn">
                                        <Link href="/apply-now">
                                            <a className="default-btn">
                                                Apply now <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="services-details-list">
                                    <div className="content">
                                        <h3>Eligibility Criteria</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                        <ul className="list">
                                            <li>
                                                <i className="flaticon-check"></i>
                                                You must be a Salaried Employee
                                            </li>
                                            <li>
                                                <i className="flaticon-check"></i>
                                                Age: 20-50 years old
                                            </li>
                                            <li>
                                                <i className="flaticon-check"></i>
                                                Net Monthly Income must be more than $5000.
                                            </li>
                                            <li>
                                                <i className="flaticon-check"></i>
                                                No defaults in the last 24 months.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CallUsStyleTwo />

            <Footer />
        </>
    )
}

export default ServicesDetails;

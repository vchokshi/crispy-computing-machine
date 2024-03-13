import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CallUsStyleTwo from '../components/Common/CallUsStyleTwo';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Services = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Services"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Services"
                imgClass="item-bg-5"
            />

            <div className="services-area bg-color ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Knowledge of the market</span>
                        <h2>Only the best professional services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-agriculture"></i>
                                </div>
                                <h3>Agricultural loan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncid dunt ut labore et dolore magna aliqua.</p>
                                <Link href="/services-details">
                                    <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-loan-1"></i>
                                </div>
                                <h3>Business loan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncid dunt ut labore et dolore magna aliqua.</p>
                                <Link href="/services-details">
                                    <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-loan-2"></i>
                                </div>
                                <h3>House loan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncid dunt ut labore et dolore magna aliqua.</p>
                                <Link href="/services-details">
                                    <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-personal"></i>
                                </div>
                                <h3>Personal loan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncid dunt ut labore et dolore magna aliqua.</p>
                                <Link href="/services-details">
                                    <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-scholarship"></i>
                                </div>
                                <h3>Education loan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncid dunt ut labore et dolore magna aliqua.</p>
                                <Link href="/services-details">
                                    <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-loan-3"></i>
                                </div>
                                <h3>Payday loan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncid dunt ut labore et dolore magna aliqua.</p>
                                <Link href="/services-details">
                                    <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-car"></i>
                                </div>
                                <h3>Vehicle loan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncid dunt ut labore et dolore magna aliqua.</p>
                                <Link href="/services-details">
                                    <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-loan-4"></i>
                                </div>
                                <h3>Medical loan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncid dunt ut labore et dolore magna aliqua.</p>
                                <Link href="/services-details">
                                    <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-rocket"></i>
                                </div>
                                <h3>StartUp loan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncid dunt ut labore et dolore magna aliqua.</p>
                                <Link href="/services-details">
                                    <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="col-lg-12">
                            <ul className="pagination-list">
                                <li>
                                    <Link href="#">
                                        <a>
                                            <i className='bx bx-chevrons-left'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="active">1</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>2</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>3</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <CallUsStyleTwo />

            <Footer />
        </>
    )
}

export default Services;

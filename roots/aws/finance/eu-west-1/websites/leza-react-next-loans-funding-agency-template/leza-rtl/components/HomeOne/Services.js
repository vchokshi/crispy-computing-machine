import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="services-area pt-100 pb-70">
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
                </div>
            </div>
        </div>
    )
}

export default Services;
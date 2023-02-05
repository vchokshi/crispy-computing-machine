import React from 'react';

const OurCompanyValues = () => {
    return (
        <div className="company-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="company-image">
                            <img src="/images/company.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="company-content">
                            <h3>Our company values</h3>

                            <div className="company-text">
                                <div className="icon">
                                    <i className="flaticon-idea"></i>
                                </div>
                                <h4>Innovative</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="company-text">
                                <div className="icon">
                                    <i className="flaticon-talent"></i>
                                </div>
                                <h4>Talent</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="company-text">
                                <div className="icon">
                                    <i className="flaticon-key"></i>
                                </div>
                                <h4>Enabling</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="company-text">
                                <div className="icon">
                                    <i className="flaticon-responsibility"></i>
                                </div>
                                <h4>Commercially responsible</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCompanyValues;
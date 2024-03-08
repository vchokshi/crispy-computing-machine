import React from 'react';

const AboutUsContent = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="p-relative">
                            <div className="about-image">
                                <img src="/images/about/about1.jpg" alt="image" />
                                <img src="/images/about/about2.jpg" alt="image" />
                            </div>

                            <div className="experience">
                                <h4>25</h4>
                                <p>We have more than years of experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="about-content">
                            <span>About company</span>
                            <h3>We have been working very efficiently with loan and funding for 25 years.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            <strong>In business, we focus on 3 things.</strong>

                            <ul className="about-list">
                                <li>
                                    <i className="flaticon-check"></i>
                                    Trusted
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Reliability
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Innovation
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Useful info
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Award Winning
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsContent;

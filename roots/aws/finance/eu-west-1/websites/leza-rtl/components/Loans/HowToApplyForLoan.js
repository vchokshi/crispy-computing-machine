import React from 'react';
import Link from 'next/link';

const HowToApplyForLoan = () => {
    return (
        <div className="deserve-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="deserve-item">
                            <h3>How do I apply for a loan</h3>

                            <div className="deserve-content">
                                <span>1</span>
                                <h4>Apply in 10 minutes</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="deserve-content">
                                <span>2</span>
                                <h4>Hear from us in 1 hour</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="deserve-content">
                                <span>3</span>
                                <h4>A decision in 24 hours</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="deserve-content">
                                <span>4</span>
                                <h4>Your loan is funded</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="deserve-btn">
                                <Link href="/apply-now">
                                    <a className="default-btn">
                                        Apply now <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="default-image">
                            <img src="/images/loan2.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToApplyForLoan;
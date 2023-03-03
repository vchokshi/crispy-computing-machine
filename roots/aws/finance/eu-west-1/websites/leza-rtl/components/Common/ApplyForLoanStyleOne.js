import React from 'react';
import Link from 'next/link';

const ApplyForLoanStyleOne = () => {
    return (
        <div className="deserve-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Funding circles</span>
                    <h2>You deserve a better business loan</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="deserve-item">
                            <h3>We usually follow 4 steps to get a better business loans.</h3>

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
                        <div className="rate-form">
                            <div className="rate-content">
                                <span>Calculate your rate</span>
                                <h3>How much do you need?</h3>
                            </div>

                            <form className="form">
                                <div className="form-group">
                                    <label>Type The Money</label>
                                    <input type="text" className="form-control" placeholder="$1000" />
                                </div>

                                <div className="form-group">
                                    <label>Select The Month/Years</label>
                                    <select className="form-select">
                                        <option value="5">1 month</option>
                                        <option value="1">2 month</option>
                                        <option value="2">3 month</option>
                                        <option value="0">4 month</option>
                                        <option value="3">6 month</option>
                                        <option value="3">1 Year</option>
                                        <option value="0">2 Years</option>
                                        <option value="3">3 Years</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Borrowing</label>
                                    <input type="text" className="form-control" placeholder="$10000" />
                                </div>

                                <div className="form-group">
                                    <label>Term of use</label>
                                    <input type="text" className="form-control" placeholder="6 month" />
                                </div>

                                <div className="form-group">
                                    <label>The total you will pay</label>
                                    <input type="text" className="form-control" placeholder="$11200" />
                                </div>

                                <div className="rate-btn">
                                    <button type="submit" className="btn default-btn">
                                        Apply for this loan <span></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyForLoanStyleOne;

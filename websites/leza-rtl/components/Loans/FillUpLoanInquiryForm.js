import React from 'react';

const FillUpLoanInquiryForm = () => {
    return (
        <div className="inquiry-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="inquiry-content">
                            <h3>Start-up loan Inquiry</h3>
                            <p>Please complete the short form below with your details and one of our advisors will be touch shortly</p>
                        </div>
    
                        <form className="inquiry-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Your Name*</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
    
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone Number*</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
    
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                </div>
    
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Postcode*</label>
                                        <input type="text" className="form-control" />
                                    </div>    
                                </div>
    
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                </div>
    
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
    
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>How long have you been trading?</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="inquiry-btn">
                                <button type="submit" className="btn default-btn">
                                    Submit <span></span>
                                </button>
                            </div>
                        </form>
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
                                    <button type="submit" className="default-btn">
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

export default FillUpLoanInquiryForm;
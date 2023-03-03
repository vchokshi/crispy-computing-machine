import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const ApplyNow = () => {
    return (
        <>
            <Navbar />
            
            <PageBanner 
                pageTitle="Apply Now" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Apply Now" 
                imgClass="item-bg-2" 
            /> 

            <div className="apply-area ptb-100">
                <div className="container">
                    <div className="apply-title">
                        <h3>Loan Application</h3>
                    </div>

                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="apply-form">
                                    <div className="form-group">
                                        <label>Desired Loan Amount*</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Firstname</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <input type="date" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Address*</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Email Address*</label>
                                        <input type="email" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Phone Number*</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Designation</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Purpose of Loan*</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="apply-form">
                                    <div className="form-group">
                                        <label>Annual Income*</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Lastname*</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Gender</label>
                                        <select className="form-select">
                                            <option value="1">Select the Gender</option>
                                            <option value="2">Male</option>
                                            <option value="3">Female</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Country*</label>
                                        <select className="form-select">
                                            <option value="0">Select the Country</option>
                                            <option value="1">United Arab Emirates</option>
                                            <option value="2">China</option>
                                            <option value="3">United Kingdom</option>
                                            <option value="4">Germany</option>
                                            <option value="5">France</option>
                                            <option value="6">Japan</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Alternative Email Address*</label>
                                        <input type="email" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Company Address</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Choose here</label>
                                        <select className="form-select">
                                            <option value="0">Choose the Loan</option>
                                            <option value="1">Agricultural Loan</option>
                                            <option value="2">Business Loan</option>
                                            <option value="3">House Loan</option>
                                            <option value="4">Personal Loan</option>
                                            <option value="5">Education Loan</option>
                                            <option value="6">Payday Loan</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="apply-btn">
                            <button type="submit" className="btn default-btn">
                                Apply now <span></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
      
            <Footer />
        </>
    )
}

export default ApplyNow;
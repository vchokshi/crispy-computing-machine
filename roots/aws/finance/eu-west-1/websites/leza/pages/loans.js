import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import LoansContent from '../components/Loans/LoansContent';
import Process from '../components/Loans/Process';
import HowToApplyForLoan from '../components/Loans/HowToApplyForLoan';
import FillUpLoanInquiryForm from '../components/Loans/FillUpLoanInquiryForm';
import CallUsStyleTwo from '../components/Common/CallUsStyleTwo';
import Footer from '../components/_App/Footer';

const Loans = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Loans" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Loans" 
                imgClass="item-bg-8" 
            /> 

            <LoansContent />

            <Process />

            <HowToApplyForLoan />

            <div className="check-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="check-image">
                                <img src="/images/check.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="check-content">
                                <h3>Want to check your eligibility before you apply?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                            <div className="check-text">
                                <h3>Leza payment flexibility for your loan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                <ul className="list">
                                    <li>Fill Loan Application Form</li>
                                    <li>Choose your preferred monthly payment</li>
                                    <li>Increase your payment amount anytime</li>
                                    <li>No fees, hidden or otherwise</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FillUpLoanInquiryForm />

            <CallUsStyleTwo />
            
            <Footer />
        </>
    )
}

export default Loans;
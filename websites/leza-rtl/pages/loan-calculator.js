import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import LoanCalculatorForm from '../components/LoanCalculator/LoanCalculatorForm';
import LoanTable from '../components/LoanCalculator/LoanTable';
import Footer from '../components/_App/Footer';

const LoanCalculator = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Loan Calculator"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Loan Calculator"
                imgClass="item-bg-7"
            />

            <LoanCalculatorForm />

            <LoanTable />

            <Footer />
        </>
    )
}

export default LoanCalculator;

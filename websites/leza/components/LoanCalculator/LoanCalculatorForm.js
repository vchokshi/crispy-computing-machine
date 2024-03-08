import React from 'react';

const LoanCalculatorForm = () => {
    return (
        <div className="loan-calculator ptb-100">
            <div className="container">
                <div className="calculator-form">
                    <div className="text">
                        <span>Loan Calculator</span>
                        <h3>How much do you need?</h3>
                    </div>

                    <form>
                        <div className="form-group">
                            <label>Loan Amount</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Interest Rate (%)</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Loan Term (Years)</label>
                            <select className="form-select" id="Years">
                                <option>Select the year</option>
                                <option>1 Year</option>
                                <option>2 Years</option>
                                <option>3 Years</option>
                                <option>4 Years</option>
                                <option>5 Years</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Loan Start Date</label>
                            <input type="date" className="form-control" />
                        </div>

                        <div className="calculator-btn">
                            <button type="submit" className="btn btn-one">View schedule</button>
                            <button type="submit" className="btn btn-two">Download schedule</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoanCalculatorForm;

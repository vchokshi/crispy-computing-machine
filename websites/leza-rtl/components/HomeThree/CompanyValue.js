import React from 'react';

const CompanyValue = () => {
    return (
        <div className="value-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="value-image">
                            <img src="/images/value.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="value-content">
                            <span>Company value</span>
                            <h3>Company values are a guide on how the company should run in the future.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <ul className="value-features">
                                <li>
                                    <i className='flaticon-idea'></i>
                                    Innovative
                                </li>
                                <li>
                                    <i className='flaticon-talent'></i>
                                    Talent
                                </li>
                                <li>
                                    <i className='flaticon-key'></i>
                                    Enabling
                                </li>
                                <li>
                                    <i className='flaticon-responsibility'></i>
                                    Responsible
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyValue;
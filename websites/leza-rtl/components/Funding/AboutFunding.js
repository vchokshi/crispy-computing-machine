import React from 'react';

const AboutFunding = () => {
    return (
        <div className="funding-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="funding-image">
                            <img src="/images/funding.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="funding-content">
                            <span>About funding</span>
                            <h3>A fast approach to business financing. Business funding made fast and simple.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <strong>We Reimagined Fundraising.</strong>

                            <ul className="funding-list">
                                <li>
                                    <span>(1)</span>
                                    <b>Fast</b> Get a term sheet in 20 min
                                </li>
                                <li>
                                    <span>(2)</span>
                                    <b>Flexible</b> Our data driven investments range from $1K to $1M
                                </li>
                                <li>
                                    <span>(3)</span>
                                    <b>Fair</b> No equity or personal guarantee
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFunding;

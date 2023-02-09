import React from 'react';

const HowItWorks = () => {
    return (
        <div className="works-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>How it works</span>
                    <h2>The funds have helped us move our business forward</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="works-item">
                            <div className="icon">
                                <i className="flaticon-user"></i>
                            </div>
                            <h3>Connect Your <br /> Accounts</h3>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="works-item">
                            <div className="icon">
                                <i className="flaticon-reciever"></i>
                            </div>
                            <h3>Receive Your <br /> Funding</h3>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                        <div className="works-item">
                            <div className="icon">
                                <i className="flaticon-growth"></i>
                            </div>
                            <h3>Grow Your <br /> Business</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="works-shape">
                <div className="shape">
                    <img src="/images/works-shape.png" alt="image" />
                </div>
                <div className="shape2">
                    <img src="/images/works-shape2.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;
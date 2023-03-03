import React from 'react';

const Process = () => {
    return (
        <div className="overview-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>What’s the process?</span>
                    <h2>The Loans have helped us move our business forward</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="overview-item">
                            <div className="number">
                                <span>Apply</span>
                                <strong>1</strong>
                            </div>
                            <h3>Easily apply in <br /> minutes</h3>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="overview-item">
                            <div className="number">
                                <span>Process</span>
                                <strong>2</strong>
                            </div>
                            <h3>Clear and transparent <br /> process</h3>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div className="overview-item">
                            <div className="number">
                                <span>Support</span>
                                <strong>3</strong>
                            </div>
                            <h3>Support from real <br /> people</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overview-shape">
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

export default Process;

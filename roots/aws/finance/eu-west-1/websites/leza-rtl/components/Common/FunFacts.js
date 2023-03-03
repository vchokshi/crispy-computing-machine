import React from 'react';

const FunFacts = () => {
    return (
        <div className="fun-facts-area pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-fun-fact">
                            <h3>1,984</h3>
                            <p>Projects Done</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-fun-fact">
                            <h3>10,000</h3>
                            <p>Loans Increase</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-fun-fact">
                            <h3>
                                100 <span className="sign-icon">%</span>
                            </h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-fun-fact">
                            <h3>25</h3>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFacts;

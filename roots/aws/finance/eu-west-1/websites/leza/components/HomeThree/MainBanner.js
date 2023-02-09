import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner-area bg-three">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="main-banner-content">
                                    <h1>The funds have helped us move your business forward</h1>
                                    <p>Loans are advantageous as a relatively inexpensive way of borrowing money. Start or grow your own business</p>
                                    
                                    <div className="banner-btn">
                                        <Link href="/services">
                                            <a className="default-btn">
                                                View more <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-image">
                                    <img src="/images/vector.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;
import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner-area bg-two">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container-fluid">
                        <div className="main-banner-content">
                            <span>We are here for</span>
                            <h1>We believe in those made to do more</h1>
                            <p>Loans are advantageous as a relatively inexpensive way of borrowing money. Start or grow your own business</p>

                            <div className="banner-btn">
                                <Link href="/services">
                                    <a className="default-btn">
                                        View more <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="banner-social-buttons">
                            <ul>
                                <li>
                                    <span>Follow us</span>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="flaticon-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="flaticon-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className="flaticon-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;

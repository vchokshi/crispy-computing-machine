import React from 'react';
import Link from 'next/link';

const RecentNews = () => {
    return (
        <div className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Recent news</span>
                    <h2>Success story posts</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="image">
                                <Link href="/news-details">
                                    <a>
                                        <img src="/images/blog/blog1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <span>July 05, 2020</span>
                                <h3>
                                    <Link href="/news-details">
                                        <a>Financing loans available to small businesses</a>
                                    </Link>
                                </h3>
                                <Link href="/news-details">
                                    <a className="blog-btn">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="image">
                                <Link href="/news-details">
                                    <a>
                                        <img src="/images/blog/blog2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <span>July 04, 2020</span>
                                <h3>
                                    <Link href="/news-details">
                                        <a>5 Ways you can prepare your business for success</a>
                                    </Link>
                                </h3>
                                <Link href="/news-details">
                                    <a className="blog-btn">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="blog-item">
                            <div className="image">
                                <Link href="/news-details">
                                    <a>
                                        <img src="/images/blog/blog3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <span>July 03, 2020</span>
                                <h3>
                                    <Link href="/news-details">
                                        <a>Tips for saving money and better guide for investment</a>
                                    </Link>
                                </h3>
                                <Link href="/news-details">
                                    <a className="blog-btn">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentNews;

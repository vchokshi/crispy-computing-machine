import React from 'react';
import Link from 'next/link';

const NewsSidebar = () => {
    return (
        <div className="widget-area" id="secondary">
            <div className="widget widget_search">
                <form className="search-form search-top">
                    <label>
                        <input type="search" className="search-field" placeholder="Search Here" />
                    </label>
                    <button type="submit">
                        <i className='bx bx-search-alt'></i>
                    </button>
                </form>
            </div>

            <div className="widget widget_posts_thumb">
                <h3 className="widget-title">Recent Posts</h3>
                <div className="item">
                    <Link href="/news-details">
                        <a className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <h4 className="title usmall">
                            <Link href="/news-details">
                                <a>Customer experience more important </a>
                            </Link>
                        </h4>
                        <p className="time">06-07-2020</p>
                    </div>
                </div>

                <div className="item">
                    <Link href="/news-details">
                        <a className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <h4 className="title usmall">
                            <Link href="/news-details">
                                <a>Start up loans here for the long time</a>
                            </Link>
                        </h4>
                        <p className="time">06-07-2020</p>
                    </div>
                </div>

                <div className="item">
                    <Link href="/news-details">
                        <a className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <h4 className="title usmall">
                            <Link href="/news-details">
                                <a>Eligibility and criteria for business loans</a>
                            </Link>
                        </h4>
                        <p className="time">06-07-2020</p>
                    </div>
                </div>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>
                <ul>
                    <li>
                        <Link href="/news">
                            <a>Agricultural loan</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news">
                            <a>Business loan</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news">
                            <a>House loan</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news">
                            <a>Personal loan</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news">
                            <a>Education loan</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news">
                            <a>Payday Loan</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news">
                            <a>Vehicle loan</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news">
                            <a>Medical loan</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/news">
                            <a>StartUp loan</a>
                        </Link>
                    </li>
                </ul>
            </div>
 
            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Tags</h3>
                <div className="tagcloud section-bottom">
                    <Link href="/news">
                        <a>Business</a>
                    </Link>

                    <Link href="/news">
                        <a>Growth</a>
                    </Link>

                    <Link href="/news">
                        <a>Loan</a>
                    </Link>

                    <Link href="/news">
                        <a>Funds</a>
                    </Link>

                    <Link href="/news">
                        <a>Speed</a>
                    </Link>

                    <Link href="/news">
                        <a>Investment</a>
                    </Link>

                    <Link href="/news">
                        <a>Payment</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewsSidebar;
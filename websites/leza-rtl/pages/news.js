import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import NewsSidebar from '../components/News/NewsSidebar';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const News = () => {
    return (
        <>
            <Navbar />
            
            <PageBanner 
                pageTitle="News" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="News" 
                imgClass="item-bg-9" 
            /> 

            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="single-blog">
                                        <div className="image">
                                            <Link href="/news-details">
                                                <a>
                                                    <img src="/images/blog/blog4.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <ul className="post-meta">
                                            <li>
                                                <i className='bx bx-calendar'></i>
                                                July 05, 2020
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <Link href="#"><a>Admin</a></Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-comment'></i>
                                                No Comments
                                            </li>
                                        </ul>

                                        <div className="content">
                                            <h3>
                                                <Link href="/news-details">
                                                    <a>Financing loans available to small businesses</a>
                                                </Link>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  At vero eos et accusam et justo duo dolores et ea rebum.</p>

                                            <div className="blog-btn">
                                                <Link href="/news-details">
                                                    <a className="default-btn">
                                                        Read More <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="single-blog">
                                        <div className="image">
                                            <Link href="/news-details">
                                                <a>
                                                    <img src="/images/blog/blog5.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <ul className="post-meta">
                                            <li>
                                                <i className='bx bx-calendar'></i>
                                                July 04, 2020
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <Link href="#"><a>Admin</a></Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-comment'></i>
                                                No Comments
                                            </li>
                                        </ul>

                                        <div className="content">
                                            <h3>
                                                <Link href="/news-details">
                                                    <a>5 Ways you can prepare your business for success</a>
                                                </Link>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                            
                                            <div className="blog-btn">
                                                <Link href="/news-details">
                                                    <a className="default-btn">
                                                        Read More <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="single-blog">
                                        <div className="image">
                                            <Link href="/news-details">
                                                <a>
                                                    <img src="/images/blog/blog6.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <ul className="post-meta">
                                            <li>
                                                <i className='bx bx-calendar'></i>
                                                July 03, 2020
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <Link href="#"><a>Admin</a></Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-comment'></i>
                                                No Comments
                                            </li>
                                        </ul>

                                        <div className="content">
                                            <h3>
                                                <Link href="/news-details">
                                                    <a>Tips for saving money and better  guide for investment</a>
                                                </Link>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                            
                                            <div className="blog-btn">
                                                <Link href="/news-details">
                                                    <a className="default-btn">
                                                        Read More <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="single-blog">
                                        <div className="image">
                                            <Link href="/news-details">
                                                <a>
                                                    <img src="/images/blog/blog7.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <ul className="post-meta">
                                            <li>
                                                <i className='bx bx-calendar'></i>
                                                July 02, 2020
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <Link href="#"><a>Admin</a></Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-comment'></i>
                                                No Comments
                                            </li>
                                        </ul>

                                        <div className="content">
                                            <h3>
                                                <Link href="/news-details">
                                                    <a>Need financial help to open again your business</a>
                                                </Link>
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                            
                                            <div className="blog-btn">
                                                <Link href="/news-details">
                                                    <a className="default-btn">
                                                        Read More <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Pagination */}
                                <div className="col-lg-12 col-md-12">
                                    <div className="pagination-area">
                                        <Link href="#">
                                            <a className="next page-numbers">
                                                <i className='bx bx-chevron-left'></i>
                                            </a>
                                        </Link>

                                        <Link href="#">
                                            <a className="page-numbers current">1</a>
                                        </Link>

                                        <Link href="#">
                                            <a className="page-numbers">2</a>
                                        </Link>

                                        <Link href="#">
                                            <a className="page-numbers">3</a>
                                        </Link>

                                        <Link href="#">
                                            <a className="page-numbers">4</a>
                                        </Link>

                                        <Link href="#">
                                            <a className="next page-numbers">
                                                <i className='bx bx-chevron-right'></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <NewsSidebar />
                        </div>
                    </div>
                </div>
            </div>
          
            <Footer />
        </>
    )
}

export default News;
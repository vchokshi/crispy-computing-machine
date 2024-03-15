import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import NewsSidebar from '../components/News/NewsSidebar';
import CommentForm from '../components/News/CommentForm';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const NewsDetails = () => {
    return (
        <>
            <Navbar />
            
            <PageBanner 
                pageTitle="News Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="News Details" 
                imgClass="item-bg-1" 
            /> 

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="image">
                                    <img src="/images/blog/blog4.jpg" alt="image" />
                                </div>

                                <ul className="post-meta">
                                    <li>
                                        <i className='bx bx-calendar'></i>
                                        July 05, 2020
                                    </li>
                                    <li>
                                        <i className='bx bx-user'></i>
                                        <Link href="#">
                                            <a>Admin</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <i className='bx bx-comment'></i>
                                        No Comments
                                    </li>
                                </ul>

                                <div className="content">
                                    <h3>Financing loans available to small businesses</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                </div>

                                <blockquote>
                                    <i className='bx bxs-quote-alt-left'></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </blockquote>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  At vero eos et accusam et justo duo dolores et ea rebum.</p>

                                <div className="desc-text">
                                    <h3>Types of small business loans</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                </div>

                                <div className="desc-text-one">
                                    <h3>Other financing options</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                </div>

                                <div className="article-share">
                                    <ul className="social">
                                        <li><span>Share this post:</span></li>
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className='bx bxl-linkedin'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Comment Form */}
                                <CommentForm />
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

export default NewsDetails;
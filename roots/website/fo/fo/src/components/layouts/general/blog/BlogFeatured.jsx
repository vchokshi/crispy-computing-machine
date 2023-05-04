import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class BlogFeatured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datablog: [
                {
                    id: 1,
                    srcimg: 'images/about/home1/4.jpg',
                    meta: '15 November 2020',
                    title: 'Hire a Branding Consultant With a Similar Aesthetic to Your Own'
                },
                {
                    id: 2,
                    srcimg: 'images/about/home1/5.jpg',
                    meta: '15 November 2020',
                    title: 'The 6-Step Method for Managing Any Ethical Dilemma'
                },
       
            ],
            postlist: [
                {
                    id: 1,
                    class: 'style-1',
                    num: '1',
                    text: 'Too Much? Too Little? How to Set Fees for Your New Consulting Business'
                },
                {
                    id: 2,
                    class: 'style-2',
                    num: '2',
                    text: '30 Questions You Must Ask When Hiring a Social Media Consultant. When Outsourcing Social Media Marketing Makes Sense'
                },
                {
                    id: 3,
                    class: 'style-3',
                    num: '3',
                    text: 'Facebook Wants to Help Make Your App Super Smart'
                },
            ]
        }
    }
    
    render() {
        return (
                <div className="col-md-7">
                    <div className="company-news v1">
                        <div className="title-section">
                            <h4 className="title">Company News</h4>
                        </div>
                        <div className="post-us">
                            <div className="blog-home v1">
                                {
                                    this.state.datablog.map(data =>(
                                        <div key={data.id} className="item">
                                            <div className="thumb">
                                            <Link to="/blog-single" onClick={() => {window.location.href="/blog-single"}}>
                                                <img src={data.srcimg} alt="f&o" />
                                                <div className="overlay"></div>
                                            </Link>
                                            </div>
                                            <div className="post-v1">
                                                <div className="meta-post">
                                                    <Link to="#">{data.meta}</Link>
                                                </div>
                                                <h4 className="title"><Link to="/blog-single" onClick={() => {window.location.href="/blog-single"}}>{data.title}</Link></h4>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="post-list">
                            <ul className="list-us">
                                {
                                    this.state.postlist.map(data=>(
                                        <li key={data.id} className={data.class}>
                                            <div className="num-list">
                                                <p>{data.num}</p>
                                            </div>
                                            <div className="text-list">
                                                <p>{data.text}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                            
        );
    }
}

export default BlogFeatured;
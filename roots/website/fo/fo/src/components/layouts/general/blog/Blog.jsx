import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleNews: [
                {
                    id: 1,
                    title: 'Company News',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco.'
                    }
                ],
            boxitem: [
                {
                    id: 1,
                    srcimg: 'images/about/home3/1.jpg',
                    meta: '15 November 2020',
                    title: 'Hire a Branding Consultant With a Similar Aesthetic to Your Own'
                },
                {
                    id: 2,
                    srcimg: 'images/about/home3/2.jpg',
                    meta: '15 November 2020',
                    title: 'Hire a Branding Consultant With a Similar Aesthetic to Your Own'
                },
                {
                    id: 3,
                    srcimg: 'images/about/home3/3.jpg',
                    meta: '15 November 2020',
                    title: 'Hire a Branding Consultant With a Similar Aesthetic to Your Own'
                }
            ]
        }
    }
    
    render() {
        return (
            <section className="flat-row padding-big v1">
                <div className="flat-news">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="company-news">
                                    {
                                        this.state.titleNews.map(data=>(
                                            <div key={data.id} className="title-section style2">
                                                <h3 className="title">{data.title}</h3>
                                                <p>{data.description}</p>
                                            </div>
                                        ))
                                    }

                                    <div className="post-us v3">
                                        <div className="blog-home v3">
                                            {
                                                this.state.boxitem.map(data=>(
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;
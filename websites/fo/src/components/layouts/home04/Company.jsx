import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [
                {
                    id: 1,
                    title: 'Our Practice Areas',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco.',
                },
            ],
            boxitem: [
                {
                    id: 1,
                    srcimg: 'images/about/home4/1.jpg',
                    category: 'Travel & Aviation',
                    title: 'Leading consumer products companies'
                },
                {
                    id: 2,
                    srcimg: 'images/about/home4/2.jpg',
                    category: 'Business Services',
                    title: 'Bain helps transportation and logistics companies'
                },
                {
                    id: 3,
                    srcimg: 'images/about/home4/3.jpg',
                    category: 'Financial Services',
                    title: 'Developing a strategy and roadmap for clients'
                },
                {
                    id: 4,
                    srcimg: 'images/about/home4/4.jpg',
                    category: 'Transport & Logistics',
                    title: 'Bain helps transportation and logistics companies'
                },
                
            ]
        }
    }
    render() {
        return (
            <section className="flat-row">
                <div className="flat-news">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="company-news">
                                    {
                                        this.state.title.map(data=>(
                                            <div key={data.id} className="title-section style2">
                                                <h3 className="title">{data.title}</h3>
                                                <p>{data.description}</p>
                                            </div>
                                        ))
                                    }
                                    <div className="post-us v4">
                                        <div className="blog-home">
                                            {
                                                this.state.boxitem.map(data=>(
                                                    <div key={data.id} className="item">
                                                        <div className="thumb">
                                                        <Link to="/case-single-v1" onClick={() => {window.location.href="/case-single-v1"}}>
                                                            <img src={data.srcimg} alt="f&o" />
                                                            <div className="overlay"></div>
                                                        </Link>                                                            
                                                        </div>
                                                        <div className="post-v1">
                                                            <div className="meta-post">
                                                                <Link to="#">{data.category}</Link>
                                                            </div>
                                                            <h4 className="title"><Link to="/case-single-v1" onClick={() => {window.location.href="/case-single-v1"}}>{data.title}</Link></h4>
                                                        </div>
                                                    </div>
                                                ))
                                            }                                                                                       
                                        </div>

                                        <div className="button-view">
                                            <div className="submit-wrap">
                                            <Link to="/case-v1" onClick={() => {window.location.href="/case-v1"}}><button className="flat-button button-style">View all project</button></Link>
                                            </div>
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

export default Company;
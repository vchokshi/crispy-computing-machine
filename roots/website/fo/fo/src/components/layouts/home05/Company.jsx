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
                    srcimg: 'images/portfolio/home2/1.jpg',
                    category: 'Business Services',
                    title: 'Bain helps transportation and logistics companies'
                },
                {
                    id: 2,
                    srcimg: 'images/portfolio/home2/2.jpg',
                    category: 'Business Services',
                    title: 'Bain helps transportation and logistics companies'
                },
                {
                    id: 3,
                    srcimg: 'images/portfolio/home2/3.jpg',
                    category: 'Business Services',
                    title: 'Bain helps transportation and logistics companies'
                },
                {
                    id: 4,
                    srcimg: 'images/portfolio/home2/4.jpg',
                    category: 'Business Services',
                    title: 'Bain helps transportation and logistics companies'
                },
                {
                    id: 5,
                    srcimg: 'images/portfolio/home2/5.jpg',
                    category: 'Business Services',
                    title: 'Bain helps transportation and logistics companies'
                },
                {
                    id: 6,
                    srcimg: 'images/portfolio/home2/6.jpg',
                    category: 'Business Services',
                    title: 'Bain helps transportation and logistics companies'
                },
                
            ]
        }
    }
    render() {
        return (
            <section className="flat-row padding-bottom-small v5 v7">
                <div className="flat-practice v7">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {
                                    this.state.title.map(data=>(
                                        <div key={data.id} className="our-services">
                                            <div className="title-section">
                                                <h4 className="title">{data.title}</h4>
                                            </div>
                                            <div className="post-services">
                                                <p>{data.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="row">
                            <div className="practice-areas">
                                {
                                    this.state.boxitem.map(data=>(
                                        <div key={data.id} className="item">
                                            <div className="item-content">
                                            <Link to="/case-single-v1" onClick={() => {window.location.href="/case-single-v1"}}>
                                                <img src={data.srcimg} alt="f&o" />
                                                <div className="overlay"></div>
                                            </Link>
                                                <div className="link">
                                                    <h5 className="title">{data.category}</h5>
                                                    <Link to="/case-single-v1" onClick={() => {window.location.href="/case-single-v1"}}><p>{data.title}</p></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            /* <!-- flat-row --> */


        );
    }
}

export default Company;
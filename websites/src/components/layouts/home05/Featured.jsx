import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [
                {
                    id: 1,
                    title: 'Why Choose Us',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco.'
                }
            ],
            boxitem: [
                {
                    id: 1,
                    title: 'Business Consulting',
                    description: 'Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolorem que lau dantium aperiam.',
                    classboxheader: 'box-header v1',
                    classicon: 'icon-rich'
                },
                {
                    id: 2,
                    title: 'Lawyer Consulting',
                    description: 'Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolorem que lau dantium aperiam.',
                    classboxheader: 'box-header v2',
                    classicon: 'icon-justice'
                },
                {
                    id: 3,
                    title: 'Online Consulting',
                    description: 'Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolorem que lau dantium aperiam.',
                    classboxheader: 'box-header v3',
                    classicon: 'icon-diagram-3'
                },
                {
                    id: 4,
                    title: 'IT Management',
                    description: 'Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolorem que lau dantium aperiam.',
                    classboxheader: 'box-header v4',
                    classicon: 'icon-diagram-3'
                }
            ]
        }
    }
    render() {
        return (
            <section className="flat-row padding-v1">
                <div className="flat-our-services v5">
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
                        <div className="flat-icon">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="icon-circle">
                                        <div className="item m25 v5">
                                            {
                                                this.state.boxitem.map(data=>(
                                                    <div key={data.id} className="iconbox icon-left icon-center style-v1">
                                                        <div className="box">
                                                            <div className={data.classboxheader}>
                                                                <i className={data.classicon}></i>
                                                            </div>
                                                            <div className="icon-post">
                                                                <div className="box-title">
                                                                <Link to="/services-single" onClick={() => {window.location.href="/services-single"}}><h4 className="title">{data.title}</h4></Link>
                                                                    <div className="box-content">
                                                                        <p>{data.description}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
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
            // <!-- flat-row -->

           
        );
    }
}

export default Featured;
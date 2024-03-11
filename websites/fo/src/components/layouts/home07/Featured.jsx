import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [
                {
                    id: 1,
                    title: 'What We Offer',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco.'
                }
            ],
            boxitem: [
                {
                    id: 1,
                    title: 'Strategic Planning',
                    subtitle: 'Nemo enim ipsam voluptatem',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.',
                    classboxheader: 'box-header',
                    classicon: 'icon-diagram-3'
                },
                {
                    id: 2,
                    title: 'Trades & Stocks',
                    subtitle: 'Nemo enim ipsam voluptatem',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.',
                    classboxheader: 'box-header v1',
                    classicon: 'icon-justice-scale'
                },
                {
                    id: 3,
                    title: 'Audit & Assurance',
                    subtitle: 'Nemo enim ipsam voluptatem',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.',
                    classboxheader: 'box-header v1',
                    classicon: 'icon-diagram-3'
                },
                {
                    id: 4,
                    title: 'Turnaround Consulting',
                    subtitle: 'Nemo enim ipsam voluptatem',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.',
                    classboxheader: 'box-header v2',
                    classicon: 'icon-piggy-bank'
                },
                {
                    id: 5,
                    title: 'Financial Projections',
                    subtitle: 'Nemo enim ipsam voluptatem',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.',
                    classboxheader: 'box-header',
                    classicon: 'icon-diagram-3'
                },
                {
                    id: 6,
                    title: 'Turnaround Consulting',
                    subtitle: 'Nemo enim ipsam voluptatem',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.',
                    classboxheader: 'box-header',
                    classicon: 'icon-diagram-3'
                },
            ]
        }
    }
    render() {
        return (
            <section className="flat-row padding-v1 v7">
                <div className="flat-our-services v5 v7">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {
                                    this.state.title.map(data=> (
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
                                    <div className="item m25 v7">
                                        {
                                            this.state.boxitem.map(data =>(
                                                <div key={data.id} className="iconbox icon-left">
                                                    <div className={data.classboxheader}>
                                                        <i className={data.classicon}></i>
                                                    </div>
                                                    <div className="icon-post">
                                                        <div className="box-title">
                                                        <Link to="/services-single" onClick={() => {window.location.href="/services-single"}}><h4 className="title">{data.title}</h4></Link>
                                                            <p>{data.subtitle}</p>
                                                        </div>
                                                        <div className="box-content">
                                                            <p>{data.description}</p>
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
            </section>
            // <!-- flat-row -->

           
        );
    }
}

export default Contact;
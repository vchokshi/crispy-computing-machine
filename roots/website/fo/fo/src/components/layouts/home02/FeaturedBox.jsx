import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FeaturedBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [
                {
                    id: 1,
                    title: 'Why Choose Us',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
                },
            ],
            postslide: [
                {
                    id: 1,

                },
                {
                    id: 2,
                    
                },
                {
                    id: 3,
                    
                }
            ],
            boxitem: [
                {
                    id: 1,
                    classiconbox: 'iconbox icon-left',
                    classboxheader: 'box-header',
                    classicon: 'icon-diagram-3',
                    title: 'Business Planning, Strategy & Execution',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.'
                },
                {
                    id: 2,
                    classiconbox: 'iconbox icon-left',
                    classboxheader: 'box-header v1',
                    classicon: 'icon-justice-scale',
                    title: 'Financial Projections and Analysis',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.'
                },
                {
                    id: 3,
                    classiconbox: 'iconbox icon-left',
                    classboxheader: 'box-header v2',
                    classicon: 'icon-piggy-bank',
                    title: 'International Business Opportunities',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.'
                },
                {
                    id: 4,
                    classiconbox: 'iconbox icon-left ',
                    classboxheader: 'box-header v3',
                    classicon: 'icon-diagram-3',
                    title: 'Business Planning, Strategy & Execution',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.'
                },
                
            ]
        }
    }
    render() {
        return (
            <div className="flat-icon-post">
                <div className="flat-icon v2">
                    <div className="post" data-item="3" data-nav="false" 
                        data-dots="false" data-auto="false">
                        {
                            this.state.postslide.map(data =>(
                                <div key={data.id} className="item">
                                    {
                                        this.state.boxitem.map(data =>(
                                            <div key={data.id} className={data.classiconbox}>
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
                                        ))
                                    }                                    
                                </div>
                            ))
                        }
                       </div>
                </div>
            </div>
        );
    }
}

export default FeaturedBox;
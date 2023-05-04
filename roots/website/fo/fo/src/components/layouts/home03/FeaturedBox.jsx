import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FeaturedBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxitem: [
                {
                    id: 1,
                    classboxheader: 'box-header v1',
                    classicon: 'icon-rich',
                    title: 'Business Consulting',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque lau dantium, totam aperiam.'
                },
                {
                    id: 2,
                    classboxheader: 'box-header v2',
                    classicon: 'icon-justice',
                    title: 'Lawyer Consulting',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque lau dantium, totam aperiam.'
                },
                {
                    id: 3,
                    classboxheader: 'box-header v3',
                    classicon: 'icon-diagram-3',
                    title: 'ONLINE CONSULTING',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque lau dantium, totam aperiam.'
                },
                {
                    id: 4,
                    classboxheader: 'box-header v4',
                    classicon: 'icon-diagram-3',
                    title: 'IT MANAGEMENT',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque lau dantium, totam aperiam.'
                },
                
            ]
        }
    }
    render() {
        return (

            <div>
                {
                    this.state.boxitem.map(data=>(
                        <div key={data.id} className="iconbox icon-left style-v1">
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
                                        <Link to="/services-single" onClick={() => {window.location.href="/services-single"}} className="comment-reply">Read More<i className="fa fa-chevron-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default FeaturedBox;
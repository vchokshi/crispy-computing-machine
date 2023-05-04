import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class EventBoxs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEvents: [
                {
                    id: 1,
                    srcimg: 'images/about/home1/1.jpg',
                    title: 'Business Planning, Strategy & Execution',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.',
                    classboxheader: 'box-header',
                    classicon: 'icon-diagram-3' 
                },
                {
                    id: 2,
                    srcimg: 'images/about/home1/2.jpg',
                    title: 'Financial Projections and Analysis',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.',
                    classboxheader: 'box-header v1',
                    classicon: 'icon-justice-scale' 
                },
                {
                    id: 3,
                    srcimg: 'images/about/home1/3.jpg',
                    title: 'International Business Opportunities',
                    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam aperiam.',
                    classboxheader: 'box-header v2',
                    classicon: 'icon-piggy-bank' 
                },
            ]
        }
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="choose-us">
                        <div className="flat-icon-post">
                            <div className="flat-icon">
                                <div className="post">
                                    <div className="item">
                                        {
                                            this.state.dataEvents.map(data =>(
                                                <div className="iconbox icon-left v1" key={data.id} >
                                                    <div className="thumb">
                                                        <Link to="/services-single" onClick={() => {window.location.href="/services-single"}}>
                                                            <img src={data.srcimg} alt="f&o" />
                                                            <div className="overlay"></div>
                                                        </Link>
                                                    </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventBoxs;
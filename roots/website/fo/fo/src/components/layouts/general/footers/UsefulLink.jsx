import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class UsefulLink extends Component {
    constructor (props) {
        super(props);
        this.state = {
            link1: [
                {
                    id: 1,
                    class: 'facebook',
                    title: 'Facebook'
                },
                {
                    id: 2,
                    class: 'twiter',
                    title: 'Twiiter'
                },
                {
                    id: 3,
                    class: 'google',
                    title: 'Google Plus'
                },
                {
                    id: 4,
                    class: 'linkedIn',
                    title: 'LinkedIn'
                },
                {
                    id: 5,
                    class: 'youtube',
                    title: 'Youtube'
                },
            ],
            link2: [
                {
                    id: 1,
                    class: 'facebook',
                    title: 'Accumulation'
                },
                {
                    id: 2,
                    class: 'twiter',
                    title: 'Taxation'
                },
                {
                    id: 3,
                    class: 'google',
                    title: 'Risk Management'
                },
                {
                    id: 4,
                    class: 'linkedIn',
                    title: 'Estate Planning'
                },
                {
                    id: 5,
                    class: 'youtube',
                    title: 'Business Planning'
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="col-md-2">
                        <div className="widget widget-follow-us">
                            <div className="title-link v3">
                                <h5 className="widget-title">Follow Us</h5>
                            </div>
                            <ul className="follow-us">
                                {
                                    this.state.link1.map(data =>(
                                        <li key={data.id} className={data.class}><Link to="#"> {data.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* col-md-2 */}

                    <div className="col-md-3">
                        <div className="widget widget-our-services">
                            <div className="title-link v4">
                                <h5 className="widget-title">Our Services</h5>
                            </div>
                            <ul className="our_services">
                                {
                                    this.state.link2.map(data =>(
                                        <li key={data.id} className={data.class}><Link to="#"> {data.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* <!-- col-md-3 --> */}
            </div>
            
        );
    }
}

export default UsefulLink;
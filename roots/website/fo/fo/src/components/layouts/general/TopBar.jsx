import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class TopBar extends Component {
    render() {
        return (
            <div className="header-inner-pages">
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="flat-information">
                                    <li className="phone">
                                        <Link to="#" title="Phone number"><i>Call us: 480 236 5525</i></Link>
                                    </li>
                                    <li className="email">
                                        <Link to="#" title="Email address"><i>Email: vchokshi23@gmail.com</i></Link>
                                    </li>
                                </ul>
                                <div className="style-box text-right">
                                    <ul className="flat-socials v1">
                                        <li className="facebook">
                                            <Link to="#"><i className="fa fa-facebook-f"></i></Link>
                                        </li>
                                        <li className="twitter">
                                            <Link to="#"><i className="fa fa-twitter"></i></Link>
                                        </li>
                                        <li className="instagram">
                                            <Link to="#"><i className="fa fa-instagram"></i></Link>
                                        </li>
                                        <li className="wifi">
                                            <Link to="#"><i className="fa fa-wifi"></i></Link>
                                        </li>
                                    </ul>
                                    <div className="question">
                                        <div>
                                            <i className="fa fa-question-circle-o"></i><p className="text">Have any questions</p>
                                        </div>
                                    </div>
                                    <div className="box-text text-right">
                                        <p>Get An Appointment</p>
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

export default TopBar;

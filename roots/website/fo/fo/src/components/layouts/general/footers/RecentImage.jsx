import React, { Component } from 'react';
import { Link } from "react-router-dom";
class RecentImage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            logo: [
                {
                    id: 1,
                    srcimg: 'images/logo-footer.png',
                    title: 'We have over 15 years of experience',
                    description: 'Our suppoer available to help you 24 hours a day, seven days week',
                    map: 'Go to Google Maps'
                }
            ]
        }
    }
    render() {
        return (
            <div className="col-md-4">
                {
                    this.state.logo.map(data=>(
                        <div key={data.id} className="footer-logo">
                            <img src={data.srcimg} alt="f&o" />
                            <div className="im-map">
                                <h5 className="title">{data.title}</h5>
                                <p>{data.description}</p>
                                <div className="map">
                                    <Link to="#"><i className="fa fa-map-marker"></i> {data.map}</Link>
                                </div>
                            </div>
                        </div>
                    /* <!-- footer-logo --> */
                    ))
                }
                
            </div>
            /* <!-- col-md-4 --> */
        );
    }
}

export default RecentImage;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class IntroducFT extends Component {
    render() {
        return (
            <div className="widget-about">
                <div id="logo-ft">
                    <Link to="index.html"><img src="images/logo/logo-ft.png" alt="bookflare" width={157} height={29}
                        data-retina="images/logo/logo-ft@2x.png" data-width={157} data-height={29} /></Link>
                </div>
                <p className="description">We are a new design studio based in USA. We have over 20 years of combined experience,
                    and know a thing or two about designing websites and mobile apps.</p>
                <div className="list-info">
                    <ul>
                        <li className="address">
                            <Link to="#">1107 Wood Street Saginaw, MI New York 48607</Link>
                        </li>
                        <li className="phone">
                            <Link to="#">+123 345 678 000</Link>
                        </li>
                        <li className="mail">
                            <Link to="#">info@example.com</Link>
                        </li>
                    </ul>
                </div>
                <div className="socails">
                    <ul className="list">
                        <li>
                            <Link to="#"><span className="fa fa-twitter" /></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="fa fa-linkedin-square" /></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="fa fa-facebook-official" /></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="fa fa-skype" /></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="fa fa-pinterest-square" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default IntroducFT;
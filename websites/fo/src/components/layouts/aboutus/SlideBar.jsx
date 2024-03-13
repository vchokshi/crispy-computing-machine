import React, { Component } from 'react';
import { Link } from "react-router-dom";
class SlideBar extends Component {
	constructor(props) {
        super(props);
        this.state = {
            tabcategory: [
                {
                    id: 1,
					title: 'Overview',
                },
                {
                    id: 2,
					title: 'Our history',
                },
                {
                    id: 3,
					title: 'Careers',
                },
                {
                    id: 4,
					title: 'Team Member Grid',
                },
                {
                    id: 5,
					title: 'Team Member List',
                },
                {
                    id: 6,
					title: 'Our Partners',
                },
                {
                    id: 7,
					title: 'FAQ',
                },
				
            ],
        }
    }
    render() {
        return (
			    <div className="sidebar">
                    <div className="widget widget-categories team">
                        <ul className="categories">
                        <li>
                                <Link to="/overview" onClick={() => {window.location.href="/overview"}}>Overview</Link>
                            </li>
                            <li>
                                <Link to="/history" onClick={() => {window.location.href="/history"}}>Our history</Link>
                            </li>
                            <li>
                                <Link to="#">Careers</Link>
                            </li>
                            <li>
                                <Link to="team-v1" onClick={() => {window.location.href="/team-v1"}}>Team Member Grid</Link>
                            </li>
                            <li>
                                <Link to="/team-v2" onClick={() => {window.location.href="/team-v2"}}>Team Member List</Link>
                            </li>
                            <li>
                                <Link to="/partner" onClick={() => {window.location.href="/partner"}}>Our Partners</Link>
                            </li>
                            <li>
                                <Link to="#">FAQ</Link>
                            </li>                             
                        </ul>
                    </div>
                    {/* <!-- /widget-archives --> */}

                    <div className="widget widget-need">
                        <div className="title-link v5">
                            <h5 className="widget-title">Need our help?</h5>
                        </div>
                        <p>Donec at cursus sem. Duis condimentum posuere purus.</p>
                        <p className="form-submit">
                            <input name="submit" type="submit" id="submit" className="submit" value="Contact Us" />
                        </p>
                    </div>
                    {/* <!-- /widget-archives --> */}

                    <div className="widget widget-brochures">
                        <div className="title-link v6">
                            <h5 className="widget-title">Our Brochures</h5>
                        </div>
                        <p>View our 2021 financial prospectus bro-chure for an easy to read guide on all of the services offered.</p>
                        <ul className="dowload">
                            <li className="dl-word"><Link to="#">Brochures.doc</Link></li>
                            <li className="dl-pdf"><Link to="#">Brochures.pdf</Link></li>
                        </ul>
                    </div>
                    {/* <!-- /widget-archives --> */}

                    <div className="widget widget-testimonials">
                        <div className="text">
                            <p>Consulting WP really helped us achieve our financial goals. The slick presentation along with fan tastic readability ensures that our financial standing is stable.</p>
                            <span className="v1"></span>
                            <span className="v2"></span>
                            <span className="v3"></span>
                        </div>
                        <div className="avata">
                            <div className="thumb">
                                <img src="images/member/4.jpg" alt="f&o" />
                            </div>
                            <div className="post">
                                <h4 className="title"><Link to="#">Kevin Johnston</Link></h4>
                                <p>Ceo & Founder</p>
                            </div>

                        </div>
                    </div>
                </div>
                /* <!-- /sidebar --> */
        )
                                
    }
}

export default SlideBar;
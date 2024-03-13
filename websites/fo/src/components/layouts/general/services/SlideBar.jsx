import React, { Component } from 'react';
import { Link } from "react-router-dom";
class SlideBar extends Component {
	constructor(props) {
        super(props);
        this.state = {
            menutab: [
                {
                    id: 1,
					title: 'Risk Management',
                },
                {
                    id: 2,
                    title: 'Accumulation',
                    class: 'active'
                },
                {
                    id: 3,
					title: 'Taxation',
                },
                {
                    id: 4,
					title: 'Business Planning',
                },
                {
                    id: 5,
					title: 'Estate Planning',
                },
                {
                    id: 6,
					title: 'Home Transparent Header',
				},
				
            ],
            titletab: [
                {
                    id: 1,
                    title: 'Our Brochure',
                    description: 'View our 2021 financial prospectus brochure for an easy to read guide on all of the services offered.'
                }
            ]
        }
    }
    render() {
        return (
			<div className="col-md-3">
                <div className="sidebar left">
                    <aside className="widget widget_nav_menu">
                        <div className="menu-services-container">
                            <ul className="menu menu-tab">
                                {
                                    this.state.menutab.map(data =>(
                                        <li className={data.class} key={data.id} ><Link to="#">{data.title}</Link></li>
                                    ))
                                }										
                            </ul>
                        </div>
                    </aside>

                    <aside className="widget widget-brochure services">
                        {
                            this.state.titletab.map(data =>(
                                <div className="brochure-box-title" key={data.id} >
                                    <h5 className="brochure-title">{data.title}</h5>
                                    <p> {data.description}</p>
                                </div>
                            ))
                        }			
                        <p className="btn-download">
                            <Link to="#" title="" className="pdf">Download .PDF</Link>
                        </p>
                        <p className="btn-download doc">
                            <Link to="#" title="" className="doc">Download .DOC</Link>
                        </p>
                    </aside>
                </div>
            </div>
        )
                                
    }
}

export default SlideBar;
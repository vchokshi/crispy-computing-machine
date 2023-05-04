import React, { Component } from 'react';
import { Link } from "react-router-dom";
class SlideBar extends Component {
	constructor(props) {
        super(props);
        this.state = {
            tabcategory: [
                {
                    id: 1,
					title: 'Strategic Planning'
                },
                {
                    id: 2,
					title: 'Trades & Stocks'
                },
                {
                    id: 3,
					title: 'Audit & Assurance',
                },
                {
                    id: 4,
					title: 'Turnaround Consulting',
                },
                {
                    id: 5,
					title: 'Trades & Stocks',
                },
                {
                    id: 6,
					title: 'Strategic Planning',
                },
                {
                    id: 7,
					title: 'Financial Projections',
                },
                {
                    id: 8,
					title: 'Turnaround Consulting',
                },
				
            ],
        }
    }
    render() {
        return (
                <div className="sidebar-services">
                    <div className="list-services">
                        <ul className="services">
                            {
                                this.state.tabcategory.map(data=>(
                                    <li key={data.id} >
                                        <Link to="#">{data.title}</Link>
                                    </li>
                                ))
                            }        
                        </ul>
                    </div>
                </div>
    
        )
                                
    }
}

export default SlideBar;
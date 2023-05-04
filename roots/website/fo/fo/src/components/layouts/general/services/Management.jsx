import React, { Component } from 'react';
import SlideBar  from "./SlideBar";
import MainPost  from "./MainPost";
class Management extends Component {
	constructor(props) {
        super(props);
        this.state = {
            itembox: [
                {
                    id: 1,
					title: 'Wealth Management',
					classicon: 'icon-benefit',
					boxcontent: 'Enim ad minim veniam, quis nostrud exercitation ullamco laboris. Quis nostrud exercitation'
				},
            ]
        }
    }
    render() {
        return (
			
			<section className="flat-row pd-services-widget">
                        <div className="container">
                            <div className="row flat-tabs" data-effect ="fadeIn">
								<SlideBar />
                                <MainPost />
                            </div>				
                        </div>
			        </section>
                    // flat-row-iconbox
        );
    }
}

export default Management;
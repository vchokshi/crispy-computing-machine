import React, { Component } from 'react';
import FeaturedBox from './FeaturedBox';

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [
                {
                    id: 1,
                    title: 'What We Offer',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
                },
            ]
        }
    }
    render() {
        return (
            <section className="flat-row">
            <div className="flat-our-services v3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {
                                this.state.title.map(data=>(
                                    <div key={data.id} className="our-services">
                                        <div className="title-section">
                                            <h4 className="title">{data.title}</h4>
                                        </div>
                                        <div className="post-services">
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flat-icon v3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="icon-circle">
                                    <div className="item m25">
                                        <FeaturedBox />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <!-- flat-row -->

        );
    }
}

export default Featured;
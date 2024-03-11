import React, { Component } from 'react';
import FeaturedBox from './FeaturedBox';
import FormRight from './FormRight';

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [
                {
                    id: 1,
                    title: 'Why Choose Us',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
                },
            ]
        }
    }
    render() {
        return (
                <section className="flat-row">
                    <div className="flat-choose-us">
                        <div className="flat-silder">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        {
                                            this.state.title.map(data =>(
                                                <div key={data.id} className="choose-us v1">
                                                <div className="title-section">
                                                    <h4 className="title">{data.title}</h4>
                                                </div>
                                                <div className="post-choose">
                                                    <p>{data.description}</p>
                                                </div>
    
                                                <FeaturedBox />
                                            </div>
                                        
                                            ))
                                        }
                                       </div>
                                    <FormRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}

export default Featured;
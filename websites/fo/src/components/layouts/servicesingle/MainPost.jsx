import React, { Component } from 'react';
import { Overview, SlideBar } from '.';
class MainPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleheading: [
                {
                    id: '1',
                    title: 'What We Can Offer You'
                }
            ],
        }
    }
    render() {
        return (
                /* //  Blog posts */
                <section className="main-content padding-small">
                    <div className="container">
                        <div className="flat-services">
                            <div className="row">
                                <div className="col-md-12">
                                    {
                                        this.state.titleheading.map(data=>(
                                            <div key={data.id} className="title-section style2">
                                                <h3 className="title">{data.title}</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.</p>
                                             </div>
                                        ))
                                    }                                   
                                </div>
                            </div>

                            <div className="row">
                                <div className="flat-services-control">
                                    <div className="col-md-3">
                                        <SlideBar />
                                    </div>

                                    <Overview />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
                                
    }
}

export default MainPost;
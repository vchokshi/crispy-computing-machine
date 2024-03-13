import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Testimonals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [
                {
                    id: 1,
                    text: 'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae',
                    name: 'Donald Simpson',
                    subname: 'Founder & CEO, Arcade Systems',
                },
                {
                    id: 2,
                    text: 'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae',
                    name: 'Donald Simpson',
                    subname: 'Founder & CEO, Arcade Systems',
                },
                {
                    id: 3,
                    text: 'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae',
                    name: 'Donald Simpson',
                    subname: 'Founder & CEO, Arcade Systems',
                },
            ],
            
        }
    }
    render() {
        return (
            <div className="page-title parallax parallax2">
                <div className="container">
                    <div className="flat-silder flat-testimonial">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="flat-reviews">
                                    <div className="flat-causes">
                                        <div className="icon">
                                            <img src="images/about/1.png" alt="f&o" />
                                        </div>
                                        <div className="featured-causes" data-item="3" data-nav="false" 
                                            data-dots="false" data-auto="false">
                                                {
                                                    this.state.item.map(data=>(
                                                        <div key={data.id} className="item">
                                                            <div className="text">
                                                                <p className="text-title">{data.text}</p>
                                                                <div className="title-testimonial">
                                                                    <div className="post-title">
                                                                        <h6 className="title-post"><Link to="#">{data.name}</Link></h6>
                                                                        <p>{data.subname}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                        </div>
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
export default Testimonals;
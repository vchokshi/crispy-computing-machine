import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Testimonals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadetext: [
                {
                    id: 1,
                    text: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni'
                },
                {
                    id: 2,
                    text: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni'
                },
                {
                    id: 3,
                    text: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni'
                },
                
            ],
            fadeimg: [
                {
                    id: 1,
                    srcimg: 'images/member/1.jpg',
                    dataslide: '0'
                },
                {
                    id: 2,
                    srcimg: 'images/member/2.jpg',
                    dataslide: '1'
                },
                {
                    id: 3,
                    srcimg: 'images/member/3.jpg',
                    dataslide: '2'
                }
            ],
            fadetes: [
                {
                    id: 1,
                    author: 'George Johanson',
                    title: 'Founder & CEO, Themelucky95',
                    review: [
                        {
                            id: 1,
                        },
                        {
                            id: 2,
                        },
                        {
                            id: 3,
                        },
                        {
                            id: 4,
                        },
                        {
                            id: 5,
                        }
                    ]   
                },
                {
                    id: 2,
                    author: 'George Johanson',
                    title: 'Founder & CEO, Themelucky95',
                    review: [
                        {
                            id: 1,
                        },
                        {
                            id: 2,
                        },
                        {
                            id: 3,
                        },
                        {
                            id: 4,
                        },
                        {
                            id: 5,
                        }
                    ]   
                },
                {
                    id: 3,
                    author: 'George Johanson',
                    title: 'Founder & CEO, Themelucky95',
                    review: [
                        {
                            id: 1,
                        },
                        {
                            id: 2,
                        },
                        {
                            id: 3,
                        },
                        {
                            id: 4,
                        },
                        {
                            id: 5,
                        }
                    ]   
                }
            ] 
        }
    }
    render() {
        return (
            <section className="flat-row">
                <div className="container">
                    <div className="testimonals-post">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="span12">
                                    <div className="testimonials">
                                        <div className="icon">
                                            <div className="title-section style1">
                                                <h3 className="title">1000+ Happy Clients</h3>
                                            </div>
                                            <img src="images/about/1.png" alt="f&o" />
                                        </div>
                                        <div className="testimonial-text">
                                            {
                                                this.state.fadetext.map(data=>(
                                                    <div key={data.id} className="fade-text">
                                                        {data.text}
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        <div id="bx-pager" className="testimonial-avatar orches-animation" data-animation="pulse" data-animation-delay="0" data-animation-offset="75%">
                                            {
                                                this.state.fadeimg.map(data =>(
                                                    <Link key={data.id} data-slide-index={data.dataslide} to="">
                                                        <img src={data.srcimg} alt="f&o" />
                                                    </Link>
                                                ))
                                            }
                                        </div>

                                        <div className="testimonial-text v1">
                                            {
                                                this.state.fadetes.map(data =>(
                                                    <div key={data.id} className="fade-text">
                                                        <h5 className="name">{data.author}</h5>
                                                        <p>{data.title}</p>
                                                        <ul className="flat-reviews">
                                                            <li className="star">
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li className="star">
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li className="star">
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li className="star">
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                            <li className="star-v1">
                                                                <i className="fa fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                ))
                                            }
                                            

                                           </div>
                                        {/* <!-- /.testimonial-text --> */}
                                    </div>
                                    {/* <!-- /.testimonials --> */}
                                </div>
                                {/* <!-- /.span12 --> */}
                            </div>
                            {/* <!-- /.col-md-12 --> */}
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.testimonals-post --> */}
                </div>
                {/* <!-- /.container --> */}
            </section>
        );
    }
}
export default Testimonals;
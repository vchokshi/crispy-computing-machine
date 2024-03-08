import React, { Component } from 'react';

class CarouselClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgCarousel: [
                {
                    id: 1,
                    srcimg: 'images/clients/1.png',
                },
                {
                    id: 2,
                    srcimg: 'images/clients/2.png',
                },
                {
                    id: 3,
                    srcimg: 'images/clients/3.png',
                },
                {
                    id: 4,
                    srcimg: 'images/clients/4.png',
                },
                {
                    id: 5,
                    srcimg: 'images/clients/5.png',
                }
            ], 
        }
    }
    render() {
        return (
            <section className="flat-row no-padding">
                <div className="flat-clients">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {
                                    this.state.imgCarousel.map(data =>(
                                        <div key={data.id} className="thumb-clients v1">
                                            <img src={data.srcimg} alt="f&o" />
                                        </div>
                                    ))
                                }                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default CarouselClient;
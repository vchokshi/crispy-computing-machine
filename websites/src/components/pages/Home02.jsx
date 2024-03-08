import React, { Component } from 'react';
import { Footer,Header,Slider,  Loader,CarouselClient,  TopBar, BottomBar } from '../layouts/general';
import Portfolio from '../layouts/home02/Portfolio';
import { Featured } from '../layouts/home02';
import Testimonals from '../layouts/general/Testimonals';

class Home02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Home Modern Header'
                }
            ],
        }
    }
    
    render() {
        return (
            <div className="header-sticky">
                <div className="boxed">
                    <Loader />
                    <TopBar />
                    {
                        this.state.headers.map(data => (
                            <Header data={data} key={data.id}/>
                        ))
                    }
                    <Slider />
                    <Featured />
                    <div className="page-title parallax parallax1">
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="flat-talk">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-section style1">
                                            <p>To help entrepreneurs get their act together</p>
                                            <p><span>before they talk </span> to investors.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- row --> */}
                            </div>
                            {/* <!-- flat-talk --> */}
                        </div>
                        {/* <!-- container --> */}
                    </div>
                    {/* <!-- page-title --> */}
                    <Portfolio />
                    <Testimonals />
                    <CarouselClient />
                    <Footer />
                    <BottomBar />
                </div>
            </div>
        );
    }
}

export default Home02;
import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import { Footer,Header,Slider,  Loader,CarouselClient,  TopBar, BottomBar } from '../layouts/general';
import { Featured } from '../layouts/general/featured';
import FunFact from '../layouts/general/FunFact';
import Portfolio from '../layouts/general/Portfolio';
import Parallax from '../layouts/general/Parallax';
import FormLeft from '../layouts/general/blog/FormLeft';
import BlogFeatured from '../layouts/general/blog/BlogFeatured';

class Home01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           headers: [
               {
                   id: 1,
                   names: 'Home'
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
                    <FunFact />
                    <Portfolio />
                    <Parallax />
                    <CarouselClient />
                    <section className="flat-row">
                        <div className="flat-choose-us flat-news v1">
                            <div className="flat-silder">
                                <div className="container">
                                    <div className="row">
                                        <FormLeft />
                                        <BlogFeatured />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                    <BottomBar />
                </div>
            </div>
        );
    }
}

export default withRouter(Home01);
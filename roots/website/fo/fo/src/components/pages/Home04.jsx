import React, { Component } from 'react';
import { TopBar,Header, CarouselClient,Slider,  Footer,  Loader, BottomBar} from '../layouts/general';
import Blog from '../layouts/general/blog/Blog';
import { Featured } from '../layouts/general/featured';
import Parallax from '../layouts/general/Parallax';
import { Company, Testimonals } from '../layouts/home04';

class Home04 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Home Widget Header'
                }
            ],
        }
    }
    render() {
        return (
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
                <Testimonals />
                <Company />
                <Parallax />
                <CarouselClient />
                <Blog />
                <Footer />
                <BottomBar />
            </div>
        );
    }
}

export default Home04;
import React, { Component } from 'react';
import { TopBar,Header, CarouselClient,Slider,  Footer,  Loader, BottomBar} from '../layouts/general';
import Blog from '../layouts/general/blog/Blog';
import Testimonals from '../layouts/general/Testimonals';
import Featured from '../layouts/home03/Featured';
import Parallax from '../layouts/home03/Parallax';
import Portfolio from '../layouts/home03/Portfolio';

class Home03 extends Component {
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
                <Portfolio />
                <Testimonals />
                <Parallax />
                <Blog />
                <CarouselClient />
                <Footer />
                <BottomBar />
            </div>
        );
    }
}

export default Home03;
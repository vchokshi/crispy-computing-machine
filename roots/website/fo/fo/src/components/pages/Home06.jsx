import React, { Component } from 'react';
import { TopBar,Header, CarouselClient,Slider,  Footer,  Loader, BottomBar} from '../layouts/general';
import Parallax from '../layouts/home03/Parallax';
import Portfolio from '../layouts/home03/Portfolio';
import { Featured } from '../layouts/home05';
import { Contact, Services } from '../layouts/home06';

class Home06 extends Component {
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
                <Services />
                <Parallax />
                <Contact />            
                <CarouselClient />
                <Footer />
                <BottomBar />
            </div>
        );
    }
}

export default Home06;
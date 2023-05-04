import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { TopBar,Header, CarouselClient,Slider,  Footer,  Loader, BottomBar} from '../layouts/general';
import { Blog } from '../layouts/general/blog';
import { Featured } from '../layouts/home07';
import { Company, Contact, Parallax  } from '../layouts/home07';

class Home07 extends Component {
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
                <section className="flat-row no-padding">
                    <div className="full-color-v1">
                        <div className="container">
                            <div className="row">
                                <div className="box-test">
                                    <p>With more than 10 years of knowledge and expertise we design and code websites and apps, we build brands and help them succeed.</p>
                                    <div className="submit-wrap">
                                    <Link to="/contact-v1" onClick={() => {window.location.href="/contact-v1"}}><button className="flat-button button-style">Get An Appointment</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Company />
                <Contact />
                <Parallax />
                <Blog />
                <CarouselClient />
                <Footer />
                <BottomBar />
            </div>
        );
    }
}

export default Home07;
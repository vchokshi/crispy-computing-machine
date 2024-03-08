import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header, TopBar , Footer, Loader, BottomBar } from '../layouts/general';
import { MainPost } from '../layouts/servicesingle';
class ServicesSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Pages'
                }
            ],
            titleheading: [
                {
                    id: '1',
                    title: 'What We Can Offer You'
                }
            ],
            pagetitle: [
                {
                    id: 1,
                    class: 'home',
                    title: 'Home'
                },
            ],
            tabcategory: [
                {
                    id: 1,
					title: 'Overview',
                },
                {
                    id: 2,
					title: 'Our history',
                },
                {
                    id: 3,
					title: 'Careers',
                },
                {
                    id: 4,
					title: 'Team Member Grid',
                },
                {
                    id: 5,
					title: 'Team Member List',
                },
                {
                    id: 6,
					title: 'Our Partners',
                },
                {
                    id: 7,
					title: 'FAQ',
                },
				
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
                    <div className="page-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12"> 
                                    <div className="breadcrumbs">
                                        <ul>
                                            {
                                                this.state.pagetitle.map(data=>(
                                                    <li key={data.id} className={data.class}><Link to="/" onClick={() => {window.location.href="/"}}>{data.title}</Link></li>
                                                ))
                                            }
                                            <li>Services Single</li>
                                        </ul>                   
                                    </div>        
                                </div>
                            </div>
                        </div>                    
                    </div>
                    <MainPost />
                    <Footer />
                    <BottomBar />
                </div>
            </div>
            
        );
    }
}

export default ServicesSingle;
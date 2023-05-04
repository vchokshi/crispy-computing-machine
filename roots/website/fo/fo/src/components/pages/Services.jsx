import React, { Component } from 'react';
import { Footer,Header,  Loader,  TopBar, BottomBar } from '../layouts/general';
import { Link } from "react-router-dom";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Services'
                }
            ],
            pagetitle: [
                {
                    id: 1,
                    class: 'home',
                    title: 'Home'
                },
             ],
           title: [
               {
                   id: 1,
                   title: 'What We Can Offer You',
               }
           ],
           boxitem: [
                {
                    id: 1,
                    srcimg: 'images/services/1.jpg',
                    title: 'Strategic Planning',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text.'
                },
                {
                    id: 2,
                    srcimg: 'images/services/2.jpg',
                    title: 'Trades & Stocks',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text.'
                },
                {
                    id: 3,
                    srcimg: 'images/services/3.jpg',
                    title: 'Audit & Assurance',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text.'
                },
                {
                    id: 4,
                    srcimg: 'images/services/4.jpg',
                    title: 'Turnaround Consulting',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text.'
                },
                {
                    id: 5,
                    srcimg: 'images/services/5.jpg',
                    title: 'Trades & Stocks',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text.'
                },
                {
                    id: 6,
                    srcimg: 'images/services/6.jpg',
                    title: 'Strategic Planning',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text.'
                },
                {
                    id: 7,
                    srcimg: 'images/services/7.jpg',
                    title: 'Financial Projections',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text.'
                },
                {
                 id: 8,
                 srcimg: 'images/services/8.jpg',
                 title: 'Turnaround Consulting',
                 description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text.'
                 },
            ]
           
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
                                            <li>Services</li>
                                        </ul>                   
                                    </div>        
                                </div>
                            </div>
                        </div>                    
                    </div>
                    {/* <!-- Blog posts --> */}
                    <section className="main-content padding-small">
                        <div className="container">
                            <div className="flat-services">
                                <div className="row">
                                    <div className="col-md-12">
                                        {
                                            this.state.title.map(data=>(
                                                <div key={data.id} className="title-section style2">
                                                    <h3 className="title">{data.title}</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            ))
                                        }
                                        

                                        <div className="services-post">
                                            {
                                                this.state.boxitem.map(data=>(
                                                    <div key={data.id} className="item">
                                                        <div className="thumb-item">
                                                        <Link to="/services-single" onClick={() => {window.location.href="/services-single"}}>
                                                            <img src={data.srcimg} alt="f&o" />
                                                            <div className="overlay"></div>
                                                        </Link>
                                                        </div>
                                                        <div className="post">
                                                            <h4 className="title"><Link to="/services-single" onClick={() => {window.location.href="/services-single"}}>{data.title}</Link></h4>
                                                            <p>{data.description}</p>
                                                            <Link to="/services-single" onClick={() => {window.location.href="/services-single"}} className="comment-reply">Read More<i className="fa fa-chevron-right"></i></Link>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            </div>
                                    </div>
                                    {/* <!-- /.col-md-12 --> */}
                                </div>
                                {/* <!-- /.row --> */}
                            </div>
                        </div>
                        {/* <!-- /.container -->    */}
                    </section>
                    <Footer />
                    <BottomBar />
                </div>
            </div>
        );
    }
}

export default AboutUs;
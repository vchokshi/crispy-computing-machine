import React, { Component } from "react";
import { Link } from "react-router-dom";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabportfolio: [
                {
                    id: 1,
                    class:'active v1',
                    title: 'All',
                    datafilter: '*'
                },
                {
                    id: 2,
                    class: '',
                    title: 'Travel & Aviation',
                    datafilter: '.travel'
                },
                {
                    id: 3,
                    class: '',
                    title: 'Business Services',
                    datafilter: '.business'
                },
                {
                    id: 4,
                    class: '',
                    title: 'Consumer Products',
                    datafilter: '.consumer'
                },
                {
                    id: 5,
                    class: '',
                    title: 'Financial Services',
                    datafilter: '.financial'
                },
                {
                    id: 6,
                    class: '',
                    title: 'Energy and Environment',
                    datafilter: '.energy'
                },
            ],
            portfolioitem: [
                {
                    id: 1,
                    class: 'item v1 travel business consumer',
                    srcimg: 'images/portfolio/home1/1.jpg',
                    title: 'Travel & Aviation',
                    description: 'Leading consumer products companies'
                },
                {
                    id: 2,
                    class: 'item v1 business travel financial',
                    srcimg: 'images/portfolio/home1/2.jpg',
                    title: 'Business Services',
                    description: 'Bain helps transportation and logistics companies'
                },
                {
                    id: 3,
                    class: 'item v1 consumer transport energy',
                    srcimg: 'images/portfolio/home1/3.jpg',
                    title: 'Financial Services',
                    description: 'Developing a strategy and roadmap for clients'
                },
                {
                    id: 4,
                    class: 'item v1 financial travel energy',
                    srcimg: 'images/portfolio/home1/4.jpg',
                    title: 'Transport & Logistics',
                    description: 'Bain helps transportation and logistics companies'
                }
            ]
        }
    }
    render () {
        return (
            <section className="flat-row portfolio-row-page">
            {/* <!-- Portfolio Fullwidth --> */}
            <div className="container">
                <div className="portfolio-index1">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-section style1">
                                <h3 className="title">Our Practice Areas</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="flat-portfolio v1">                         
                                <ul className="portfolio-filter">
                                    {
                                        this.state.tabportfolio.map(data =>(
                                            <li key={data.id} className={data.class}><Link data-filter={data.datafilter} to="#">{data.title}</Link></li>
                                        ))
                                    }
                                    
                                </ul>
                                {/* <!-- /.project-filter -->  */}

                                <div className="portfolio-wrap clearfix">
                                    {
                                        this.state.portfolioitem.map(data=>(
                                            <div key={data.id} className={data.class}>
                                                <div className="item-content">
                                                    <div className="thumb">
                                                        <Link to="/case-single-v1" onClick={() => {window.location.href="/case-single-v1"}}><img src={data.srcimg} alt="f&o" /></Link>                                                        
                                                    </div>
                                                    <div className="link-v1">
                                                        <h5 className="title">{data.title}</h5>
                                                        <Link to="/case-single-v1" onClick={() => {window.location.href="/case-single-v1"}}><p>{data.description}</p></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }                                    
                                    </div>
                                {/* <!-- /.portfolio-wrap -->  */}
                            </div>
                            {/* <!-- /.flat-portfolio -->  */}
                        </div>
                        {/* <!-- /.col-md-12 --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.portfolio-index1 --> */}
            </div>
            {/* <!-- /.container --> */}
        </section>
        );
    }
}

export default Portfolio;
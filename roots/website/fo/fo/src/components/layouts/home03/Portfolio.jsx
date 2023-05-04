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
                    class: 'item v3 travel business consumer',
                    srcimg: 'images/portfolio/home3/1.jpg',
                    title: 'Travel & Aviation',
                    description: 'Leading consumer products companies'
                },
                {
                    id: 2,
                    class: 'item v3 business travel financial',
                    srcimg: 'images/portfolio/home3/2.jpg',
                    title: 'Travel & Aviation',
                    description: 'Leading consumer products companies'
                },
                {
                    id: 3,
                    class: 'item v3 consumer transport energy',
                    srcimg: 'images/portfolio/home3/3.jpg',
                    title: 'Travel & Aviation',
                    description: 'Leading consumer products companies'
                },
                {
                    id: 4,
                    class: 'item v3 financial travel transport',
                    srcimg: 'images/portfolio/home3/4.jpg',
                    title: 'Travel & Aviation',
                    description: 'Leading consumer products companies'
                },
                {
                    id: 5,
                    class: 'item v3 energy consumer business',
                    srcimg: 'images/portfolio/home3/5.jpg',
                    title: 'Travel & Aviation',
                    description: 'Leading consumer products companies'
                },
            ]
        }
    }
    render () {
        return (
            <section className="flat-row portfolio-row-page no-padding">
            {/* <!-- Portfolio Fullwidth --> */}
            <div className="full-color">
                <div className="container-fluid style-v1">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="flat-portfolio v3">  
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <ul className="portfolio-filter">
                                            {
                                                this.state.tabportfolio.map(data =>(
                                                    <li key={data.id} className={data.class}><Link data-filter={data.datafilter} to="#">{data.title}</Link></li>
                                                ))
                                            }
                                            </ul>
                                            {/* <!-- /.project-filter -->  */}
                                        </div>
                                    </div>
                                </div>                       
                                
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="portfolio-wrap">
                                            {
                                                this.state.portfolioitem.map(data=>(
                                                    <div key={data.id} className={data.class}>
                                                        <div className="item-content">
                                                        <Link to="/case-single-v1" onClick={() => {window.location.href="/case-single-v1"}}><img src={data.srcimg} alt="f&o" /></Link>
                                                            <div className="link-v3">
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
                                </div>
                            </div>
                            {/* <!-- /.flat-portfolio -->  */}
                        </div>
                        {/* <!-- /.col-md-12 --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container --> */}
            </div>
            {/* <!-- /.full-color  --> */}
        </section>
        /* <!-- /.flat-row  --> */
        );
    }
}

export default Portfolio;
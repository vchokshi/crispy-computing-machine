import React, { Component } from 'react';
import { Footer,Header,  Loader,  TopBar, BottomBar } from '../layouts/general';
import { Link } from "react-router-dom";
import { MainHistory, SlideBar } from '../layouts/pages';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
           headers: [
               {
                   id: 1,
                   names: 'Home'
               }
           ],
           pagetitle: [
               {
                   id: 1,
                   class: 'home',
                   title: 'Home'
               },
               {
                id: 2,
                class: 'home',
                title: 'Pages'
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
                                            <li>History</li>
                                        </ul>                   
                                    </div>        
                                </div>
                            </div>
                        </div>                    
                    </div>
                    <section className="main-content bg-sidebar sidebar-left">
                        <div className="container">
                            <div className="flat-history">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-section style1">
                                            <h3 className="title">Company Overview</h3>
                                        </div>
                                    </div>
                                    
                                    <div className="wrap-main-post">
                                        <div className="col-md-3">
                                            <SlideBar />
                                        </div>
                                        {/* <!-- /col-md-3 --> */}

                                        <div className="col-md-9">
                                            <MainHistory />
                                        </div>
                                        {/* <!-- /.col-md-9 -->  */}
                                    </div>
                                    {/* <!-- /.wrap-main-post --> */}
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

export default History;
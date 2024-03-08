import React, { Component } from 'react';
import { Footer,Header,  Loader,  TopBar, BottomBar } from '../layouts/general';
import { Link } from "react-router-dom";
import { CaseV1 } from '../layouts/cases';

class Case extends Component {
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
                                            <li>Case V1</li>
                                        </ul>                   
                                    </div>        
                                </div>
                            </div>
                        </div>                    
                    </div>
                    <CaseV1 />
                    <Footer />
                    <BottomBar />
                </div>
            </div>
        );
    }
}

export default Case;
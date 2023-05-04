import React, { Component } from "react";
import { Link } from "react-router-dom";

class FunFact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            factitem: [
                {
                    id: 1,
                    class: 'iteam-fact v1',
                    numb: '10',
                    title1: 'Global',
                    title2: 'Locations',
                    view: 'Find Our Location'
                },
                {
                    id: 2,
                    class: 'iteam-fact v2',
                    numb: '+1k',
                    title1: 'Successful',
                    title2: 'Project',
                    view: 'Find Our Location'
                },
                {
                    id: 3,
                    class: 'iteam-fact v3',
                    numb: '07',
                    title1: 'Years of',
                    title2: 'Experience',
                    view: 'Learn More'
                }
            ]
        }
    }
    render () {
        return (
            <section className="flat-row no-padding">
                <div className="flat-fun-fact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {
                                    this.state.factitem.map(data=> (
                                        <div key={data.id} className={data.class}>
                                            <div className="num-fact">
                                                <p>{data.numb}</p>
                                            </div>
                                            <div className="text-fact">
                                                <h4 className="title">{data.title1}<br />{data.title2} </h4>
                                                <Link to="#" className="comment-reply">{data.view} <i className="fa fa-chevron-right"></i></Link>
                                            </div>
                                        </div>              
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFact;
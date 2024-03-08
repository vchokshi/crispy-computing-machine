import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MainPartner extends Component {
    constructor(props) {
        super(props);
        this.state = {
           boxitem: [
               {
                   id: 1,
                   srcimg: 'images/partner/1.jpg',
                   title: 'company limited liability F&O Financial',
                   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
               },
               {
                id: 2,
                srcimg: 'images/partner/2.jpg',
                title: 'company limited liability F&O Financial',
                ddescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
            },
            {
                id: 3,
                srcimg: 'images/partner/3.jpg',
                title: 'company limited liability F&O Financial',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
            },
            {
                id: 4,
                srcimg: 'images/partner/4.jpg',
                title: 'company limited liability F&O Financial',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
            },
            {
                id: 5,
                srcimg: 'images/partner/5.jpg',
                title: 'company limited liability F&O Financial',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
            },
            {
                id: 6,
                srcimg: 'images/partner/6.jpg',
                title: 'company limited liability F&O Financial',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
            },
        ]
           
        }
    }
    render() {
        return (
            <div className="post-wrap v2">
                {
                    this.state.boxitem.map(data=>(
                        <div key={data.id} className="box">
                            <div className="thumb">
                                <img src={data.srcimg} alt="f&o" />
                            </div>
                            <div className="post">
                                <h4 className="title"><Link to="#">{data.title}</Link></h4>
                                <p className="text">{data.description}</p>
                                <Link to="#" className="comment-reply">Visit Links<i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
                                
    }
}

export default MainPartner;
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MainTeamV1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           boxitem: [
               {
                   id: 1,
                   srcimg: 'images/member/team/1.jpg',
                   title: 'Heather Burke',
                   subtitle: 'Founder & CEO',
                   description: 'Lorem dolor consectetur adipiscing elit sed do eiusmod tempor incididunt labore et dolore magna'
               },
               {
                    id: 2,
                    srcimg: 'images/member/team/2.jpg',
                    title: 'Madison Rogers',
                    subtitle: 'Chief Finance Officer',
                    description: 'Lorem dolor consectetur adipiscing elit sed do eiusmod tempor incididunt labore et dolore magna'
                },
                {
                    id: 3,
                    srcimg: 'images/member/team/3.jpg',
                    title: 'VP Sales and Marketing',
                    subtitle: 'Arthur Pearson',
                    description: 'Lorem dolor consectetur adipiscing elit sed do eiusmod tempor incididunt labore et dolore magna'
                },
                {
                    id: 4,
                    srcimg: 'images/member/team/4.jpg',
                    title: 'Founder & CEO',
                    subtitle: 'Heather Burke',
                    description: 'Lorem dolor consectetur adipiscing elit sed do eiusmod tempor incididunt labore et dolore magna'
                },
                {
                    id: 5,
                    srcimg: 'images/member/team/5.jpg',
                    title: 'Madison Rogers',
                    subtitle: 'Chief Finance Officer',
                    description: 'Lorem dolor consectetur adipiscing elit sed do eiusmod tempor incididunt labore et dolore magna'
                },
                {
                    id: 6,
                    srcimg: 'images/member/team/6.jpg',
                    title: 'Arthur Pearson',
                    subtitle: 'VP Sales and Marketing',
                    description: 'Lorem dolor consectetur adipiscing elit sed do eiusmod tempor incididunt labore et dolore magna'
                },
                {
                    id: 7,
                    srcimg: 'images/member/team/7.jpg',
                    title: 'Heather Burke',
                    subtitle: 'Founder & CEO',
                    description: 'Lorem dolor consectetur adipiscing elit sed do eiusmod tempor incididunt labore et dolore magna'
                },
                {
                    id: 8,
                    srcimg: 'images/member/team/8.jpg',
                    title: 'Madison Rogers',
                    subtitle: 'Chief Finance Officer',
                    description: 'Lorem dolor consectetur adipiscing elit sed do eiusmod tempor incididunt labore et dolore magna'
                },
            
            ]
           
        }
    }
    render() {
        return (
            <div className="post-wrap">
                {
                    this.state.boxitem.map(data=>(
                        <div key={data.id} className="box">
                            <div className="thumb">
                                <Link to="#" >
                                    <img src={data.srcimg} alt="f&o" />
                                    <div className="overlay"></div>
                                </Link>
                            </div>
                            <div className="post">
                                <p className="author">{data.subtitle}</p>
                                <h4 className="title"><Link to="#">{data.title}</Link></h4>
                                <p className="text">{data.description}</p>
                                <Link to="#" className="comment-reply">View Profile<i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    ))
                }
                

            </div>
        )
                                
    }
}

export default MainTeamV1;
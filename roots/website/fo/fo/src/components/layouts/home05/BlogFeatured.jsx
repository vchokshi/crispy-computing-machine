import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class BlogFeatured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datanewBox: [
                {
                    id: 1,
                    srcimg: 'images/imagebox/001.jpg',
                    title: 'Business Ideas And Innovation',
                    description:'Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium.',
                },
                {
                    id: 2,
                    srcimg: 'images/imagebox/002.jpg',
                    title: 'Business Ideas And Innovation',
                    description:'Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque.',
                },
                {
                    id: 3,
                    srcimg: 'images/imagebox/003.jpg',
                    title: 'Directory Of Finance Businesses',
                    description:'Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque.',
                },
            ]
        }
    }
    
    render() {
        return (
            <div>
             {
                this.state.datanewBox.map(data => (
                    <div className="col-md-4" key={data.id} >
                        <div className="imagebox-item">
                            <div className="imagebox style2">
                                <div className="imagebox-image">
                                    <img src={data.srcimg} alt="" />
                                </div>
                                <div className="imagebox-title">
                                    <h3><Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">{data.title}</Link></h3>
                                </div>
                                <div className="imagebox-content">
                                    <div className="imagebox-desc">
                                        {data.description}
                                    </div>
                                    <div className="imagebox-button">
                                        <Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            
                               
        );
    }
}

export default BlogFeatured;
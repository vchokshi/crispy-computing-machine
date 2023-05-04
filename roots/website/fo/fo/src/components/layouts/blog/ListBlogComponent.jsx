import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import dataBlog from './dataBlog';

class ListBlogComponent extends Component {
    render() {
        return (
            
            <div className="post-wrap clearfix">
                {
                    dataBlog.map(data=>(
                        <article key={data.id} className="entry clearfix">
                            <div className="feature-post">
                                <Link to="#"><img src={data.srcimg} alt="f&o" /></Link>
                            </div>
                            <div className="content-post">
                                <div className="entry-meta">
                                    <ul className="meta-post clearfix">
                                        <li className="day">
                                            <Link to="#">{data.time}</Link>
                                        </li>
                                        <li className="author">
                                            <Link to="#">{data.author}</Link>
                                        </li>
                                        <li className="travel">
                                            <Link to="#">{data.category}</Link>
                                        </li>
                                    </ul>

                                    <div className="entry-meta-right">
                                        <span className="like"><Link to="#">{data.like}</Link></span>
                                        <span className="comment"><Link to="#">{data.comments}</Link></span>
                                    </div>
                                </div>
                                <h4 className="title-post">
                                    <Link to="/blog-single" onClick={() => {window.location.href="/blog-single"}}>{data.title}</Link>
                                </h4>
                                <div className="entry-post">
                                    <p>{data.description}</p>
                                </div>
                                <div className="submit-wrap">
                                    <button className="flat-button button-style"><Link className="btn1" to="/blog-single" onClick={() => {window.location.href="/blog-single"}}>Read More</Link> <i className="fa fa-chevron-right"></i></button>
                                </div>
                            </div>
                        </article>
                    ))
                }                            
            </div>
        );
    }
}

export default ListBlogComponent;
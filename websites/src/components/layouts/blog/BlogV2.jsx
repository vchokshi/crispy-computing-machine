import React, { Component } from 'react';
import { ListBlogComponentV2, SidebarBlog } from '.';
import { Link } from "react-router-dom";

class BlogV2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <section className="main-content blog bg-sidebar sidebar-left">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-section style1">
                                <h3 className="title">Blog Left Sidebar</h3>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <SidebarBlog />
                        </div>

                        <div className="col-md-9">
                            <ListBlogComponentV2 />
                            <div className="blog-pagination">
                                <ul className="flat-pagination">
                                    <li className="active"><Link to="#">1</Link></li>
                                    <li><Link to="#">2</Link></li>
                                    <li><Link to="#">3</Link></li>                                
                                    <li className="next">
                                        <Link to="#">Next <i className="fa fa-angle-double-right"></i></Link>
                                    </li>                               
                                </ul>
                                {/* <!-- /.flat-pagination --> */}
                            </div>
                        </div>
                    </div>
                </div>  
            </section>
        );
    }
}

export default BlogV2;
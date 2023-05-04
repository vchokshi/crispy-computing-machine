import React, { Component } from 'react';
import { SidebarBlog, SingleBlogComponent } from '.';

class BlogSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <section className="main-content blog bg-sidebar sidebar-left blog-single v1">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="title-section style1">
                                <h3 className="title">Blog Left Sidebar</h3>
                            </div>
                        </div>
                        
                        <div className="wrap-main-post">
                            <div className="col-md-3">
                                <SidebarBlog />
                            </div>

                            <div className="col-md-9">
                                <SingleBlogComponent />
                            </div>
                        </div>
                    </div>              
                </div>
            </section>
        );
    }
}

export default BlogSingle;
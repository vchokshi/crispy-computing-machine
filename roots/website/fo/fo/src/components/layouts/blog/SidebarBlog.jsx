import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class SidebarBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [
                {
                    id: 1,
                    title: 'Graphics'
                },
                {
                    id: 2,
                    title: 'WordPress'
                },
                {
                    id: 3,
                    title: 'Business'
                },
                {
                    id: 4,
                    title: 'Finance'
                },
                {
                    id: 5,
                    title: 'Insurance'
                },
                {
                    id: 6,
                    title: 'Leasing'
                },
            ],
            recentpost: [
                {
                    id: 1,
                    title: 'Heading into Monday'
                },
                {
                    id: 2,
                    title: 'There you go'
                },
                {
                    id: 3,
                    title: 'Everything is included'
                },
                {
                    id: 4,
                    title: "Let's go"
                },
                {
                    id: 5,
                    title: 'Best response'
                },
            ],
            archives: [
                {
                    id: 1,
                    title: 'October 2020'
                },
                {
                    id: 2,
                    title: 'July 2020'
                },
                {
                    id: 3,
                    title: 'June 2020'
                },
                {
                    id: 4,
                    title: "March 2020"
                },
            ]
        }
    }
    render() {
        return (
            <div className="sidebar">
                <div className="widget widget-search">
                    <form action="#" id="searchform" method="get">
                        <div>
                            <input type="text" id="s" className="sss" placeholder="Search..." />
                            <input type="submit" value="" id="searchsubmit" />
                        </div>
                    </form>
                </div>

                <div className="widget widget-categories">
                    <div className="title-link">
                        <h5 className="widget-title">Categories</h5>
                    </div>
                    <ul className="categories">
                        {
                            this.state.category.map(data=>(
                                <li key={data.id}>
                                    <Link to="#">{data.title}</Link>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>

                <div className="widget widget-recent-posts">
                    <div className="title-link v1">
                        <h5 className="widget-title">Recent Posts</h5>
                    </div>
                    <ul className="categories">
                        {
                            this.state.recentpost.map(data=>(
                                <li key={data.id}>
                                    <Link to="#">{data.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="widget widget-archives">
                    <div className="title-link v2">
                        <h5 className="widget-title">Archives</h5>
                    </div>
                    <ul className="categories">
                        {
                            this.state.archives.map(data=>(
                                <li key={data.id}>
                                    <Link to="#">{data.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
    
        );
    }
}

export default SidebarBlog;
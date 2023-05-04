import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import menus from '../menu';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linklogo: '/'
        }
    }
    
    render() {
        const { location } = this.props;
        return (
			<div className="wrap-slider">         
            <header id="header" className="header style-color clearfix">
                <div className="container">
                    <div className="header-wrap clearfix">
                        <div id="logo" className="logo">
                            <Link to="/" onClick={() => {window.location.href="/"}} rel="home">
                                <img src="images/logo.png" alt="" />
                            </Link>
                        </div>

                        <div className="nav-wrap">
                            <div className="btn-menu">
                                <span></span>
                            </div>

                            <nav id="mainnav" className="mainnav">
							<ul className="menu">
										{
											menus.map(data =>(
												<li className={data.name === this.props.data.names ? "active" : ""} key={data.id}>
													<Link to={data.linkmenu} onClick={() => {window.location.href=data.linkmenu}}>{data.name}</Link>
													{
														data.namesub === undefined ? "" : 
														<ul className="submenu">
															{
																data.namesub.map(submenus =>(
																	<li className={location.pathname === submenus.links || submenus.sub === this.props.data.names02 ? "active" : ""} key={submenus.id}><Link to={submenus.links} onClick={() => {window.location.href=submenus.links}}>{submenus.sub}</Link>
																		{
																			submenus.submenu === undefined ? "" :
																			<ul className="submenu">
																				{
																					submenus.submenu.map(menusub => (
																						<li className={location.pathname === menusub.linksub ? "active" : ""} key={menusub.id}><Link to= {menusub.linksub} onClick={() => {window.location.href=menusub.linksub}}>{menusub.titlesub}</Link></li>
																					))
																				}
																			</ul>
																		}
																	</li>
																))
															}
														</ul>
													}
												</li>
											))
										}			
									</ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div> 
        );   
    }
}

export default withRouter(Header);
import React, { Component } from 'react'
import Link from 'next/link'

export default class ProfessionalServices extends Component {
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }
    render() {
        return (
            <div className="best-services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Knowledge of the market</span>
                        <h2>Only the best professional services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                    <div className="tab best-services-tab">
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <i className="flaticon-agriculture"></i>
                                <span>Agricultural loan</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <i className="flaticon-personal"></i>
                                <span>Personal loan</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                <i className="flaticon-loan-1"></i>
                                <span>Business loan</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab4')}
                            >
                                <i className="flaticon-scholarship"></i>
                                <span>Education loan</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab5')}
                            >
                                <i className="flaticon-loan-2"></i>
                                <span>House loan</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab6')}
                            >
                                <i className="flaticon-loan-3"></i>
                                <span>Payday loan</span>
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Agricultural loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>

                                                <h3>Eligibility and criteria for Agricultural loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Agricultural loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Personal loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>

                                                <h3>Eligibility and criteria for Personal loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Personal loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab3" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Business loans</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>

                                                <h3>Eligibility and criteria for Business loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Business loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab4" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Education loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>

                                                <h3>Eligibility and criteria for Education loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Education loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab5" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>House loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>

                                                <h3>Eligibility and criteria for House loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>House loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab6" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Payday loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>

                                                <h3>Eligibility and criteria for Payday loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Payday loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

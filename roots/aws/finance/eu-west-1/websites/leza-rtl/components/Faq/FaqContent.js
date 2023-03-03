import React, { Component } from 'react'
import FaqForm from './FaqForm';

export default class FaqContent extends Component {
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
            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently ask question</h2>
                        <b>Just find your answers below</b>
                    </div>

                    <div className="tab faq-list-tab">
                        <ul className="tabs-list">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                Top questions
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                General questions
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                About qinix
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <ul className="question-list">
                                    <li>
                                        <h4 className="title">What is State Aid?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">Why do you charge interest on the loan?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">Can I apply for a loan if I have poor credit?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">How long does the application process take?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">My business internationally. Am I still eligible to apply?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">What kind of financial advice do you give?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
                                </ul>
                            </div>

                            <div id="tab2" className="tabs_item">
                            <ul className="question-list">
                                    <li>
                                        <h4 className="title">What is State Aid?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">Why do you charge interest on the loan?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">Can I apply for a loan if I have poor credit?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">How long does the application process take?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">My business internationally. Am I still eligible to apply?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">What kind of financial advice do you give?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
                                </ul>
                            </div>

                            <div id="tab3" className="tabs_item">
                            <ul className="question-list">
                                    <li>
                                        <h4 className="title">What is State Aid?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">Why do you charge interest on the loan?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">Can I apply for a loan if I have poor credit?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">How long does the application process take?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">My business internationally. Am I still eligible to apply?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">What kind of financial advice do you give?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Faq Form */}
                    <FaqForm />
                </div>
            </div>
        )
    }
}

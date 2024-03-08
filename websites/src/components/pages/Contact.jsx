import React, { Component } from 'react';
import { Footer,Header,  Loader,  TopBar, BottomBar } from '../layouts/general';
import { Link } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
           headers: [
               {
                   id: 1,
                   names: 'Home'
               }
           ],
           pagetitle: [
               {
                   id: 1,
                   class: 'home',
                   title: 'Home'
               },
            ],

            contact: [
                {
                    id: 1,
                    title: 'Our Location',
                    text1: '350 Fifth Avenue, 34th floor New York',
                    text2: 'NY 10118-3299 USA'
                },
                {
                    id: 2,
                    title: 'Contact us Anytime',
                    text1: 'Mobile: (+1) 800 555 888',
                    text2: 'Fax: (+1) 800 666 999'
                },
                {
                    id: 3,
                    title: 'Write Some Words',
                    text1: 'Support24/7@domain.com',
                    text2: 'Info@domain.com'
                },
            ]
           
        }
    }
    render() {
        return (
            <div className="header-sticky">
                <div className="boxed">
                    <Loader />
                    <TopBar />
                    {
                        this.state.headers.map(data => (
                            <Header data={data} key={data.id}/>
                        ))
                        
                    }
                    <div className="page-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12"> 
                                    <div className="breadcrumbs">
                                        <ul>
                                            {
                                                this.state.pagetitle.map(data=>(
                                                    <li key={data.id} className={data.class}><Link to="/" onClick={() => {window.location.href="/"}}>{data.title}</Link></li>
                                                ))
                                            }
                                            <li>Contact</li>
                                        </ul>                   
                                    </div>        
                                </div>
                            </div>
                        </div>                    
                    </div>
                    <section className="flat-row contact-page pad-top-134">
                        <div className="container">
                            <div className="row">
                                {
                                    this.state.contact.map(data=>(
                                        <div key={data.id} className="col-md-4">
                                            <div className="contact-content">
                                                <div className="contact-address">                                
                                                    <div className="details">
                                                        <h5>{data.title}</h5>
                                                        <p>{data.text1}</p>
                                                        <p>{data.text2}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="row">
                                <div className="flat-spacer d74px"></div>
                            </div>

                            <div id="respond" className="comment-respond contact style2">
                            <div className="title-section style1">
                                <h3 className="title">Leave a Message</h3>
                                </div>
                                <form id="contactform" className="flat-contact-form style2 bg-dark height-small" method="post" action="./contact/contact-process.php">
                                    <div className="field clearfix">      
                                        <div className="wrap-type-input">                    
                                            <div className="input-wrap name">
                                                <input type="text"   tabIndex="1" placeholder="Name" name="name" id="name" required />
                                            </div>
                                            <div className="input-wrap email">
                                                <input type="email"  tabIndex="2" placeholder="Email" name="email" id="email" required />
                                            </div>
                                            <div className="input-wrap last Subject">
                                                <input type="text"  placeholder="Subject (Optinal)" name="subject" id="subject"  />
                                            </div>  
                                        </div>
                                        <div className="textarea-wrap">
                                            <textarea className="type-input" tabIndex="3" placeholder="Message" name="message" id="message-contact" required></textarea>
                                        </div>
                                    </div>
                                    <div className="submit-wrap">
                                        <button className="flat-button bg-orange">Send Your Message</button>
                                    </div>
                                </form>                    
                            </div>
                        </div>
                    </section>
                    {/* <!-- Map --> */}
                    <section className="row-map">
                        <div className="container-fluid">
                            <div className="row">
                                <div id="flat-map" ></div> 
                            </div>
                        </div>
                        {/* <!-- /.container --> */}
                    </section>
                    <Footer />
                    <BottomBar />
                </div>
            </div>
        );
    }
}

export default Contact;
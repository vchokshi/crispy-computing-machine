import React, { Component } from 'react';

class FormFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
           titleform: [
               {
                   id: 1,
                   title: 'Subscribe Us',
                   description: 'Sign Up for our mailing list to get latest updates and news.'
               }
           ],
           
        }
    }
    render() {
        return (
            <div className="col-md-3">
                {
                    this.state.titleform.map(data =>(
                        <div key={data.id} className="widget widget-subscribe-us">
                            <div className="title-link v4">
                                <h5 className="widget-title">{data.title}</h5>
                            </div>
                            <p>{data.description}</p>
                            <div className="widget subscribe-search">
                                <form id="subscribe-form" method="post" action="#" data-mailchimp="true">
                                    <div id="subscribe-content">
                                        <input type="text"  tabIndex="2" id="subscribe-email" name="subscribe-email" className="mailchimp-email" placeholder="Enter your email." />
                                        <button type="button" id="subscribe-button" className="submit-button"><i className="fa fa-envelope-open-o"></i></button>
                                    </div>
                                    <div id="subscribe-msg"></div>
                                </form>
                            </div>
                        </div>                        
                    ))
                }
                
            </div>
        );
    }
}

export default FormFooter;
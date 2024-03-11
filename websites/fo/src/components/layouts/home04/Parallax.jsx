import React, { Component } from 'react';


class Parallax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [
                {
                    id: 1,
                    title: 'Request Call Back.',
                    description:'Would you like to speak to one of our financial advisers over the phone? Just submit your details and well be in touch shortly. You can also email us if you would prefer.',
                },
            ]
        }
    }
    render() {
        return (
            <div className="page-title parallax parallax1">
                <div className="overlay"></div>
                    <div className="container">
                        <div className="flat-form-request">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-request">
                                        <div className="post style-v1">
                                            {
                                                this.state.title.map(data=>(
                                                    <div key={data.id} className="text-form">
                                                        <h2 className="title">{data.title}</h2>
                                                        <p>{data.description}</p>
                                                    </div>
                                                ))
                                            }
                                            
                                        </div>

                                        <div className="post">
                                            <div className="form-v1">
                                                <form action="/" method="" id="commentform-footer" className="comment-form" noValidate="">
                                                    <select name="style cars">
                                                        <option value="1" defaultValue="Default">How can we help?</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                    <fieldset className="style phone-container">
                                                        <input type="text" id="phone-footer" placeholder="Your phone or email" className="tb-my-input" name="phone" tabIndex="2" size="32" aria-required="true" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="post">
                                            <div className="form-v2">
                                                <form action="/" method="post" id="commentform-footer" className="comment-form" noValidate="">
                                                    <fieldset className="style name-container">
                                                        <input type="text" id="author-footer" placeholder="You name*" className="tb-my-input" name="author" tabIndex="1"  size="32" aria-required="true" />
                                                    </fieldset>
                                                    <div className="submit-wrap">
                                                        <button className="flat-button button-style">submit <i className="fa fa-chevron-right"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- row --> */}
                        </div>
                        {/* <!-- flat-talk --> */}
                </div>
                {/* <!-- container --> */}
            </div>
        /* <!-- page-title --> */

        );
    }
}

export default Parallax;
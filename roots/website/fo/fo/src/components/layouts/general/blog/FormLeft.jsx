import React, { Component } from 'react'
class FormLeft extends Component {
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
            <div className="col-md-5">
                <div className="box">
                    {
                        this.state.title.map(data =>(
                            <div key={data.id} className="title-v1">
                            <h4 className="title">{data.title}</h4>
                            <p>{data.description}</p>
                        </div>
                        ))
                    }
                    <div className="form-box">
                        <form method="post" action="./contact/contact-process.php" id="contactform" className="comment-form" noValidate="">
                            <select  name="style cars">
                                <option value="1" defaultValue="Default">How can we help?</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                            </select>

                            <fieldset className="style name-container">
                                <input type="text" name="name" id="name" placeholder="You name*" className="tb-my-input" tabIndex="1"  size="32" aria-required="true" />
                            </fieldset>

                            <fieldset className="style phone-container">
                                <input type="text" id="phone" placeholder="You phone number*" className="tb-my-input" name="phone" tabIndex="2"  size="32" aria-required="true" />
                            </fieldset>

                            <fieldset className="style email-container">
                                <input type="text" id="email" placeholder="You Email" className="tb-my-input" name="email" tabIndex="2"  size="32" aria-required="true" />
                            </fieldset>

                            <div className="submit-wrap">
                                <button className="flat-button button-style">submit <i className="fa fa-chevron-right"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormLeft;
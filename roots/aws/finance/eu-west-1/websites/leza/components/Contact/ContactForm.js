import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {

    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="contact-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Let's discuss</span>
                    <h2>Whatever question you have, please feel free to ask.</h2>
                </div>

                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="contact-form">
                            <div className="title">
                                <h3>Write Us</h3>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Name" 
                                                className="form-control" 
                                                value={contact.name}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input 
                                                type="text" 
                                                name="email" 
                                                placeholder="Email" 
                                                className="form-control" 
                                                value={contact.email}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input 
                                                type="text" 
                                                name="number" 
                                                placeholder="Phone number" 
                                                className="form-control" 
                                                value={contact.number}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                placeholder="Subject" 
                                                className="form-control" 
                                                value={contact.subject}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea 
                                                name="text" 
                                                cols="30" 
                                                rows="6" 
                                                placeholder="Write your message..." 
                                                className="form-control" 
                                                value={contact.text}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" className="btn default-btn">
                                            Send message <span></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-side-box">
                            <div className="title">
                                <h3>Contact Info</h3>
                            </div>
        
                            <div className="info-box">
                                <div className="icon">
                                    <i className="flaticon-clock"></i>
                                </div>
                                <h4>Working hours</h4>
                                <ul className="list">
                                    <li>
                                        Mon – Thurs
                                        <span>8:00 AM - 5:00 PM</span>
                                    </li>
                                    <li>
                                        Fri – Satur
                                        <span>8:00 AM - 3:00 PM</span>
                                    </li>
                                    <li>
                                        Sun
                                        <span>CLOSED</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="info-box">
                                <div className="icon">
                                    <i className="flaticon-pin"></i>
                                </div>
                                <h4>Address</h4>
                                <span>6890 Blvd, The Bronx, NY 1058 New York, USA</span>
                            </div>

                            <div className="info-box">
                                <div className="icon">
                                    <i className="flaticon-phone-call"></i>
                                </div>
                                <h4>Phone</h4>
                                <span>
                                    <a href="tel:1514312-6688">+1 (514) 312-5678</a>
                                </span>
                                <span>
                                    <a href="tel:1514312-6688">+1 (514) 312-6688</a>
                                </span>
                            </div>

                            <div className="info-box">
                                <div className="icon">
                                    <i className="flaticon-email"></i>
                                </div>
                                <h4>Email</h4>
                                <span>
                                    <a href="mailto:hello@leza.com">hello@leza.com</a>
                                </span>
                                <span>
                                    <a href="#">Skype: example</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
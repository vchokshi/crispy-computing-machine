import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a><img src="/images/logo-white.png" alt="image" /></a>
                                    </Link>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <ul className="social">
                                    <li><b>Follow us:</b></li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank">
                                            <i className="flaticon-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="flaticon-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="flaticon-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="flaticon-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/about-us">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Our Performance</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>Help (FAQ)</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/news">
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>    
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Other Resources</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/contact">
                                            <a>Support</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-condition">
                                            <a>Terms of Service</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Business Loans</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Loan Services</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>    
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contact Us</h3>

                                <div className="info-contact">
                                    <i className="flaticon-pin"></i>
                                    <span>6890 Blvd, The Bronx, NY 1058 New York, USA</span>
                                </div>

                                <div className="info-contact">
                                    <i className="flaticon-mail"></i>
                                    <span>
                                        <a href="mailto:hello@leza.com">hello@leza.com</a>
                                    </span>
                                    <span>
                                        <a href="#">Skype: example</a>
                                    </span>
                                </div>

                                <div className="info-contact">
                                    <i className="flaticon-telephone"></i>
                                    <span>
                                        <a href="tel:1514312-6688">+1 (514) 312-5678</a>
                                    </span>
                                    <span>
                                        <a href="tel:1514312-6688">+1 (514) 312-6688</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
         
            <div className="copy-right-area">
                <div className="container">
                    <div className="copy-right-content">
                        <p>
                            Copyright &copy; {currentYear} Leza. Designed By <a href="https://envytheme.com/" target="_blank">EnvyTheme</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
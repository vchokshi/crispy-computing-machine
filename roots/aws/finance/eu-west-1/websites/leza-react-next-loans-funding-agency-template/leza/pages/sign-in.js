import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const SignIn = () => {
    return (
        <>
            <Navbar />
            
            <PageBanner 
                pageTitle="Sign In" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign In" 
                imgClass="item-bg-7" 
            /> 

            <div className="sign-in-area ptb-100">
                <div className="container">
                    <div className="sign-in-form">
                        <div className="sign-in-title">
                            <h3>Welcome Back!</h3>
                            <p>Please Sign In to your account.</p>
                        </div>
                            
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                        
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="checkme" />
                                        <label className="form-check-label" htmlFor="checkme">Keep me Log In</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <p className="forgot-password">
                                        <Link href="#">
                                            <a>Forgot Password?</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="send-btn">
                                    <button type="submit" className="default-btn">
                                        Sign In Now <span></span>
                                    </button>
                                </div>
                                <br />
                                <span>Don't have account? <Link href="/sign-up"><a>Sign Up!</a></Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SignIn;
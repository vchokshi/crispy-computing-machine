import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const SignUp = () => {
    return (
        <>
            <Navbar />
            
            <PageBanner 
                pageTitle="Sign Up" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign Up" 
                imgClass="item-bg-8" 
            /> 

            <div className="signup-area ptb-100">
                <div className="container">
                    <div className="signup-form">
                        <h3>Create your Account</h3>
                        <form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="checkme" />
                                        <label className="form-check-label" htmlFor="checkme">Keep Me Sign Up</label>
                                    </div>
                                </div>

                                <div className="col-6 text-right">
                                    <div className="send-btn">
                                        <button type="submit" className="default-btn">
                                            Sign Up Now <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <p>Already a registered user? <Link href="/sign-in"><a>Sign In!</a></Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
  
            <Footer />
        </>
    )
}

export default SignUp;
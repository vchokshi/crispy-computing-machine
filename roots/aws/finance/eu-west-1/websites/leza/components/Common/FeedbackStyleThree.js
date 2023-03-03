import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    mouseDrag: false,
    touchDrag: false,
};

const FeedbackStyleThree = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    
    return (
        <div className="clients-area bg-color ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Clients words</span>
                    <h2>What our clients say</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

                {display ? <OwlCarousel 
                    className="clients-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="clients-item">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="clients-image">
                                    <img src="/images/clients/man2.png" alt="image" />

                                    <div className="icon-1">
                                        <i className="flaticon-right-quote"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-9">
                                <div className="clients-info-text">
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.”</p>
                                    <h3>Debra C. Cowen</h3>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clients-item">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="clients-image">
                                    <img src="/images/clients/man2.png" alt="image" />

                                    <div className="icon-1">
                                        <i className="flaticon-right-quote"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-9">
                                <div className="clients-info-text">
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.”</p>
                                    <h3>Debra C. Cowen</h3>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clients-item">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="clients-image">
                                    <img src="/images/clients/man2.png" alt="image" />

                                    <div className="icon-1">
                                        <i className="flaticon-right-quote"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-9">
                                <div className="clients-info-text">
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.”</p>
                                    <h3>Debra C. Cowen</h3>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default FeedbackStyleThree;
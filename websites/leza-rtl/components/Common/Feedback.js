import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
	nav: true,
	mouseDrag: false,
    touchDrag: false,
	dots: false,
	autoplay: true,
	smartSpeed:1500,
	autoplayHoverPause: true,
	navText: [
		"<i class='bx bx-chevron-left'></i>",
		"<i class='bx bx-chevron-right'></i>",
	],
	responsive:{
		0:{
			items:1,
		},
		576:{
			items:1,
		},
		768:{
			items:1,
		},
		992:{
			items:2,
		}
	}
};

const Feedback = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="clients-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Clients words</span>
                    <h2>What our clients say</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
             
                {display ? <OwlCarousel 
                    className="feedback-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="clients-item">
                        <div className="info">
                            <img src="/images/clients/client1.png" alt="image" />
                            <h4>Markus Twain</h4>
                            <span>React Developer</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                    </div>
                    
                    <div className="clients-item">
                        <div className="info">
                            <img src="/images/clients/client2.png" alt="image" />
                            <h4>Jessica Molony</h4>
                            <span>Angular Developer</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                    </div>

                    <div className="clients-item">
                        <div className="info">
                            <img src="/images/clients/client3.png" alt="image" />
                            <h4>Harry Nelis</h4>
                            <span>Technology Officer</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                    </div>

                    <div className="clients-item">
                        <div className="info">
                            <img src="/images/clients/client4.png" alt="image" />
                            <h4>Lucy Vernall</h4>
                            <span>Chief Financial Officer</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Feedback;
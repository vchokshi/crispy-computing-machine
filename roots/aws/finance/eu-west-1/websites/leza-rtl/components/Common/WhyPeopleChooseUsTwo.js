import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const WhyPeopleChooseUsTwo = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="choose-area pt-100 pb-70">
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="choose-title">
                            <span>Transparent process</span>
                            <h2>Why people choose us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="choose-image">
                            <img src="/images/choose.png" alt="image" />

                            <Link href="#play-video">
                                <a
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="flaticon-play-button"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="process-item bg-top1">
                                    <div className="icon">
                                        <i className="flaticon-guarantee"></i>
                                    </div>
                                    <h3>Guarantee</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                </div>
                            </div>
        
                            <div className="col-lg-6 col-md-6">
                                <div className="process-item bg-top2">
                                    <div className="icon">
                                        <i className="flaticon-speed"></i>
                                    </div>
                                    <h3>Speed</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                </div>
                            </div>
        
                            <div className="col-lg-6 col-md-6">
                                <div className="process-item bg-top3">
                                    <div className="icon">
                                        <i className="flaticon-reliability"></i>
                                    </div>
                                    <h3>Reliability</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                </div>
                            </div>
        
                            <div className="col-lg-6 col-md-6">
                                <div className="process-item bg-top4">
                                    <div className="icon">
                                        <i className="flaticon-user-experience"></i>
                                    </div>
                                    <h3>Experience</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyPeopleChooseUsTwo;
import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 3
        },
        400: {
            items: 4
        },
        768: {
            items: 5
        },
    }
};

const Partner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="partner-area ptb-100">
            <div className="container">
                {display ? <OwlCarousel
                    className="partner-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="partner-item">
                        <img src="/images/partner/partner1.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner2.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner3.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner4.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner5.png" alt="image" />
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Partner;

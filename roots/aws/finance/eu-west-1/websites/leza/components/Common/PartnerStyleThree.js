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
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
};

const PartnerStyleThree = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="partner-area bg-f5f4ef ptb-100">
            <div className="container">
                {display ? <OwlCarousel
                    className="partner-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="partner-item">
                        <img src="/images/partner/partner6.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner7.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner8.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner9.png" alt="image" />
                    </div>

                    <div className="partner-item">
                        <img src="/images/partner/partner10.png" alt="image" />
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default PartnerStyleThree;

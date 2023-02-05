import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 500,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
};

const ProjectsSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="projects-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Our projects</span>
                    <h2>All the work that we do</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

                {display ? <OwlCarousel 
                    className="projects-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="projects-item">
                        <Link href="/project-details">
                            <a><img src="/images/projects/project1.jpg" alt="image" /></a>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link href="/project-details">
                                    <a>Financial Planning</a>
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="projects-item">
                        <Link href="/project-details">
                            <a><img src="/images/projects/project2.jpg" alt="image" /></a>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link href="/project-details">
                                    <a>Startup Funding</a>
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="projects-item">
                        <Link href="/project-details">
                            <a><img src="/images/projects/project3.jpg" alt="image" /></a>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link href="/project-details">
                                    <a>Fund Management</a>
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="projects-item">
                        <Link href="/project-details">
                            <a><img src="/images/projects/project4.jpg" alt="image" /></a>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link href="/project-details">
                                    <a>Investment Shares</a>
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="projects-item">
                        <Link href="/project-details">
                            <a><img src="/images/projects/project5.jpg" alt="image" /></a>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link href="/project-details">
                                    <a>Financial Planning</a>
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="projects-item">
                        <Link href="/project-details">
                            <a><img src="/images/projects/project6.jpg" alt="image" /></a>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link href="/project-details">
                                    <a>Startup Funding</a>
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="projects-item">
                        <Link href="/project-details">
                            <a><img src="/images/projects/project7.jpg" alt="image" /></a>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link href="/project-details">
                                    <a>Fund Management</a>
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="projects-item">
                        <Link href="/project-details">
                            <a><img src="/images/projects/project8.jpg" alt="image" /></a>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link href="/project-details">
                                    <a>Investment Shares</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default ProjectsSlider;
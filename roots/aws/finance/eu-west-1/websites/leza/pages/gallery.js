import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import Footer from '../components/_App/Footer';

const images = [
    ('/images/gallery/gallery1.jpg'),
    ('/images/gallery/gallery2.jpg'),
    ('/images/gallery/gallery3.jpg'),
    ('/images/gallery/gallery4.jpg'),
    ('/images/gallery/gallery5.jpg'),
    ('/images/gallery/gallery6.jpg'),
    ('/images/gallery/gallery7.jpg'),
    ('/images/gallery/gallery8.jpg'),
    ('/images/gallery/gallery9.jpg'),
];

const Gallery = () => {
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Gallery"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Gallery"
                imgClass="item-bg-6"
            />

            <div className="gallery-area pt-100 pb-100">
                {/* Lightbox */}
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item">
                                <div className="image">
                                    <div
                                        className="link-btn popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                    >
                                        <img src="/images/gallery/gallery1.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Financial Planning</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item">
                                <div className="image">
                                    <div
                                        className="link-btn popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                                    >
                                        <img src="/images/gallery/gallery2.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Startup Funding</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item">
                                <div className="image">
                                    <div
                                        className="link-btn popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                                    >
                                        <img src="/images/gallery/gallery3.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Fund Management</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item">
                                <div className="image">
                                    <div
                                        className="link-btn popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3);}}
                                    >
                                        <img src="/images/gallery/gallery4.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Investment Shares</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item">
                                <div className="image">
                                    <div
                                        className="link-btn popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(4);}}
                                    >
                                        <img src="/images/gallery/gallery5.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Strategy</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item">
                                <div className="image">
                                    <div
                                        className="link-btn popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(5);}}
                                    >
                                        <img src="/images/gallery/gallery6.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Finance</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item">
                                <div className="image">
                                    <div
                                        className="link-btn popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(6);}}
                                    >
                                        <img src="/images/gallery/gallery7.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Investments Loan</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item">
                                <div className="image">
                                    <div
                                        className="link-btn popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(7);}}
                                    >
                                        <img src="/images/gallery/gallery8.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Business Purpose</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="gallery-item">
                                <div className="image">
                                    <div
                                        className="link-btn popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                    >
                                        <img src="/images/gallery/gallery9.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>Commercial Loan</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gallery-btn">
                    <Link href="#">
                        <a className="default-btn">
                            Load more <span></span>
                        </a>
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Gallery;

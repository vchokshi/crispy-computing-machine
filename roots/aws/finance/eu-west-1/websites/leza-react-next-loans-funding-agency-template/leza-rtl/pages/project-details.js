import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CallUsStyleTwo from '../components/Common/CallUsStyleTwo';
import Footer from '../components/_App/Footer';

const ProjectDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Project Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Project Details" 
                imgClass="item-bg-3" 
            /> 

            <div className="projects-details ptb-100">
                <div className="container">
                    <div className="projects-details-image">
                        <img src="/images/single-projects.jpg" alt="image" />
                    </div>

                    <div className="projects-details-content">
                        <h3>Our Best Useful Company</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>

                        <h4>Our Projects</h4>
                        <p>No fake products and projects. The customer is king, their lives and needs are the inspiration. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
                
                        <h4>Define Your Category</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic.</p>

                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this.</p>

                        <div className="projects-details-info">
                            <div className="single-info-box">
                                <h4>Client</h4>
                                <span>James Anderson</span>
                            </div>

                            <div className="single-info-box">
                                <h4>Category</h4>
                                <span>House loan</span>
                            </div>

                            <div className="single-info-box">
                                <h4>Date</h4>
                                <span>February 28, 2020</span>
                            </div>

                            <div className="single-info-box">
                                <h4>Share</h4>
                                <ul className="social">
                                    <li>
                                        <a target="_blank" href="https://www.facebook.com/">
                                            <i className="flaticon-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://www.twitter.com/">
                                            <i className='flaticon-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://www.instagram.com/">
                                            <i className="flaticon-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://www.linkedin.com/">
                                            <i className='flaticon-linkedin'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="single-info-box">
                                <a href="#" target="_blank" className="default-btn">
                                    Live Preview <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
            <CallUsStyleTwo />
            
            <Footer />
        </>
    )
}

export default ProjectDetails;
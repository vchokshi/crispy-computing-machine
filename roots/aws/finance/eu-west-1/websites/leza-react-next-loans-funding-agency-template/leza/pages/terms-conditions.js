import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const TermsConditions = () => {
    return (
        <>
            <Navbar />
            
            <PageBanner 
                pageTitle="Terms & Conditions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Terms & Conditions" 
                imgClass="item-bg-1" 
            /> 

            <div className="terms-of-condition-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="terms-of-condition-content">
                                <img src="/images/terms-service.jpg" alt="image" />

                                <h3>Welcome to Leza Terms & Conditions</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                     
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                    
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
 
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p> 
                                <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant</p>

                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="terms-of-condition-sidebar">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>Agricultural Loan</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Business Loan</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>House Loan</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Personal Loan</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Education Loan</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Payday Loan</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Vehicle loan</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Medical loan</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>StartUp loan</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li className="active">
                                        <Link href="/privacy-policy">
                                            <a>Terms & Condition</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default TermsConditions;
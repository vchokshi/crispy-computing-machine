import React, { Component } from 'react';
class Contact extends Component {
    render() {
        return (
			<section className="flat-row padding-70">
				<div className="flat-help">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="services-control">
									<div className="icon-top">
										<img src="images/about/2.png" alt="f&o" />
									</div>
									<div className="title-section">
										<h4 className="title">Need Help?</h4>
									</div>
									<div className="post-services">
										<p>Contact our customer support team if you have any further questions. We are heare to help you out</p>
									</div>
								</div>

								<div className="contact-help">
									<div className="item phone-help">
										<p>1-800-300-2121</p>
									</div>
									<div className="item email-help">
										<p>Contact@gmail.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        );
    }
}

export default Contact;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Services extends Component {
	constructor(props) {
        super(props);
        this.state = {
			title: [
				{
					id: 1,
					title: 'Services Control',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco.'
				}
			],
            tabservices: [
				{
					id: 1,
					title: 'Strategic Planning'
				},
				{
					id: 2,
					title: 'Trades & Stocks'
				},
				{
					id: 3,
					title: 'Audit & Assurance'
				},
				{
					id: 4,
					title: 'Turnaround Consulting'
				},
				{
					id: 5,
					title: 'Trades & Stocks'
				},
				{
					id: 6,
					title: 'Strategic Planning'
				},
				{
					id: 7,
					title: 'Financial Projections'
				},
				{
					id: 8,
					title: 'Turnaround Consulting'
				},
			],
			listchoose: [
				{
					id: 1,
					classicon: 'fa fa-sign-language',
					numb: '65',
					subnumb: '%',
					li1: 'F&O has worked with',
					li2: '65% of the',
					li3: 'Fortune 500',
				},
				
				{
					id: 2,
					classicon: 'fa fa-users',
					numb: '1000',
					subnumb: '+',
					li1: 'Trained over 1,000',
					li2: 'sales professionals',
					li3: 'worldwide',
				},
				{
					id: 3,
					classicon: 'fa fa-globe',
					numb: '25',
					subnumb: 'countries',
					li1: 'Delivered programs in',
					li2: 'over 25 countries',
					li3: '',
				},
				{
					id: 4,
					classicon: 'fa fa-trophy',
					numb: '10',
					subnumb: 'year',
					li1: '10 straight years as a',
					li2: 'top sales training',
					li3: 'company',
				},
			],
			listpost: [
                {
                    id: 1,
                    class: 'list-post',
                    title: 'There are many variations of passages available',
                    text: 'Dolore fugiat labore, beef in pork belly venison spare ribs pork sed. Landjaeger lorem swine, laborum nisi excepteur short loin. Hamburger nulla pastrami exer citation nostrud ut aute do turkey.'
                },
                {
                    id: 2,
                    class: 'list-post v1',
                    title: 'Determine the right inventory level:',
                    text: 'With hundreds of medications in the market, Pharm Ltd. needed a proper method to predict and manage their inventory. Using a mean absolute percentage analysis, the teams appropriate.'
                }

            ],
			listbusiness: [
				{
					id: 1,
					title: 'Don James/Semplice',
					subtitle: '– Article and News Research',
				},
				{
					id: 2,
					title: 'VoltageBusiness',
					subtitle: '– Company and Industry Research',
				},
				{
					id: 3,
					title: 'Goovers',
					subtitle: '– Company and Industry Research',
				},
				{
					id: 4,
					title: 'IRISpace',
					subtitle: '– Article and News Research',
				},
				{
					id: 5,
					title: 'Lexos-Nexos',
					subtitle: '– Company, Industry, Market Research',
				},
				{
					id: 6,
					title: 'Plombett',
					subtitle: '– Article and News Research',
				},
				{
					id: 7,
					title: 'Pronounce',
					subtitle: '– Market Analysis report "Slices"',
				},
			]
        }
    }
    render() {
        return (
			<section className="flat-row padding-120">
				<div className="flat-services-control">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								{
									this.state.title.map(data=>(
										<div key={data.id} className="services-control">
											<div className="title-section">
												<h4 className="title">{data.title}</h4>
											</div>
											<div className="post-services">
												<p>{data.description}</p>
											</div>
										</div>
									))
								}
							</div>
						</div>

						<div className="row">
							<div className="col-md-3">
								<div className="sidebar-services">
									<div className="list-services">
										<ul className="services">
											{
												this.state.tabservices.map(data=>(
													<li key={data.id} >
														<Link to="#">{data.title}</Link>
													</li>
												))
											}
										</ul>
									</div>
								</div>
							</div>

							<div className="col-md-9">
								<div className="content-services">
									<div className="thumb">
										<img src="images/about/home6/1.jpg" alt="f&o" />
									</div>
									<div className="post v1">
										<h4 className="title">Research Based Sales Training</h4>
										<p>At Cosine we've earned a reputation for providing sales people with the insights they need to dominate in today's hyper-competitive selling climate.</p>
										<p>F&O is a research based sales training, sales coaching and sales consulting firm that is the leader in the integration of proven science and sales. Based in New York, United States, we study the scientific disciplines of social psycholo-gy, communication theory, cognitive psychology, social neuroscience, cognitive neuroscience and behavioral eco-nomics. We then take the repeatable and predictable principles, which science has proven to create and enable influence, out of the laboratory and academic journals and apply them to selling.</p>
									</div>

									<div className="post v2">
									{
										this.state.listpost.map(data=>(                        
											<div key={data.id} className={data.class}>
												<h5 className="title">{data.title}</h5>
												<p>{data.text}</p>
											</div>        
                            			))
                        			}
									</div>

									<div className="post v3">
										<h4 className="title">Why Choose Us</h4>
										<p>We help the world's leading companies drive predictable revenue and profitability growth by optimizing sales organization performance.</p>
										<div className="box">
											{
												this.state.listchoose.map(data =>(
													<div key={data.id} className="item">
														<div className="content">
															<div className="top-box">
																<i className={data.classicon}></i>
															</div>
															<div className="number-box">
																<p>{data.numb}<span className="v1">{data.subnumb}</span></p>
																<ul>
																	<li>{data.li1}</li>
																	<li>{data.li2}</li>
																	<li>{data.li3}</li>
																</ul>
															</div>
														</div>
													</div>
												))
											}
										</div>
									</div>

									<div className="post v4">
										<div className="box">
											<h4 className="title">Business plan market</h4>
											<p className="title-top">Our clients tell us we are unique for a variety of <br /> important reasons including:</p>
											<div className="list">
												{
													this.state.listbusiness.map(data=> (
														<p key={data.id} ><span>{data.title}</span> {data.subtitle}</p>
													))
												}
											</div>
										</div>
										<div className="box v1">
											<div className="flat-video-fancybox">
												<img src="images/video/1.jpg" alt="f&o" />
												<a className="fancybox" data-type="iframe"  href="https://www.youtube.com/embed/2Ge1GGitzLw?autoplay=1" > 
													<div className="overlay-inner">
														<i className="fa fa-play"></i>
													</div>
												</a>
											</div>
										</div>
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

export default Services;
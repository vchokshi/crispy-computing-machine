import React, { Component } from 'react';
import { Link } from "react-router-dom";
class MainServices extends Component {
	constructor(props) {
        super(props);
        this.state = {
            titleServices: [
                {
                    id: 1,
					title: 'What We Can Offer You',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua.',
                }
			],
			imagebox: [
				{
					id: '1',
					imgsrc: 'images/imagebox/04.jpg',
					title: 'Mutual Funds',
					description: 'Mutual funds pool money from many investors to purchase broad range of investments, such as stocks.'
				},
				{
					id: '2',
					imgsrc: 'images/imagebox/05.jpg',
					title: 'Investment Planning',
					description: 'Mutual funds pool money from many investors to purchase broad range of investments, such as stocks.'
				},
				{
					id: '3',
					imgsrc: 'images/imagebox/06.jpg',
					title: 'Personal Insurance',
					description: 'Mutual funds pool money from many investors to purchase broad range of investments, such as stocks.'
				},
				{
					id: '4',
					imgsrc: 'images/imagebox/07.jpg',
					title: 'Industrial Insurance',
					description: 'Mutual funds pool money from many investors to purchase broad range of investments, such as stocks.'
				},
				{
					id: '5',
					imgsrc: 'images/imagebox/08.jpg',
					title: 'INVESTMENT IN BONDS',
					description: 'Mutual funds pool money from many investors to purchase broad range of investments, such as stocks.'
				},
				{
					id: '9',
					imgsrc: 'images/imagebox/09.jpg',
					title: 'Retirement Planning',
					description: 'Mutual funds pool money from many investors to purchase broad range of investments, such as stocks.'
				}
			]
        }
    }
    render() {
        return (
			<section className="flat-row pd-services-post">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							{
								this.state.titleServices.map(data =>(
									<div className="title-section center s1" key={data.id} >
										<h2>{data.title} </h2>
										<p className="sub-title-section">{data.description} </p>
									</div>
								))
							}
							<div className="dividers dividers-imagebox"></div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="wrap-imagebox-grid">
									{
										this.state.imagebox.map(data =>(
											<div className="flat-imagebox services-grid item" key={data.id} >
												<div className="flat-imagebox-inner"  >
													<div className="flat-imagebox-image">
														<img src={data.imgsrc} alt="img" />
													</div>
													<div className="flat-imagebox-header">
														<h3 className="flat-imagebox-title">
															<Link to="#">{data.title}</Link>	
														</h3>
													</div>
													<div className="flat-imagebox-content">
														<div className="flat-imagebox-desc">{data.description}</div>
														<div className="flat-imagebox-button">
															<Link to="#" target="_blank">Read More</Link>
														</div>
													</div>
												</div>
											</div> 
								
										))
									} 
							</div>
						</div>
					</div>
				</div>
			</section>

				



        );
    }
}

export default MainServices;
import React, { Component } from 'react';
class ProgessAccordion extends Component {
	constructor(props) {
        super(props);
        this.state = {
            titleprogres: [
                {
                    id: 1,
					title: 'company progress',
					description: 'In your life, you may have many times facing financial issues. It’s good if you know how to handle it by yourself and have enough time to take care of it. In other cases, it’s time you get a financial consulting service. And the article below will show',
                }
			],
			flatprogress: [
				{
					id: 1,
					nameflat: 'Photoshop',
					perc: '40',
					datapercent: '40'
				},
				{
					id: 2,
					nameflat: 'WordPress',
					perc: '70', 
					datapercent: '70'
				},
				{
					id: 3,
					nameflat: 'Javascript',
					perc: '90',
					datapercent: '90' 
				}
			],
			titleAccordion: [
				{
					id: 1,
					title: 'Frequently Asked Questions',
				}
			],
			flattoggle: [
				{
					id: 1,
					toggletitle: 'What are all the different types of accountants?',
					togglecontent: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
					class: 'toggle-title active'
				},
				{
					id: 2,
					toggletitle: 'What Do Accountants Without Their CPA do?',
					togglecontent: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
					class: 'toggle-title'
				},
				{
					id: 3,
					toggletitle: 'How do i make a mid-career switch into ?',
					togglecontent: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
					class: 'toggle-title'
				}
			]
        }
    }
    render() {
        return (
            	<section className="flat-row flat-progress-accordion bg-theme">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								{
									this.state.titleprogres.map(data =>(
										<div className="progres" key={data.id} >
											<div className="progress-title">
												<h2>{data.title}</h2>
											</div>
											<div className="progress-content">
												<p>
													{data.description}
												</p>
											</div>
											{
												this.state.flatprogress.map(data => (
													<div className="flat-progress " key={data.id} >
														<div className="name">{data.nameflat}</div>
														<div className="perc">{data.perc}</div>
														<div className="progress-bar" data-percent={data.datapercent} data-waypoint-active="yes">
															<div className="progress-animate" data-duration="3000"></div>
														</div>
													</div>
												))
											}
											
								</div>
							

									))
								}
								</div>

							<div className="col-md-6">
								<div className="accordion">
									{
										this.state.titleAccordion.map(data=> (
											<div className="accordion-title" key={data.id} >
												<h2>{data.title}</h2>
											</div>
										))
									}
									<div className="flat-accordion style2">
										{
											this.state.flattoggle.map(data=> (
												<div className="flat-toggle" key={data.id} >
													<h6 className={data.class}>{data.toggletitle}</h6>
													<div className="toggle-content">
														<p>{data.togglecontent}</p>                               
													</div>
												</div>
											))
										}
										
									</div>
									
								</div>
							</div>

						</div>
					</div>
		        </section>

     
           
        );
    }
}

export default ProgessAccordion;
import React, { Component } from 'react';
class Counter extends Component {
	constructor(props) {
        super(props);
        this.state = {
            datacounter: [
                {
                    id: 1,
					number: '1603',
					namecounter: 'Individual Investors'
				},
				{
                    id: 2,
					number: '2154',
					namecounter: 'Brokerage Accounts'
				},
				{
                    id: 3,
					number: '4321',
					namecounter: 'Commissionable Trades'
				},
				{
                    id: 4,
					number: '5321',
					namecounter: 'Customer Assets'
                },
            ]
        }
    }
    render() {
        return (
            <section className="flat-row parallax parallax2 overlay-s1 flat-counter">
                        <div className="overlay-parallax"></div>
                        <div className="container">
                            <div className="row">
								{
									this.state.datacounter.map(data => (
										<div className="col-md-3" key={data.id} >
											<div className="counter">
												<div className="counter-content">
													<div className="counter-number">
														<p className="numb-count" data-from="0" data-to="1603" data-speed="1000" data-waypoint-active="yes">{data.number}</p>
													</div>
												</div>
												<p className="name">{data.namecounter}</p>
											</div>
                                		</div>
									))
								}
                                

                            </div>
                        </div>       
                    </section>

     
           
        );
    }
}

export default Counter;
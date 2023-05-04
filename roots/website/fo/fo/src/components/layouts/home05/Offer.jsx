import React, { Component } from 'react';
import OfferBox1 from './OfferBox1'
import OfferBox2 from './OfferBox2'
class Offer extends Component {
	constructor(props) {
        super(props);
        this.state = {
            titleServices: [
                {
                    id: 1,
                    title: 'What we offer',
                }
            ]
        }
    }
    render() {
        return (
            <section className="flat-row flat-iconbox style2">
				<div className="container">

					<div className="row" >
						{
							this.state.titleServices.map(data => (
								<div className="col-md-12" key={data.id}>
									<div className="title-section center">
										<h2>{data.title}</h2>
									</div>
									{/* <!-- /.title-section --> */}
								</div>

							))
						}
						
					</div>
					{/* <!-- /.row --> */}
					<OfferBox1 />

					<div className="row">
						<div className="col-md-12">
							<div className="height80"></div>
						</div>
					</div>
					<OfferBox2 />
				</div>
        	</section>
        // <!-- /.flat-row-iconbox -->

     
           
        );
    }
}

export default Offer;
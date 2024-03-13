import React, { Component } from 'react';
import ServicesBox1 from './ServicesBox1'
import ServicesBox2 from './ServicesBox2'
class Services extends Component {
	constructor(props) {
        super(props);
        this.state = {
            titleServices: [
                {
                    id: 1,
                    title: 'Our Services',
                }
            ]
        }
    }
    render() {
        return (
            <section className="flat-row flat-iconbox bg-theme">
				<div className="container">

					<div className="row" >
						{
							this.state.titleServices.map(data => (
								<div className="col-md-12" key={data.id}>
									<div className="title-section left">
										<h2>{data.title}</h2>
									</div>
									{/* <!-- /.title-section --> */}
								</div>

							))
						}
						
					</div>
					{/* <!-- /.row --> */}
					<ServicesBox1 />

					<div className="row">
						<div className="col-md-12">
							<div className="height80"></div>
						</div>
					</div>
					<ServicesBox2 />
				</div>
        	</section>
        // <!-- /.flat-row-iconbox -->

     
           
        );
    }
}

export default Services;
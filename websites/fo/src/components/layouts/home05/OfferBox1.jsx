import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class OfferBox1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEvents: [
                {
                    id: 1,
                    classicon: 'icon-rounded clipboard',
                    title: 'Accumulation',
                    description: 'Donec lacinia mi rutrum sagittis consequat. Donec sagittis, tellus sodales sollicitudin commodo ', 
                },
                {
                    id: 2,
                    classicon: 'icon-rounded line-chart',
                    title: 'Mutual Funds',
                    description: 'Donec lacinia mi rutrum sagittis consequat. Donec sagittis, tellus sodales sollicitudin commodo',
                },
                {
                    id: 3,
                    classicon: 'icon-rounded clock',
                    title: 'Risk Management',
                    description: 'Donec lacinia mi rutrum sagittis consequat. Donec sagittis, tellus sodales sollicitudin commodo',
                },
            ]
        }
    }
    
    render() {
        return (
            <div className="row">
                {
                    this.state.dataEvents.map(data => (
                        <div className="col-md-4" key={data.id}>
                            <div className="iconbox-item">
                                <div className="iconbox style2">
                                    <div className="box-header">
                                        <div className={data.classicon}>
                                            
                                        </div>
                                        {/* <!-- /.icon-rounded --> */}
                                        <div className="box-title">
                                            <Link to="#" title="">{data.title}</Link>
                                        </div>
                                        {/* <!-- /.box-title --> */}
                                        </div>
                                        {/* <!-- /.box-header --> */}
                                    <div className="box-content">{data.description}</div>
                                    {/* <!-- /.box-content --> */}
                                </div>
                                 {/* <!-- /.iconbox --> */}
						    </div>
                            {/* <!-- /.iconbox-item --> */}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default OfferBox1;
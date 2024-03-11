import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class OfferBox2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEvents: [
                {
                    id: 4,
                    classicon: 'icon-rounded magic',
                    title: 'Estate Planning',
                    description: 'Donec lacinia mi rutrum sagittis consequat. Donec sagittis, tellus sodales sollicitudin commodo',
                },
                {
                    id: 5,
                    classicon: 'icon-rounded artboard',
                    title: 'Retirement Planning',
                    description: 'Donec lacinia mi rutrum sagittis consequat. Donec sagittis, tellus sodales sollicitudin commodo',
                },
                {
                    id: 6,
                    classicon: 'icon-rounded global',
                    title: 'Business Planning',
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

export default OfferBox2;
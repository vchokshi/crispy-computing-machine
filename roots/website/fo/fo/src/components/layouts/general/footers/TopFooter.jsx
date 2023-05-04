import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TopFooter extends Component {
    render() {
        return (
            <div className="widget-infomation">
                <ul className="infomation-footer">
                    <li><i className="fa fa-envelope" aria-hidden="true"></i><Link to="#" title="">support@themesflat.com</Link></li>
                    <li><i className="fa fa-phone" aria-hidden="true"></i><Link to="#" title="">+61 3 8376 6284</Link></li>
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i><Link to="#" title="">PO Box 16122 Collins Street West Victoria 8007 Australia</Link></li>
                </ul>
                {/* <!-- /.infomation-footer --> */}
            </div>
        /* <!-- /.widget-infomation --> */
        );
    }
}

export default TopFooter;
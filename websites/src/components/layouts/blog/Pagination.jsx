import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Pagination extends Component {
    
    render() {
        return (
            <ul className="flat-pagination">
                <li className="active v1"><Link to="#">1</Link></li>
                <li><Link to="#">2</Link></li>
                <li><Link to="#">3</Link></li>                                
                <li className="next">
                    <Link to="#">Next <i className="fa fa-angle-double-right"></i></Link>
                </li>                               
            </ul>
        );
    }
}

export default Pagination;
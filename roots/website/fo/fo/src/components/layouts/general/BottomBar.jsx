import React, { Component } from 'react';
import { Link } from "react-router-dom";
class BottomBar extends Component {
    render() {
        return (
            <div>
            <div className="bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="container-bottom">
                                <div className="copyright"> 
                                    <p>Coyright © 2021 Themesflat. All rights reserved.</p>
                                </div>    
                            </div>
                            {/* <!-- /.container-bottom --> */}
                        </div>
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container --> */}
            </div>
            {/* <!-- Go Top --> */}
            <Link to="" className="go-top">
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </Link> 
            </div>
        // <!-- Bottom -->
        );
    }
}

export default BottomBar;
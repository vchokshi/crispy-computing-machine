import React, { Component } from 'react';
import { Overview, SlideBar } from '.';
class MainPost extends Component {
    render() {
        return (
			// <!-- posts -->
            <section className="main-content bg-sidebar sidebar-left">
                <div className="container">
                    <div className="flat-overview">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-section style1">
                                    <h3 className="title">Company Overview</h3>
                                </div>
                            </div>
                            
                            <div className="wrap-main-post">
                                <div className="col-md-3">
                                    <SlideBar />
                                </div>
                                {/* <!-- /col-md-3 --> */}

                                <div className="col-md-9">
                                    <Overview />
                                    </div>
                                {/* <!-- /.col-md-9 -->  */}
                            </div>
                            {/* <!-- /.wrap-main-post --> */}
                        </div>
                        {/* <!-- /.row --> */}
                    </div>            
                </div>
                {/* <!-- /.container -->    */}
            </section>
            /* <!-- /.main-content --> */
        )
                                
    }
}

export default MainPost;
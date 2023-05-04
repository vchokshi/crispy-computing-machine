import React, { Component } from 'react';
import { UsefulLink, RecentImage,  FormFooter } from './footers/index';

class Footer extends Component {
    render() {
        return (
        // <!-- Footer -->
        <div className="footer">
            <div className="container">
                <div className="row">
                    <RecentImage />
                    <UsefulLink />
                    <FormFooter />
                </div>
                {/* <!-- row --> */}
            </div>
            {/* <!-- container --> */}
        </div>
        /* <!-- footer --> */
        );
    }
}

export default Footer;
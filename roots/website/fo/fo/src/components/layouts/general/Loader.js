import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <span className="loader1 block-loader"></span>
                <span className="loader2 block-loader"></span>
                <span className="loader3 block-loader"></span>
            </div>
        );
    }
}

export default Loader;
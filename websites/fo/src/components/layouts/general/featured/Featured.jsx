import React, { Component } from 'react';
import EventBoxs from './EventBoxs';
class Featured extends Component {
    render() {
        return (
            <section className="flat-row no-padding-bottom">
            <div className="flat-choose-us">
                <div className="container">
                    <EventBoxs />
                </div>
            </div>
        </section>
        /* <!-- flat-row --> */
           
        );
    }
}

export default Featured;
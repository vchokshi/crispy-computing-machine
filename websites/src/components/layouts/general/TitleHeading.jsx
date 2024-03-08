import React, { Component } from 'react';

class TitleHeading extends Component {
    render() {
        return (
            <div className="flat-title flat-text-center">
                <h2 className={this.props.data.classTitle}>{this.props.data.title}</h2>
                <p className={this.props.data.classDescription}>{this.props.data.description}</p>
            </div>
        );
    }
}

export default TitleHeading;
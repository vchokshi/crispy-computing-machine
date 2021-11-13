var React = require('react');

var styles = {
  project: {
    height: '15rem',
    width: '15rem',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem',
    padding: '1rem'
  },
  logo: {
    width: '5rem',
    height: '5rem',
    float: 'right',
    margin: '0 0 .5rem .5rem'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0'
  }
};

module.exports = React.createClass({
  propTypes: {
    project: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <div style={styles.project}>
        <img style={styles.logo} src={this.props.project.logo}/>
        <h3 style={styles.h3}>
          {this.props.project.title}
        </h3>
        <p>{this.props.project.text1}</p>
        <p>{this.props.project.text2}</p>
      </div>
    );
  }
});

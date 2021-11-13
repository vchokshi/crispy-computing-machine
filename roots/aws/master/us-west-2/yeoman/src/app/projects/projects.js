var React = require('react');
var axios = require('axios');
var Project = require('./project');

var styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  projects: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

module.exports = React.createClass({
  getInitialState: function () {
    return {projects: []};
  },

  componentDidMount: function () {
    axios
      .get('app/projects/projects.json')
      .then(function (response) {
        this.setState({projects: response.data});
      }.bind(this));
  },

  render: function () {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Ask Us About The Projects Below
        </h2>
        <div style={styles.projects}>
          {this.state.projects.map(function (project, i) {
            return <Project key={i} project={project}/>;
          })}
        </div>
      </div>
    );
  }
});

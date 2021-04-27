var React = require('react');

var styles = {
  title: {
    padding: '1rem',
    backgroundColor: '#7a89ab',
    color: 'white'
  },
  h1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontWeight: 300,
    fontSize: '3rem',
    margin: '1rem'
  },
  p: {
    align: 'left',
    fontSize: '1.1rem',
    margin: '1rem'
  }
};

module.exports = React.createClass({
  render: function () {
    return (
      <div style={styles.title}>
        <h1 style={styles.h1}>What is Site Reliability Consulting?</h1>
        <p style={styles.p}>Site reliability consulting can be described as:</p>
        <p style={styles.p}>The areas of expertise in DevOps, CI/CD and Cybersecurity within the Software Development Life Cycle (SDLC) Universe.</p>
        <p style={styles.p}>The areas of work across Prepare, Plan, Design, Implement, Operate, Optimize Framework.</p>
        <p style={styles.p}>Said differently, it is the undercurrent of software delivery.</p>
      </div>
    );
  }
});

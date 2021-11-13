var React = require('react');

var styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#20232c',
    color: '#e21d1d'
  },
  h1: {
    fontWeight: 300,
    fontSize: '3rem',
    margin: '1rem'
  },
  logo: {
    height: '6rem',
    // backgroundColor: 'white',
    borderRadius: '1rem',
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '.5rem'
  }
};

module.exports = React.createClass({
  render: function () {
    return (
      <div style={styles.title}>
        <h1 style={styles.h1}>IOT4 Consulting</h1>

        <h2 style={styles.h2}>CI/CD, DevOps and CyberSecurity</h2>
      </div>
    );
  }
});

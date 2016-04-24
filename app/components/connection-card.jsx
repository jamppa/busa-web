import React from 'react';
import Paper from 'material-ui/lib/paper';
import './connection-card.css';

export default React.createClass({

  getDefaultProps: function () {
    return {
      connection: {
        from: {},
        to: {}
      }
    }
  },

  style: {
    textAlign: 'center',
    fontSize: 'x-large',
    margin: '1em'
  },

  render() {
      return (
        <Paper zDepth={2} style={this.style}>
          <div className="connection-card-container">
            <div className="connection">
              <span>{ this.props.connection.from.name }</span>
              <span>-</span>
              <span>{ this.props.connection.to.name }</span>
            </div>
            <div className="connection-time">
              <span>08:00 - 08:45 (45min)</span>
            </div>
          </div>
        </Paper>
      );
  }

});

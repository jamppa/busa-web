import React from 'react';
import Paper from 'material-ui/lib/paper';
import moment from 'moment';
import './connection-card.css';

export default React.createClass({

  getDefaultProps() {
    return {
      connection: {
        from: {},
        to: {}
      }
    }
  },

  getConnection() {
    return this.props.connection || {};
  },

  formatTime(isoTime) {
    return moment(isoTime).format('HH:mm');
  },

  style: {
    textAlign: 'center',
    margin: '1em'
  },

  render() {
      return (
        <Paper zDepth={2} style={this.style}>
          <div className="connection-card-container">
            <div className="connection">
              <h2>{ this.getConnection().from.name }</h2>
              <h2>-</h2>
              <h2>{ this.getConnection().to.name }</h2>
            </div>
            <div className="connection-time">
              <h3>{this.formatTime(this.getConnection().from.time)} - {this.formatTime(this.getConnection().to.time)}</h3>
            </div>
          </div>
        </Paper>
      );
  }

});

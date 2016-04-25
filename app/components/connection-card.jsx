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

  formatTime(isoTime) {
    return moment(isoTime).format('HH:mm');
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
              <span>{this.formatTime(this.props.connection.from.time)} - {this.formatTime(this.props.connection.to.time)}</span>
            </div>
          </div>
        </Paper>
      );
  }

});

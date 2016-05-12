import React from 'react';
import { connect } from 'react-redux';
import ConnectionCard from '../components/connection-card.jsx';

export const DeparturingNext = React.createClass({

  render() {
    return(
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-4">
          {this.props.connections.map(c => {
            return (
              <ConnectionCard connection={c} />
            );
          })}
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    connections: state.connections.get('departuringNext').toJS()
  };
}

export const DeparturingNextConnected = connect(mapStateToProps)(DeparturingNext);

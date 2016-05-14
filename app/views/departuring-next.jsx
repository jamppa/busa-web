import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/connections-actions';

import ConnectionCard from '../components/connection-card.jsx';

export const DeparturingNext = React.createClass({

  propTypes: {
    fetchConnectionsDeparturingNext: React.PropTypes.func.isRequired,
    connections: React.PropTypes.array.isRequired
  },

  getDefaultProps() {
    return {
      fetchConnectionsDeparturingNext: () => {},
      connections: []
    };
  },

  componentDidMount() {
    this.props.fetchConnectionsDeparturingNext();
  },

  render() {

    const connectionCards = this.props.connections.map((conn, index) => {
      return (<ConnectionCard key={index} connection={conn} />);
    });

    return(
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-4">
          {connectionCards}
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

export const DeparturingNextConnected = connect(mapStateToProps, actions)(DeparturingNext);

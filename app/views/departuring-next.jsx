import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/connections-actions';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import RefreshIcon from 'material-ui/lib/svg-icons/action/cached';
import ConnectionCard from '../components/connection-card.jsx';

import './departuring-next.css';

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

  handleRefreshButtonOnClick() {
    this.props.fetchConnectionsDeparturingNext();
  },

  render() {

    const connectionCards = this.props.connections.map((conn, index) => {
      return (
        <div key={index} className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
          <ConnectionCard connection={conn} />
        </div>
        );
    });

    return(
      <div className="pure-g departuring-next">
        <div className="pure-u-1">
          <div className="heading">
            <h2>SEURAAVAT LÄHDÖT</h2>
          </div>
        </div>
        {connectionCards}
        <div className="pure-u-1">
          <FloatingActionButton backgroundColor="#78909C" style={{margin: '2rem'}} onClick={this.handleRefreshButtonOnClick}>
            <RefreshIcon />
          </FloatingActionButton>
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

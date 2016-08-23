import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/connections-actions';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import RefreshIcon from 'material-ui/lib/svg-icons/action/cached';
import CircularProgress from 'material-ui/lib/circular-progress';
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

  renderConnectionCards() {
    const connectionCards = this.props.connections.map((conn, index) => {
      return (
        <div key={index} className="pure-u-md-1 pure-u-lg-1-4">
          <Link to={'/connection/' + conn.from.name + '/' + conn.to.name}>
            <ConnectionCard connection={conn} />
          </Link>
        </div>
        );
    });
    return connectionCards;
  },

  renderSpinner() {
    return (
      <div className="pure-u-1" style={{textAlign: 'center'}}>
        <CircularProgress size={2} />
      </div>
    );
  },

  render() {

    let content;
    if(this.props.isLoading) {
      content = this.renderSpinner();
    }
    else {
      content = this.renderConnectionCards();
    }

    return(
      <div className="pure-g departuring-next">
        <div className="pure-u-1">
          <div className="heading">
            <h1 className="uppercase">seuraavat lähdöt</h1>
          </div>
        </div>
        {content}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    connections: state.connections.get('departuringNext').toJS(),
    isLoading: state.connections.get('isLoading')
  };
}

export const DeparturingNextConnected = connect(mapStateToProps, actions)(DeparturingNext);

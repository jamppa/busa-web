import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/connections-actions';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import RefreshIcon from 'material-ui/lib/svg-icons/action/cached';
import ConnectionCard from '../components/connection-card.jsx';
import LoaderSpinner from '../components/loader-spinner.jsx';

const Connection = React.createClass({

  propTypes: {
    fetchConnectionsByPlaces: React.PropTypes.func.isRequired,
    connections: React.PropTypes.array.isRequired
  },

  getDefaultProps() {
    return {
      fetchConnectionsByPlaces: () => {},
      connections: []
    };
  },

  componentDidMount() {
    this.props.fetchConnectionsByPlaces(this.props.params.from, this.props.params.to);
  },

  renderConnectionCards() {
    const connectionCards = this.props.connections.map((conn, index) => {
      return (
        <div key={index} className="pure-u-md-1 pure-u-lg-1-4">
            <ConnectionCard connection={conn} />
        </div>
        );
    });
    return connectionCards;
  },

  renderSpinner() {
    return (
      <div className="pure-u-1" style={{textAlign: 'center'}}>
        <LoaderSpinner />
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


    return (
      <div className="pure-g departuring-next">
        <div className="pure-u-1">
          <div className="heading">
            <h1 className="uppercase">seuraavat lähdöt / {this.props.params.from} - {this.props.params.to}</h1>
          </div>
        </div>
        { content }
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    connections: state.connections.get('byPlaces').toJS(),
    isLoading: state.connections.get('isLoadingByPlaces')
  };
}

export const ConnectionConnected = connect(mapStateToProps, actions)(Connection);

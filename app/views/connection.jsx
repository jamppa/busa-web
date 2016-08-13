import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/connections-actions';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import RefreshIcon from 'material-ui/lib/svg-icons/action/cached';
import ConnectionCard from '../components/connection-card.jsx';

const Connection = React.createClass({

  render() {
    return (
      <div className="pure-g departuring-next">
        <div className="pure-u-1">
          <div className="heading">
            <h1 className="uppercase">seuraavat lähdöt / {this.props.params.from} - {this.props.params.to}</h1>
          </div>
        </div>
      </div>
    );
  }
});

const mapStateToProps = () => {
  return {};
}

export const ConnectionConnected = connect(mapStateToProps, actions)(Connection);

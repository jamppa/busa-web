import React from 'react';
import ConnectionCard from '../components/connection-card.jsx';

export default React.createClass({

  render() {
    return(
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-4"><ConnectionCard /></div>
        <div className="pure-u-1 pure-u-md-1-4"><ConnectionCard /></div>
      </div>
    );
  }
});

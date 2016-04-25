import React from 'react';
import ConnectionCard from '../components/connection-card.jsx';

export default React.createClass({

  render() {
    return(
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-4">
          <ConnectionCard connection={{from: {name: 'Nummela', time: '2016-04-24T22:30:00+03:00'}, to: {name: 'Helsinki', time: '2016-04-24T23:20:00+03:00'}}}/>
        </div>
      </div>
    );
  }
});

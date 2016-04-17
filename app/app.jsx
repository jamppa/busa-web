import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';

export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="pure-g">
          <div className="pure-u-md-1">
            <AppBar title="Busa - Kaukoliikenteen bussiaikataulut" />
          </div>
        </div>

        <div className="pure-g">
          <div className="pure-u-1">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
});

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';
import Colors from 'material-ui/lib/styles/colors';

export default React.createClass({

  style: {
    backgroundColor: Colors.blueGrey700
  },

  render: function() {
    return (
      <div>
        <div className="pure-g">
          <div className="pure-u-md-1">
            <AppBar title="B U S A" style={this.style}/>
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

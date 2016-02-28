import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './app.jsx';

injectTapEventPlugin();

const BusaRouter = React.createClass({

  renderRouter() {
    return(
      <Router history={hashHistory}>
          <Route path="/" component={App} />
      </Router>
    );
  },

  render() {
    return this.renderRouter();
  }

});

ReactDOM.render(<BusaRouter />, document.getElementById('app'));

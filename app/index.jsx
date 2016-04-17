import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './app.jsx';
import DeparturingNext from './views/departuring-next.jsx';

injectTapEventPlugin();

const BusaRouter = React.createClass({

  renderRouter() {
    return(
      <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={DeparturingNext} />
          </Route>
      </Router>
    );
  },

  render() {
    return this.renderRouter();
  }

});

ReactDOM.render(<BusaRouter />, document.getElementById('app'));

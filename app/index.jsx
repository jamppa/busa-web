import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './app.jsx';
import { DeparturingNextConnected } from './views/departuring-next.jsx';
import * as reducers from './reducers';

import './styles/main.css';

injectTapEventPlugin();

const busaReducers = combineReducers(reducers);
const store = createStore(busaReducers, applyMiddleware(thunkMiddleware));

/*store.dispatch({
  type: 'RECEIVE_CONNECTIONS_DEPARTURING_NEXT',
  payload: {
    connections: [{from: {name: 'Nummela', time: '2016-04-24T22:30:00+03:00'}, to: {name: 'Helsinki', time: '2016-04-24T23:20:00+03:00'}}]
  }
});
*/

const BusaRouter = React.createClass({

  renderRouter() {
    return(
      <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={DeparturingNextConnected} />
          </Route>
      </Router>
    );
  },

  render() {
    return (
      <Provider store={store}>
        {this.renderRouter()}
      </Provider>
    );
  }

});

ReactDOM.render(<BusaRouter />, document.getElementById('app'));

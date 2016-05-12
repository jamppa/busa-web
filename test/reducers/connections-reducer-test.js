import * as actions from '../../app/actions/connections-actions';
import * as reducer from '../../app/reducers/connections-reducer';
import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

describe('Connections Reducer', () => {

  it('should handle REQUEST_CONNECTIONS_DEPARTURING_NEXT -action', () => {

    const action = actions.requestConnectionsDeparturingNext();
    const oldState = reducer.initialState;

    const newState = reducer.connections(oldState, action);

    expect(newState).to.eql(oldState.merge({isLoading: true}));
  });

  it('should handle REQUEST_CONNECTIONS_DEPARTURING_NEXT -action without initial state', () => {

    const action = actions.requestConnectionsDeparturingNext();

    const newState = reducer.connections(undefined, action);

    expect(newState).to.eql(reducer.initialState.merge({isLoading: true}));
  });

  it('should just return the old state when action type is invalid or not supported', () => {

    const action = { type: 'INVALID_OR_NOT_SUPPORTED' };
    const oldState = reducer.initialState;

    const newState = reducer.connections(oldState, action);

    expect(newState).to.eql(oldState);
  });

  it('should handle RECEIVE_CONNECTIONS_DEPARTURING_NEXT -action by setting the connections to state', () => {

    const connection = { id: '123' };
    const action = actions.receiveConnectionsDeparturingNext([connection, connection]);
    const oldState = reducer.initialState.merge({isLoading: true});

    const newState = reducer.connections(oldState, action);

    expect(newState).to.eql(oldState.merge({isLoading: false, departuringNext: [connection, connection]}));
  });

});

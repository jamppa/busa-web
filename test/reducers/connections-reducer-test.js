import * as actions from '../../app/actions/connections-actions';
import * as reducer from '../../app/reducers/connections-reducer';
import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

describe('Connections Reducer', () => {

  const connection = { id: '123' };

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

    const action = actions.receiveConnectionsDeparturingNext([connection, connection]);
    const oldState = reducer.initialState.merge({isLoading: true});

    const newState = reducer.connections(oldState, action);

    expect(newState).to.eql(oldState.merge({isLoading: false, departuringNext: [connection, connection]}));
  });

  it('should handle REQUEST_CONNECTIONS_BY_PLACES action', () => {

    const action = actions.requestConnectionsByPlaces();
    const oldState = reducer.initialState;

    const newState = reducer.connections(oldState, action);

    expect(newState).to.eql(oldState.merge({isLoadingByPlaces: true}));
  });

  it('should handle RECEIVE_CONNECTIONS_BY_PLACES action', () => {

    const action = actions.receiveConnectionsByPlaces([connection, connection]);
    const oldState = reducer.initialState.merge({ isLoadingByPlaces: true });

    const newState = reducer.connections(oldState, action);

    expect(newState).to.eql(oldState.merge({ isLoadingByPlaces: false, byPlaces: [connection, connection] }));
  });

});

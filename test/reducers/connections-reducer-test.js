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

});

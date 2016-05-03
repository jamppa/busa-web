import * as actions from '../../app/actions/connections-actions';
import connections from '../../app/reducers/connections-reducer';
import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

describe('Connections Reducer', () => {

  it('should handle REQUEST_CONNECTIONS_DEPARTURING_NEXT -action', () => {

    const action = actions.requestConnectionsDeparturingNext();
    const oldState = Map();

    const newState = connections(oldState, action);

    expect(newState).to.eql(fromJS({isLoading: true}));
  });

  it('should handle REQUEST_CONNECTIONS_DEPARTURING_NEXT -action without initial state', () => {

    const action = actions.requestConnectionsDeparturingNext();
    const newState = connections(undefined, action);

    expect(newState).to.eql(fromJS({isLoading: true}));
  });

  it('should just return the old state when action type is invalid or not supported', () => {

    const action = { type: 'INVALID_OR_NOT_SUPPORTED' };
    const oldState = fromJS({isLoading: true});

    const newState = connections(oldState, action);

    expect(newState).to.eql(oldState);
  });

});

import * as actions from '../../app/actions/connections-actions';
import { expect } from 'chai';

describe('Connections Actions', () => {

  it('should create REQUEST_CONNECTIONS_DEPARTURING_NEXT typed action', () => {
    const createdAction = actions.requestConnectionsDeparturingNext();
    expect(createdAction).to.eql({ type: actions.REQUEST_CONNECTIONS_DEPARTURING_NEXT });
  });

  it('should create RECEIVE_CONNECTIONS typed action', () => {
    const createdAction = actions.receiveConnections([{id: '1'}]);
    expect(createdAction).to.eql({ type: actions.RECEIVE_CONNECTIONS, payload: { connections: [{id: '1'}]} });
  });

});

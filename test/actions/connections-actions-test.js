import * as actions from '../../app/actions/connections-actions';
import { expect } from 'chai';

describe('Connections Actions', () => {

  it('should create REQUEST_CONNECTIONS_DEPARTURING_NEXT typed action', () => {
    const createdAction = actions.requestConnectionsDeparturingNext();
    expect(createdAction).to.eql({ type: actions.REQUEST_CONNECTIONS_DEPARTURING_NEXT });
  });

  it('should create RECEIVE_CONNECTIONS_DEPARTURING_NEXT typed action with payload', () => {
    const connection = { id: '123' };
    const createdAction = actions.receiveConnectionsDeparturingNext([connection]);
    expect(createdAction).to.eql({ type: actions.RECEIVE_CONNECTIONS_DEPARTURING_NEXT, payload: { connections: [connection]} });
  });

  it('should create REQUEST_CONNECTIONS_BY_PLACES action', () => {
    const departurePlace = 'Nummela';
    const arrivalPlace = 'Helsinki';
    const createdAction = actions.requestConnectionsByPlaces(departurePlace, arrivalPlace);
    expect(createdAction).to.eql({ type: actions.REQUEST_CONNECTIONS_BY_PLACES, payload: { departurePlace, arrivalPlace } });
  });

});

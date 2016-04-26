import * as actions from '../../app/actions/connection-actions';
import { expect } from 'chai';

describe('Connection action creator', () => {

  it('should create REQUEST_CONNECTIONS_DEPARTURING_NEXT typed action', () => {
    const createdAction = actions.requestConnectionsDeparturingNext();
    expect(createdAction).to.eql({ type: actions.REQUEST_CONNECTIONS_DEPARTURING_NEXT });
  });
    
});

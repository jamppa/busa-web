import * as actions from '../actions/connections-actions';
import { fromJS } from 'immutable';

const handleRequestConnectionsDeparturingNext = (state) => {
  return state.merge({isLoading: true});
};

const handleReceiveConnectionsDeparturingNext = (state, action) => {
  return state.merge({
    isLoading: false,
    departuringNext: action.payload.connections
  });
}

const actionHandlers = {
  [actions.REQUEST_CONNECTIONS_DEPARTURING_NEXT]: handleRequestConnectionsDeparturingNext,
  [actions.RECEIVE_CONNECTIONS_DEPARTURING_NEXT]: handleReceiveConnectionsDeparturingNext
};

export const initialState = fromJS({
  isLoading: false,
  departuringNext: []
});

export function connections(state = initialState, action) {
  const handler = actionHandlers[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
}
